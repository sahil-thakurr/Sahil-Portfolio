import { motion } from "framer-motion";
import {
  SiJavascript, SiReact, SiTailwindcss, SiGit,
  SiGithub, SiLinux, SiHtml5, SiCss3
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const skillIcons = [
  // ... (rest of skillIcons)
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "SQL", icon: BiLogoPostgresql, color: "#4169E1" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "MS Excel", icon: FaMicrosoft, color: "#217346" },
  { name: "PowerBI", icon: FaChartBar, color: "#F2C811" },
];

const Skills = () => {
  // Triple the icons to ensure smooth loop
  const duplicatedIcons = [...skillIcons, ...skillIcons, ...skillIcons];

  return (
    <section id="skills" className="py-20 bg-background/50 backdrop-blur-sm overflow-hidden border-y border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
      >
        Technical Arsenal
      </motion.h2>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-12 py-4"
        >
          {duplicatedIcons.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/item"
            >
              <skill.icon
                className="text-4xl transition-transform duration-300 group-hover/item:scale-110"
                style={{ color: skill.color }}
              />
              <span className="text-lg font-medium text-foreground/80 group-hover/item:text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default Skills;
