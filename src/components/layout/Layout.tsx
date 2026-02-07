import { motion } from "framer-motion";
import { Home, User, Laptop, FolderCode, Mail } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Laptop },
    { name: "Projects", href: "#projects", icon: FolderCode },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed right-6 top-[40%] -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center pointer-events-none">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 rounded-full border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-2xl pointer-events-auto"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 hover:bg-white/10 text-muted-foreground hover:text-primary"
          >
            <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

            {/* Tooltip Label */}
            <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-xs font-bold text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {link.name}
            </span>

            {/* Indicator Dot */}
            <div className="absolute -right-1 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-x-hidden">
      <div className="ambient-bg" />
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <footer className="py-6 text-center text-sm text-muted-foreground relative z-10">
        © {new Date().getFullYear()} Sahil Thakur. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
