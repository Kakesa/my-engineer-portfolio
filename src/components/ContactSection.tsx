import { Download, FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.description) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }

    const body = `Bonjour Espoir,%0D%0A%0D%0AJe suis ${encodeURIComponent(form.name)}.%0D%0A%0D%0A📋 Sujet : ${encodeURIComponent(form.subject)}%0D%0A💰 Budget estimé : ${encodeURIComponent(form.budget || "Non précisé")}%0D%0A📞 Téléphone : ${encodeURIComponent(form.phone || "Non précisé")}%0D%0A%0D%0A📝 Description du projet :%0D%0A${encodeURIComponent(form.description)}%0D%0A%0D%0ACordialement,%0D%0A${encodeURIComponent(form.name)}%0D%0A${encodeURIComponent(form.email)}`;

    window.location.href = `mailto:espoirkakesa2@gmail.com?subject=${encodeURIComponent(`Demande de devis - ${form.subject}`)}&body=${body}`;

    toast({ title: "Redirection", description: "Votre client mail va s'ouvrir avec le devis pré-rempli." });
    setForm({ name: "", email: "", phone: "", subject: "", description: "", budget: "" });
  };

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

        <div className="max-w-5xl mx-auto">
          <div className="card-gradient border border-border rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
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

                {/* Download CV */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
                  <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Télécharger mon CV</h4>
                  <Button variant="hero" size="default" asChild>
                    <a href="/Espoir_Kakesa.pdf" download>
                      <Download className="w-4 h-4" />
                      Télécharger CV
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Demande de devis</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" placeholder="+243..." value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget estimé</Label>
                      <Input id="budget" name="budget" placeholder="Ex: 500$" value={form.budget} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet du projet *</Label>
                    <Input id="subject" name="subject" placeholder="Ex: Site e-commerce, Application mobile..." value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description du projet *</Label>
                    <Textarea id="description" name="description" placeholder="Décrivez votre projet, vos besoins et vos attentes..." rows={4} value={form.description} onChange={handleChange} />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Envoyer la demande
                  </Button>
                </form>
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
