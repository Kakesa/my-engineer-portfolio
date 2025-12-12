import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            &lt;Me contacter /&gt;
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je suis ouvert aux opportunités de collaboration et aux nouveaux projets.
            N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-gradient border border-border rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:espoirkakesa2@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">espoirkakesa2@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+243828863897"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium">+243 828 863 897</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localisation</p>
                      <p className="font-medium">Kinshasa/Ngaliema, RDC</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Réseaux sociaux</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Kakesa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/espoir-kakesa-b9060124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Télécharger mon CV</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Obtenez une copie complète de mon parcours professionnel et de mes compétences.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="/CV_Espoir_Kakesa.pdf" download>
                    <Download className="w-5 h-5" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Langues</p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-secondary text-sm">
              🇫🇷 Français - Avancé
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-sm">
              🇬🇧 Anglais - Intermédiaire
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
