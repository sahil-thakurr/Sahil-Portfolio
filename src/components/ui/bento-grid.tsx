import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-min grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="hover-shiny-border h-full">
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "h-full row-span-1 rounded-xl group/bento transition-all duration-300 p-4 dark:bg-black border border-white/[0.1] justify-between flex flex-col space-y-4 relative z-10 hover:shadow-2xl hover:backdrop-blur-md",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-2xl">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            {description}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
