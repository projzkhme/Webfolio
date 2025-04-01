import { useState, useCallback, useEffect } from "react";
import Drawer from "../screens/Drawer";

const logo = "projzkhme";
const menuIcon = {
  label: "Menu",
  description: "Menu Icon",
  path: "/menu.svg",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        >
          <span className="font-bold">{logo}</span>
        </a>
        <button
          className="cursor-pointer w-10 h-10 hover:opacity-75"
          onClick={toggleMenu}
        >
          <img
            src={menuIcon.path}
            alt={menuIcon.description}
            className="w-full h-full"
          />
        </button>
      </nav>

      {isOpen && <Drawer toggleMenu={toggleMenu} />}
    </>
  );
}
