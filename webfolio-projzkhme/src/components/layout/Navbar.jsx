import { useState } from "react";
import { motion } from "framer-motion";
import Drawer from "../screens/Drawer";

const logo = "projzkhme";

const icons = {
  menu: {
    label: "Menu",
    description: "Menu Icon",
    path: "/menu.svg",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav className="sticky top-0 w-full z-50 p-8 flex justify-between items-center">
        <div className="text-base font-bold cursor-pointer">
          <motion.a
            href="/"
            target="_self"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.75 }}
            whileTap={{ opacity: 0.75 }}
            className="transition-all duration-300"
          >
            <span className="font-bold">{logo}</span>
          </motion.a>
        </div>
        <button
          className="cursor-pointer w-10 h-10 hover:opacity-75"
          onClick={toggleMenu}
        >
          <img
            src={icons.menu.path}
            alt={icons.menu.description}
            className="w-full h-full"
          />
        </button>
      </nav>

      {isOpen && <Drawer toggleMenu={toggleMenu} />}
    </>
  );
}
