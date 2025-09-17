import {
  Atom,
  Code2,
  Coffee,
  Database,
  FileCode,
  Layers,
  Leaf,
  Wind,
  Github,
  Code,
  Figma,
} from "lucide-react";

const skills = [
  // 🖥️ Programming Languages
  { name: "C", icon: <Code2 className="text-blue-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "C++", icon: <Code2 className="text-indigo-600 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Java", icon: <Coffee className="text-red-600 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "Python", icon: <Code2 className="text-yellow-500 group-hover:scale-125 transition-transform duration-300" /> },
  { name: "TypeScript", icon: <FileCode className="text-blue-500 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "JavaScript (ES6+)", icon: <FileCode className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300" /> },

  // 🎨 Frontend Development
  { name: "HTML/CSS", icon: <Code2 className="text-orange-500 group-hover:scale-125 transition-transform duration-300" /> },
  { name: "Jquery", icon: <Layers className="text-blue-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "React", icon: <Atom className="text-cyan-400 group-hover:animate-spin" /> },
  { name: "Tailwind CSS", icon: <Wind className="text-sky-500 group-hover:scale-125 transition-transform duration-300" /> },

  // ⚙️ Backend Development
  { name: "Hibernate", icon: <Layers className="text-green-600 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Spring/Spring Boot", icon: <Leaf className="text-green-500 group-hover:scale-110 transition-transform duration-300" /> },

  // 🗄️ Database
  { name: "MySQL", icon: <Database className="text-blue-600 group-hover:scale-110 transition-transform duration-300" /> },

  // 🛠️ Tools & Platforms
  { name: "GitHub", icon: <Github className="text-gray-700 group-hover:scale-125 transition-transform duration-300" /> },
  { name: "VS Code", icon: <Code className="text-blue-500 group-hover:scale-125 transition-transform duration-300" /> }
];




export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover group"
            >
              <div className="flex items-center gap-3 text-left mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
