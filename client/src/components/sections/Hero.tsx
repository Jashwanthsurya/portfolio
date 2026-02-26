import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full glass-panel text-primary font-medium text-sm mb-6 border-primary/30">
              👋 Welcome to my portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Hi, I'm <span className="text-gradient">Jashwanth D</span>
              <br />
              Building the Future of Tech.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              A passionate <span className="text-white font-medium">DevOps Engineer</span> & <span className="text-white font-medium">Full-Stack Developer</span> focused on robust infrastructure and scalable applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-background font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
