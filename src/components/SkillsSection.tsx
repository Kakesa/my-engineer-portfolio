import { Code, Database, GitBranch, Layout, Server, Wrench } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks & Bibliothèques",
    icon: Layout,
    skills: ["Laravel", "Node.js", "Express", "Adonis", "Angular", "React", "Vue.js"],
  },
  {
    title: "CSS & Design",
    icon: Server,
    skills: ["Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Outils & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

const SkillsSection = () => {
  const headerReveal = useScrollReveal();
  const cardsReveal = useStaggerReveal(skillCategories.length);

  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30">
      <div className="container px-6">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 reveal-blur ${headerReveal.isVisible ? "revealed" : ""}`}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            &lt;Mes compétences /&gt;
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stack <span className="gradient-text">Technique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des applications web modernes et performantes.
          </p>
        </div>

        <div ref={cardsReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 reveal-scale ${cardsReveal.isVisible ? "revealed" : ""}`}
              style={cardsReveal.getStaggerDelay(index)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
