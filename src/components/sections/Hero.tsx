import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "@/assets/profile.jpeg";
import resumeFile from "@/assets/Sahil_Thakur_Resume.pdf";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0 order-1 md:order-1"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 grainy-golden-border p-1.5 shadow-2xl">

              {/* ONLY THIS DIV IS NOW motion-enabled */}
              <motion.div
                whileHover={{
                  y: -2,
                  boxShadow: "0px 20px 60px rgba(255, 215, 0, 0.35)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="overflow-hidden rounded-full h-full w-full bg-background relative border-4 border-black/80"
              >
                <img
                  src={profilePic}
                  alt="Sahil Thakur Profile"
                  className="h-full w-full object-cover object-[center_top] scale-105"
                  style={{ objectPosition: "center 30%" }}
                />

                {/* Subtle Glow Effect behind the image */}
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-2">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl leading-none"
            >
              Hello! <br />
              <div
                className="relative inline-block cursor-default group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
                  I'm{" "}
                </span>

                <span className="relative inline-grid grid-cols-1 grid-rows-1 align-bottom overflow-visible">
                  {/* SAHIL THAKUR - Erasing Effect */}
                  <motion.span
                    animate={{
                      opacity: isHovered ? 0 : 1,
                      filter: isHovered ? "blur(4px)" : "blur(0px)",
                      scale: isHovered ? 0.95 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="col-start-1 row-start-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent inline-block whitespace-nowrap"
                  >
                    SAHIL THAKUR
                  </motion.span>

                  {/* TONY SOPRANO - Reveal Effect */}
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(4px)", scale: 1.05 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      filter: isHovered ? "blur(0px)" : "blur(4px)",
                      scale: isHovered ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="col-start-1 row-start-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent inline-block whitespace-nowrap pointer-events-none"
                  >
                    TONY SOPRANO
                  </motion.span>
                </span>

                {/* Particle Underline Reveal */}
                <motion.div
                  animate={{
                    width: isHovered ? "100%" : "0%",
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] rounded-full"
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl md:leading-relaxed"
            >
              Computer Science undergraduate with strong fundamentals in data structures,
              object-oriented programming, and DBMS. I specialize in building real-time,
              data-driven applications using <strong>Java</strong>,{" "}
              <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
              <strong>SQL</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 sm:flex-row"
            >
              <a href="#projects">
                <Button size="lg" className="h-14 px-10 text-lg group rounded-full">
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 text-lg rounded-full border-primary/20 hover:bg-primary/5"
                >
                  Resume <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
