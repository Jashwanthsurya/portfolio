import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Jashwanth D</h2>
          <p className="text-muted-foreground">DevOps Engineer & Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Jashwanthsurya"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jashwanth-d-783a81249"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:jashwanth.ei22@bmsce.ac.in"
            className="p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary transition-all duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <div className="text-muted-foreground text-sm text-center md:text-right">
          &copy; {currentYear} Jashwanth D.<br />All rights reserved.
        </div>
      </div>
    </footer>
  );
}
