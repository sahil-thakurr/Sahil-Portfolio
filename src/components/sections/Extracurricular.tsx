import { motion } from "framer-motion";
import {
  Users, Music, Video, Calendar,
  Gamepad2
} from "lucide-react";
import { FaChessKnight, FaFutbol } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";

const Extracurricular = () => {
  const achievements = [
    {
      icon: <Music className="w-5 h-5" />,
      text: "Organized literary events including Shaam-e-Sukhan and debates, increasing student participation."
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Interviewed seniors and faculty to document academic and cultural narratives."
    },
    {
      icon: <Video className="w-5 h-5" />,
      text: "Led a 3-member team to create a documentary highlighting winter challenges of Pariah communities."
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Planned and coordinated major events such as Unifest."
    }
  ];

  const interests = [
    { name: "Films", icon: BiMoviePlay, color: "#E50914" },
    { name: "Football", icon: FaFutbol, color: "#FFFFFF" },
    { name: "Cricket", icon: GiCricketBat, color: "#1D4ED8" },
    { name: "Chess", icon: FaChessKnight, color: "#8B5CF6" }
  ];

  return (
    <section id="extracurricular" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Extracurricular
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="hover-shiny-border">
              <div className="p-8 rounded-3xl bg-secondary/5 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-2xl backdrop-blur-sm group relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                      Lingo Freaks Literary Society
                    </h3>
                    <p className="text-primary font-bold text-lg">Club Head, GCET</p>
                  </div>
                  <span className="text-primary font-bold text-base">
                    2023 – 2024
                  </span>
                </div>

                <ul className="space-y-6">
                  {achievements.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start group/item"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <p className="text-foreground/80 leading-relaxed font-medium group-hover/item:text-foreground transition-colors pt-1">
                        {item.text}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-secondary/5 border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <Gamepad2 className="text-primary" />
                My Other Interests
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <motion.div
                    key={interest.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all text-center group/card"
                  >
                    <interest.icon
                      className="text-4xl mx-auto mb-3 transition-transform duration-300 group-hover/card:rotate-12"
                      style={{ color: interest.color }}
                    />
                    <span className="font-bold text-foreground/70 group-hover/card:text-foreground">
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 italic text-sm text-center text-muted-foreground">
                <strong>Sports, Films and Music in that order.</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
