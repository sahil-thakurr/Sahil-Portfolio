import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science (Core)",
    institution: "Galgotias College of Engineering and Technology",
    year: "2022 – 2026",
    description: "Greater Noida, Uttar Pradesh"
  },
  {
    degree: "Senior Secondary Education – 94.6%",
    institution: "Shiksha Niketan Senior Secondary School",
    year: "2021 – 2022",
    description: "Jammu, Jammu & Kashmir"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors text-white">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg text-primary/80 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-base font-bold text-primary">
                      {edu.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground italic">
                    <span className="w-8 h-[1px] bg-muted-foreground/30" />
                    {edu.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
