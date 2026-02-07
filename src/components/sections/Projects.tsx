import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";
import {
  SiReact, SiTypescript, SiTailwindcss, SiPostgresql, SiJavascript, SiHtml5, SiCss3
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { SiOpenai } from "react-icons/si";



// Import images from assets
import OdinSkyImg from "@/assets/OdinSky.png";
import LexiconImg from "@/assets/Lexicon.png";
import DashBoardImg from "@/assets/DashBoard.png";

interface Project {
  title: string;
  description: string;
  points: string[];
  tech: { name: string; icon: any; color: string }[];
  image: string;
  github?: string;
  demo?: string;
  metrics?: string;
}

const techIcons: { [key: string]: any } = {
  "React": SiReact,
  "React (TSX)": SiReact,
  "TypeScript": SiTypescript,
  "TailwindCSS": SiTailwindcss,
  "OpenWeather API": WiDaySunny,
  "Puter.ai": SiOpenai,
  "PowerBI": FaChartBar,
  "Data Analysis": Zap,
  "Visualization": Zap,
  "JavaScript": SiJavascript,
  "SQL": SiPostgresql
};

const projects: Project[] = [
  {
    title: "OdinSky – Weather Web App",
    description: "Built a responsive weather application providing real-time conditions and search functionality.",
    points: [
      "Integrated OpenWeather API with an average response time of 600ms.",
      "Optimized performance using lazy-loaded images, reducing LCP from 28s to 2.5s."
    ],
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "OpenWeather API", icon: WiDaySunny, color: "#FFD700" }
    ],
    image: OdinSkyImg,
    metrics: "LCP reduced by 91%",
    github: "https://github.com/sahil-thakurr/OdinSky",
    demo: "https://odinsky.vercel.app/"
  },
  {
    title: "Lexicon – Resume Analyzer",
    description: "Real-time AI-powered resume analyzer for instant parsing and feedback.",
    points: [
      "Integrated Puter.ai for real-time resume parsing and feedback.",
      "Developed a clean, user-friendly interface with a focus on minimalism and UX."
    ],
    tech: [
      { name: "React (TSX)", icon: SiReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Puter.ai", icon: SiOpenai, color: "#10a37f" }
    ],
    image: LexiconImg,
    github: "https://github.com/sahil-thakurr/lexicon",
    demo: "https://lexicon-psi.vercel.app/"
  },
  {
    title: "J&K Election Dashboard",
    description: "Interactive PowerBI dashboard for analyzing J&K election data.",
    points: [
      "Analyzed voter demographics, turnout trends, and party performance.",
      "Highlighted women’s participation and historical comparisons for insights."
    ],
    tech: [
      { name: "PowerBI", icon: FaChartBar, color: "#F2C811" },
      { name: "Data Analysis", icon: Zap, color: "#FFA500" },
      { name: "Visualization", icon: Zap, color: "#FF4500" }
    ],
    image: DashBoardImg,
    github: "https://github.com/sahil-thakurr/Election-DashBoard",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 tracking-tight">
            Featured Work
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden bg-white/5 border-white/10 hover:border-primary/40 transition-all duration-300 group shadow-2xl backdrop-blur-sm">
                <div className="h-56 relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {project.metrics && (
                    <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-primary shadow-lg">
                      <Zap className="w-3.5 h-3.5" />
                      {project.metrics}
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground/70 line-clamp-2 mt-2 leading-relaxed italic">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <ul className="text-sm text-foreground/80 space-y-3 font-medium">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start group/point">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 group-hover/point:scale-125 group-hover/point:bg-primary transition-all" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map(t => (
                      <motion.span
                        key={t.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center gap-1.5 bg-white/5 text-xs font-bold text-foreground/80 px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default shadow-sm hover:shadow-primary/20"
                      >
                        <t.icon
                          className="w-3.5 h-3.5 transition-transform"
                          style={{ color: t.color }}
                        />
                        {t.name}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-4 pt-6 pb-8 px-6">
                  {project.github && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="w-full font-bold h-12 border-primary/20 hover:border-primary/50 hover:bg-primary/5 group/btn">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" /> Source
                        </Button>
                      </a>
                    </motion.div>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full font-bold h-12 shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-shadow">
                          <ExternalLink className="mr-2 h-4 w-4" /> {project.title.includes("Dashboard") ? "View Report" : "Live"}
                        </Button>
                      </a>
                    </motion.div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
