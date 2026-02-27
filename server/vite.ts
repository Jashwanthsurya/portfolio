import { type Express } from "express";
import type { Logger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
import crypto from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function setupVite(server: Server, app: Express) {
  // Vite 7 expects crypto.hash, which is unavailable in Node 18.
  const nodeCrypto = crypto as any;
  if (typeof nodeCrypto.hash !== "function") {
    nodeCrypto.hash = (
      algorithm: string,
      data: crypto.BinaryLike,
      outputEncoding: crypto.BinaryToTextEncoding = "hex",
    ) => crypto.createHash(algorithm).update(data).digest(outputEncoding);
  }

  const { createServer: createViteServer, createLogger } = await import("vite");
  const viteLogger: Logger = createLogger();

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        __dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
