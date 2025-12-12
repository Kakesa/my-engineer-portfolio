import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
              <img
                src={profileImage}
                alt="Espoir Kakesa - Développeur Full Stack"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-full p-3 animate-pulse-glow">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0 animate-slide-up">
              <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
                &lt;Bonjour, je suis /&gt;
              </p>
            </div>

            <h1 className="opacity-0 animate-slide-up stagger-1 text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Espoir <span className="gradient-text">KAKESA</span>
            </h1>

            <h2 className="opacity-0 animate-slide-up stagger-2 text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Développeur Full Stack
            </h2>

            <p className="opacity-0 animate-slide-up stagger-3 text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Passionné par la création d'applications intuitives et performantes. 
              Je maîtrise divers langages et frameworks pour fournir des solutions 
              innovantes qui répondent aux besoins des utilisateurs.
            </p>

            {/* Contact Info */}
            <div className="opacity-0 animate-slide-up stagger-4 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kinshasa, RDC</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:espoirkakesa2@gmail.com" className="hover:text-primary transition-colors">
                  espoirkakesa2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+243 828 863 897</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-slide-up stagger-5 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/CV_Espoir_Kakesa.pdf" download>
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in stagger-5 flex justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://github.com/Kakesa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/espoir-kakesa-b9060124"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
