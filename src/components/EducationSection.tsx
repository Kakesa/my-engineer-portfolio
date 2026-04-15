import { Award, GraduationCap } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    title: "Formation Développeur Full Stack",
    institution: "Kadea Academy",
    location: "Kinshasa",
    period: "Depuis Janvier 2025",
    type: "Certification Simplon Bac + 2",
    current: true,
  },
  {
    title: "React - Développement Front-End",
    institution: "Coursera",
    location: "En ligne",
    period: "Depuis 2026",
    type: "Certification en Ligne",
    current: true,
  },
  {
    title: "Formation Développeur Web Full Stack",
    institution: "Mudey",
    location: "Lyon (En ligne)",
    period: "Décembre 2023 - Juin 2024",
    type: "Certification en Ligne",
    current: false,
  },
  {
    title: "Conception de Logiciel et Mobile",
    institution: "Orange Digital Center",
    location: "Kinshasa",
    period: "Février 2022 - Octobre 2022",
    type: "Certificat",
    current: false,
  },
  {
    title: "Graduat en Gestion Informatique",
    institution: "Institut Supérieur de Commerce (ISC)",
    location: "Kinshasa",
    period: "Novembre 2022",
    type: "Bac + 3",
    current: false,
  },
  {
    title: "Obtention diplôme d'État en Pedagogie Générale",
    institution: "Lycée Kufita",
    location: "Gungu",
    period: "Septembre 2017",
    type: "Bac ",
    current: false,
  },
];

const EducationSection = () => {
  const headerReveal = useScrollReveal();
  const cardsReveal = useStaggerReveal(education.length);

  return (
    <section id="education" className="py-20 lg:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px] animate-float" />

      <div className="container px-6 relative z-10">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 reveal-blur ${headerReveal.isVisible ? "revealed" : ""}`}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            &lt;Ma formation /&gt;
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Diplômes & <span className="gradient-text-shimmer">Formations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes certifications professionnelles.
          </p>
        </div>

        <div ref={cardsReveal.ref} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-3 tilt-card reveal-flip ${cardsReveal.isVisible ? "revealed" : ""}`}
              style={cardsReveal.getStaggerDelay(index)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {edu.current && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full relative overflow-hidden">
                        <span className="relative z-10">En cours</span>
                        <span className="absolute inset-0 bg-primary/10 animate-pulse" />
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{edu.title}</h3>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    {edu.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
