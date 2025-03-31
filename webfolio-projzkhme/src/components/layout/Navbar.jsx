import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "../screens/Drawer";

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
      <nav className="fixed w-full z-50 p-8 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">projzkhme</div>
        <div className="cursor-pointer w-10 h-10" onClick={toggleMenu}>
          <img
            src={icons.menu.path}
            alt={icons.menu.description}
            className="w-full h-full hover:opacity-75"
          />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && <Drawer toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
}
