import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import acadexImg from "@/assets/projects/acadex.png";
import hkEventsImg from "@/assets/projects/hk-events.png";
import xCloneImg from "@/assets/projects/x-clone.jpg";
import kinEventsImg from "@/assets/projects/kin-events.png";
import mafralandImg from "@/assets/projects/mafraland.png";
import maranataImg from "@/assets/projects/maranata.png";
import careerstartImg from "@/assets/projects/careerstart.png";
import bisengoImg from "@/assets/projects/bisengo.jpg";

const projects = [
  {
    title: "Acadex",
    description: "Plateforme complète de gestion d'établissement scolaire. Gérez facilement les élèves, professeurs, parents et personnel. Administrez les cours, les présences, les bulletins et bien plus en un seul endroit.",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "TypeScript"],
    liveUrl: "https://acadex-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/acadex",
    image: acadexImg
  },
  {
    title: "HK Events",
    description: "Plateforme de gestion d'événements et suivi des invités. Créez des événements, gérez les invitations, suivez les confirmations et les déclinaisons.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://hk-events-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/hk-events",
    image: hkEventsImg
  },
  {
    title: "X Clone",
    description: "Clone de la plateforme de réseautage social X (anciennement Twitter). Partagez vos pensées, interagissez avec d'autres utilisateurs.",
    technologies: ["React", "Vite", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://x-clone-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/x-clone",
    image: xCloneImg
  },
  {
    title: "Kin Events",
    description: "Plateforme de gestion d'événements avec suivi des participants et des confirmations.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://kin-events-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/kin-events",
    image: kinEventsImg
  },
  {
    title: "Mafraland",
    description: "Projet innovant avec interface moderne et fonctionnalités avancées.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://mafraland-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/mafraland",
    image: mafralandImg
  },
  {
    title: "Maranata",
    description: "Application web complète avec gestion de contenu et interface intuitive.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://maranata-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/maranata",
    image: maranataImg
  },
  {
    title: "CareerStart",
    description: "Plateforme d'aide à l'insertion professionnelle et développement de carrière.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://careerstart-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/careerstart",
    image: careerstartImg
  }
];

const ProjectsSection = () => {
  const headerReveal = useScrollReveal();
  const cardsReveal = useStaggerReveal(projects.length);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 reveal-blur ${headerReveal.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Cliquez pour visiter.
          </p>
        </div>

        <div ref={cardsReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 reveal-rotate ${cardsReveal.isVisible ? "revealed" : ""}`}
              style={cardsReveal.getStaggerDelay(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visiter
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
