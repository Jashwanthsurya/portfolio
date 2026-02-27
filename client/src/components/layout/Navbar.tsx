import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf", target: "_blank", rel: "noopener noreferrer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            Jashwanth<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-primary hover:border-primary transition-all duration-300"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
