import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import acadexImg from "@/assets/projects/acadex.webp";
import hkEventsImg from "@/assets/projects/hk-events.webp";
import xCloneImg from "@/assets/projects/x-clone.png";
import kinEventsImg from "@/assets/projects/kin-events.webp";
import mafralandImg from "@/assets/projects/mafraland.webp";
import maranataImg from "@/assets/projects/image.png";
import careerstartImg from "@/assets/projects/careerstart.webp";
import bisengoImg from "@/assets/projects/bisengo.png";
import banyOfficialImg from "@/assets/projects/bany-official.png";
import yoloConciergeImg from "@/assets/projects/yolo-concierge.png";

const projects = [
  {
    title: "Bany Official",
    description: "Site officiel de Bany Talks — podcast et plateforme média dédiés à l'entrepreneuriat, l'investissement et la stratégie en RDC et en Afrique.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://banyofficial.com/",
    githubUrl: "https://github.com/espoir-kakesa",
    image: banyOfficialImg
  },
  {
    title: "YOLO Le Concierge",
    description: "Plateforme de conciergerie multiservices premium à Kinshasa : location de véhicules, déménagement assisté et services sur mesure 24/7.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://yololeconcierge.com/",
    githubUrl: "https://github.com/espoir-kakesa",
    image: yoloConciergeImg
  },
  {
    title: "Acadex",
    description: "Plateforme complète de gestion d'établissement scolaire. Gérez facilement les élèves, professeurs, parents et personnel. Administrez les cours, les présences, les bulletins et bien plus en un seul endroit.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "TypeScript"],
    liveUrl: "https://acadex-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/acadex",
    image: acadexImg
  },
  {
    title: "HK Events",
    description: "Plateforme de gestion d'événements et suivi des invités. Créez des événements, gérez les invitations, suivez les confirmations et les déclinaisons.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://hkeventscd.com",
    githubUrl: "https://github.com/espoir-kakesa/hk-events",
    image: hkEventsImg
  },
  {
    title: "X Clone",
    description: "Clone de la plateforme de réseautage social X (anciennement Twitter). Partagez vos pensées, interagissez avec d'autres utilisateurs.",
    technologies: ["Tailwind CSS", "AdonisJS", "MySQL", "HTML", "CSS"],
    liveUrl: "https://clounage-x.onrender.com/",
    githubUrl: "https://github.com/espoir-kakesa/x-clone",
    image: xCloneImg
  },
  {
    title: "Kin Events",
    description: "Plateforme de gestion d'événements avec suivi des participants et des confirmations.",
    technologies: ["Laravel", "HTML", "CSS", "MySQL", "Tailwind CSS"],
    liveUrl: "https://kinevents.fr/",
    githubUrl: "https://github.com/espoir-kakesa/kin-events",
    image: kinEventsImg
  },
  {
    title: "Mafraland",
    description: "Projet innovant avec interface moderne et fonctionnalités avancées.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://mafralandapp.web.app/",
    githubUrl: "https://github.com/espoir-kakesa/mafraland",
    image: mafralandImg
  },
  {
    title: "OMNIS faith",
    description: "Site web et Application web complète avec gestion de contenu et interface intuitive.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://omis-fnith.web.app/",
    githubUrl: "https://github.com/espoir-kakesa/maranata",
    image: maranataImg
  },
  {
    title: "CareerStart",
    description: "Plateforme d'aide à l'insertion professionnelle et développement de carrière.",
    technologies: ["Tailwind CSS", "Laravel", "MySQL", "HTML", "CSS"],
    liveUrl: "https://careerstart-demo.example.com",
    githubUrl: "https://github.com/espoir-kakesa/careerstart",
    image: careerstartImg
  },
  {
    title: "Bisengo",
    description: "Site web pour l'ONG Bisengo. Présentation des missions humanitaires, collecte de dons et sensibilisation communautaire en Afrique.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://esengofoundation.vercel.app",
    githubUrl: "https://github.com/espoir-kakesa/bisengo",
    image: bisengoImg
  }
];

const ProjectCard = ({ project, index, isVisible, staggerDelay }: {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
  staggerDelay: React.CSSProperties;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/15 tilt-card reveal-zoom ${isVisible ? "revealed" : ""}`}
      style={staggerDelay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-48 object-cover transition-all duration-1000 ${isHovered ? "scale-110 blur-[1px]" : "scale-100"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-all duration-500 flex items-end justify-center pb-4 gap-3 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Button
            size="sm"
            className={`bg-primary hover:bg-primary/90 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visiter
          </Button>
        </div>
        {/* Shimmer overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ${isHovered ? "translate-x-full" : "-translate-x-full"}`} />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full transition-all duration-500 hover:bg-primary/25 hover:scale-110 hover:-translate-y-0.5 ${isHovered ? "opacity-100 translate-y-0" : ""}`}
              style={{ transitionDelay: `${techIndex * 60}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const isMobile = useIsMobile();
  const pageSize = isMobile ? 2 : 3;
  const totalPages = Math.ceil(projects.length / pageSize);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const paginatedProjects = projects.slice(page * pageSize, page * pageSize + pageSize);
  const headerReveal = useScrollReveal();
  const cardsReveal = useStaggerReveal(pageSize);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/3 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-accent/3 rounded-full blur-[80px] animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 reveal-blur ${headerReveal.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text-shimmer">Réalisations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Cliquez pour visiter.
          </p>
        </div>

        <div ref={cardsReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              key={`${page}-${project.title}`}
              project={project}
              index={index}
              isVisible={cardsReveal.isVisible}
              staggerDelay={cardsReveal.getStaggerDelay(index)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Page précédente"
                  disabled={page === 0}
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#projects"
                    isActive={page === i}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(i);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Page suivante"
                  disabled={page >= totalPages - 1}
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
