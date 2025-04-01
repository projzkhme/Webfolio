import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Drawer from "../screens/Drawer";

const logo = "projzkhme";
const menuIcon = {
  label: "Menu",
  description: "Menu Icon",
  path: "/menu.svg",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "bg-[var(--theme-background-dark)]" : "bg-transparent"
        }`}
      >
        <a
          href="/"
          className="text-base font-bold cursor-pointer transition-all duration-300 hover:opacity-75"
          aria-label="Home"
        >
          <span className="font-bold">{logo}</span>
        </a>
        <button
          className="cursor-pointer w-10 h-10 hover:opacity-75"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <img
            src={menuIcon.path}
            alt={menuIcon.description}
            className="w-full h-full"
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && <Drawer toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
