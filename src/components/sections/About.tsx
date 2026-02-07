import { motion } from "framer-motion";
import { User, Laptop } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Assets
import backgroundAboutme from "@/assets/backgroundAboutme.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 tracking-tight">
          About Me
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
      </motion.div>

      <BentoGrid className="max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
        <BentoGridItem
          title="About Me"
          description="Computer Science undergraduate with strong fundamentals in building real-time, data-driven applications. I work with Java, JavaScript, SQL, React (TypeScript), and Power BI, focusing on clean UI/UX and meaningful insights."
          header={
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden group/image">
              <div
                className="absolute inset-0 bg-cover opacity-30 group-hover/image:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${backgroundAboutme})`,
                  backgroundPosition: "center 20%"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <User className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          }
          className="md:col-span-1"
        />

        <BentoGridItem
          title="Continuous Learning"
          description="Technology evolves fast, and I make it a priority to keep up. I actively learn new tools, frameworks, and best practices through hands-on projects, documentation, and real-world problem solving."
          header={
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden group/image">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover/image:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          }
          className="md:col-span-1"
        />
      </BentoGrid>
    </section>
  );
};

export default About;
