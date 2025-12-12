import { Code, Database, GitBranch, Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks & Bibliothèques",
    icon: Layout,
    skills: ["Laravel", "Node.js", "Express", "Adonis", "Angular", "Vue.js"],
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
  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300"
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
