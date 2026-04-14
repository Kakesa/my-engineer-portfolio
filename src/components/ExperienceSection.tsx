import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Développeur Back-end",
    company: "LGIC-Tech Sarlu",
    location: "Matadi, RDC",
    period: "Juillet 2025 - Présent",
    current: true,
    tasks: [
      "Concevoir et maintenir des API robustes et évolutives avec Node.js et PHP",
      "Créer des sites web dynamiques",
      "Intégrer des bases de données et optimiser les performances",
      "Collaborer avec les équipes front-end pour assurer la cohérence architecturale",
    ],
  },
  {
    title: "Consultant",
    company: "CinqFive",
    location: "Kinshasa, RDC",
    period: "Août 2024 - 2025",
    current: false,
    tasks: [
      "Développer des interfaces utilisateur dynamiques avec Angular, HTML, CSS, Tailwind et JavaScript",
      "Collaborer avec les équipes de design pour garantir une expérience utilisateur optimale",
    ],
  },
  {
    title: "Développeur Full-Stack - Acadex",
    company: "Projet Personnel",
    location: "Kinshasa, RDC",
    period: "2024 - Présent",
    current: true,
    tasks: [
      "Conception et développement d'une plateforme complète de gestion d'établissement scolaire",
      "Gestion des élèves, professeurs, parents et personnel administratif",
      "Développement des modules de cours, présences et bulletins",
    ],
  },
  {
    title: "Développeur Full-Stack - HK Events",
    company: "Projet Personnel",
    location: "Kinshasa, RDC",
    period: "2024 - Présent",
    current: true,
    tasks: [
      "Création d'une plateforme de gestion d'événements et suivi des invités",
      "Développement du système d'invitations, confirmations et déclinaisons",
      "Mise en place d'un tableau de bord intuitif pour la gestion efficace",
    ],
  },
  {
    title: "Développeur Front-End - Clone X",
    company: "Projet Personnel",
    location: "Kinshasa, RDC",
    period: "2024",
    current: false,
    tasks: [
      "Clonage de la plateforme X (anciennement Twitter) avec React et Firebase",
      "Développement du feed en temps réel et des interactions utilisateurs",
    ],
  },
  {
    title: "Développeur back-end PHP/Laravel",
    company: "Projet Personnel",
    location: "Kinshasa, RDC",
    period: "Janvier 2025 - Avril 2025",
    current: false,
    tasks: [
      "Conception et développement d'une application de gestion des réservations d'hôtels",
      "Développement de l'interface d'administration et de l'interface utilisateur",
    ],
  },
  {
    title: "Développeur web - Plateforme d'apprentissage",
    company: "Apprendre à Coder",
    location: "Kinshasa, RDC",
    period: "Janvier 2025 - Avril 2025",
    current: false,
    tasks: [
      "Création d'une plateforme éducative fournissant des ressources et tutoriels",
      "Développement d'exercices pratiques pour différents langages de programmation",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const cardReveal = useScrollReveal({ threshold: 0.1 });
  const direction = index % 2 === 0 ? "reveal-left" : "reveal-right";

  return (
    <div
      className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect z-10" />

      {/* Content */}
      <div
        ref={cardReveal.ref}
        className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} ${direction} ${cardReveal.isVisible ? "revealed" : ""}`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {exp.current && (
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full animate-pulse">
                Actuel
              </span>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              {exp.period}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              {exp.company}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {exp.location}
            </div>
          </div>

          <ul className="space-y-2">
            {exp.tasks.map((task, taskIndex) => (
              <li
                key={taskIndex}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const ExperienceSection = () => {
  const headerReveal = useScrollReveal();

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container px-6">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 reveal-blur ${headerReveal.isVisible ? "revealed" : ""}`}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            &lt;Mon parcours /&gt;
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Expériences <span className="gradient-text">Professionnelles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel dans le développement web et logiciel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
