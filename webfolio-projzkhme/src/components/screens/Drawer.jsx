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
  { id: "home", label: "Home", url: "/" },
  { id: "profile", label: "Profile", url: "/profile" },
  { id: "works", label: "Work Timeline", url: "/work-timeline" },
  { id: "projects", label: "Projects", url: "/projects" },
];

function Drawer({ toggleMenu }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-[var(--theme-background-light)] flex flex-col items-center justify-center text-[var(--theme-text-light)]">
      <nav className="absolute top-8 right-8">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 cursor-pointer hover:opacity-75"
        >
          <img src={icons.close.path} alt={icons.close.description} />
        </button>
      </nav>

      <div className="flex flex-row items-center gap-20">
        <section className="text-center">
          <span className="text-xl font-bold">projzkhme</span>
          <span className="text-base block">PORTFOLIO</span>
        </section>

        <section className="text-2xl">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={link.url}
                  target="_self"
                  rel="noopener noreferrer"
                  whileHover={{ opacity: 0.75 }}
                  whileTap={{ opacity: 0.75 }}
                  className="transition-all duration-300"
                >
                  <span className="font-bold">{link.label.toUpperCase()}</span>
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
    </div>
  );
}

export default Drawer;
