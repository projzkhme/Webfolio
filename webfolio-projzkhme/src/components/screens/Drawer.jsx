import { motion } from "framer-motion";
import UILinks from "../common/UILinks";

const icons = {
  close: {
    label: "Close",
    description: "Close Icon",
    path: "/close.svg",
  },
};

const links = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "ABOUT",
    url: "/about",
  },
  {
    label: "WORK EXPERIENCE",
    url: "/work-experience",
  },
  {
    label: "PROJECTS",
    url: "/projects",
  },
];

// Generate 14 columns for the blinders effect
const columns = Array.from({ length: 14 });

function Drawer({ toggleMenu }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div className="absolute top-0 left-0 w-full h-full flex">
        {columns.map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05, // Staggered effect per column
              ease: "easeInOut",
            }}
            className="h-full flex-1 bg-[var(--theme-background-light)] origin-top"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-(--theme-text-light)"
      >
        <nav className="absolute top-8 right-8 w-full flex flex-row-reverse justify-between items-center">
          <div className="cursor-pointer w-10 h-10" onClick={toggleMenu}>
            <img
              src={icons.close.path}
              alt={icons.close.description}
              className="w-full h-full hover:opacity-75"
            />
          </div>
        </nav>
        <div className="flex items-start gap-50">
          <section className="flex flex-col items-center">
            <span className="text-2xl font-bold">projzkhme</span>
            <span className="text-base">PORTFOLIO</span>
          </section>

          <section className="text-3xl">
            <ul>
              {links.map((link, index) => (
                <li>
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ opacity: 0.75 }}
                    whileTap={{ opacity: 0.75 }}
                    className={`transition-all duration-300`}
                  >
                    <span className="font-bold">{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <span className="text-base">LINKS</span>
            <UILinks className="invert" />
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default Drawer;
