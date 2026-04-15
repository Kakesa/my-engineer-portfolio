import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const footerReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent" />
      <div
        ref={footerReveal.ref}
        className={`container px-6 relative z-10 reveal ${footerReveal.isVisible ? "revealed" : ""}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="gradient-text-shimmer">EK</span>
              <span className="text-muted-foreground">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              © 2025 Espoir Kakesa. Tous droits réservés.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kakesa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/espoir-kakesa-b9060124"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:espoirkakesa2@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
