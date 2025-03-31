import { useEffect, useState } from "react";
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
  { id: "home", label: "HOME", url: "/" },
  { id: "about", label: "ABOUT", url: "/about" },
  { id: "works", label: "WORK TIMELINE", url: "/work-timeline" },
  { id: "projects", label: "PROJECTS", url: "/projects" },
];

function Drawer({ toggleMenu }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full z-50 bg-[var(--theme-background-light)] flex flex-col items-center justify-center text-[var(--theme-text-light)]"
    >
      <nav className="absolute top-8 right-8">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 cursor-pointer hover:opacity-75"
        >
          <img src={icons.close.path} alt={icons.close.description} />
        </button>
      </nav>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <span className="text-2xl font-bold">projzkhme</span>
          <span className="text-base block">PORTFOLIO</span>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl"
        >
          <ul>
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="font-bold hover:opacity-75 hover:underline hover:underline-offset-4"
              >
                <a href={link.url}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col gap-3"
        >
          <span className="text-base">LINKS</span>
          <UILinks className="invert" />
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Drawer;
