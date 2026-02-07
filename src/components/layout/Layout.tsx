import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-6 rounded-full border border-white/10 bg-black/50 px-6 py-3 backdrop-blur-md shadow-lg"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {link.name}
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
