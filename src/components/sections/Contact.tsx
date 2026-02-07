import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Gmail",
    icon: <Mail className="h-8 w-8" />,
    href: "mailto:sahillsinghthakurr@gmail.com",
    color: "text-red-500 hover:text-red-600"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-8 w-8" />,
    href: "https://www.linkedin.com/in/sahill-thakurr/", // Replace with actual link
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-8 w-8" />,
    href: "https://twitter.com/yourhandle", // Replace with actual link
    color: "text-sky-400 hover:text-sky-500"
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-8 w-8" />,
    href: "https://www.instagram.com/sahill.thakurr/", // Replace with actual link
    color: "text-pink-500 hover:text-pink-600"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-20 px-4 mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Let's Connect
      </motion.h2>

      <div className="flex justify-center items-center">
        <Card className="w-full max-w-2xl bg-secondary/20 border-none">
          <CardHeader className="text-center">
            <CardTitle className="mb-4">Drop a message</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center gap-8 pb-10 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 }}
                className={`p-4 rounded-full bg-background shadow-lg hover:shadow-xl transition-shadow ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
