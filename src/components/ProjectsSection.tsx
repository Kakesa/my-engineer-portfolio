import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mafraPro from "@/assets/projects/mafraland.png";
import esengoPros from "@/assets/projects/home.png";
import careerApp from "@/assets/projects/careerstart.png";
import kinEvents from "@/assets/projects/kin-events.png";

const projects = [
  {
    title: "Esengo Foundation ONG Website",
    description: "Esengo Foundation est une ONG dédiée à lutter contre la malnutrition infantile et à offrir un avenir meilleur aux enfants vulnérables.",
     technologies: ["React", "Tailwind CSS", "Vite", "TypeScript", "Node.js"],
    liveUrl: "https://esengofoundation.vercel.app",
    image: esengoPros
  },
  {
    title: "Career App web",
    description: "Application web de gestion de carrière permettant aux utilisateurs de suivre leurs objectifs professionnels, de gérer leurs compétences et de planifier leur développement de carrière.",
    technologies: ["HTML", "Tailwind CSS","MySQL", "Laravel",],
    liveUrl: "https://example.com",
    image: careerApp
  },
  {
    title: "Park Mafraland",
    description: "Mafraland est un site vitrine captivant dédié à un restaurant familial, offrant une expérience culinaire délicieuse dans un cadre convivial. Les enfants peuvent également s'amuser dans notre espace de jeux et se rafraîchir dans nos piscines, garantissant des moments de joie pour toute la famille.",
    technologies: ["React", "Tailwind CSS", "Vite", "TypeScript", "Node.js"],
    liveUrl: "https://mafralandparc.vercel.app",
    image: mafraPro
  },
  {
    title: "Kin Events",
    description: "API robuste et sécurisée pour la gestion d'authentification et ressources.",
    technologies: ["HTML", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://kinevents.fr",
    image: kinEvents
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
