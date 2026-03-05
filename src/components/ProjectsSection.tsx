import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import acadexImg from "@/assets/projects/acadex.png";
import hkEventsImg from "@/assets/projects/hk-events.png";
import xCloneImg from "@/assets/projects/home.png";

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
    description: "Plateforme de gestion d'événements et suivi des invités. Créez des événements, gérez les invitations, suivez les confirmations et les déclinaisons. Un tableau de bord intuitif pour une gestion efficace.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://hk-events-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/hk-events",
    image: hkEventsImg
  },
  {
    title: "X Clone",
    description: "Clone de la plateforme de réseautage social X (anciennement Twitter). Partagez vos pensées, interagissez avec d'autres utilisateurs et explorez un feed en temps réel.",
    technologies: ["React", "Vite", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://x-clone-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/x-clone",
    image: xCloneImg
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Cliquez pour visiter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
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
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
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
