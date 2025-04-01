import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ProfileLinks from "../layout/ProfileLinks";

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
  // Disable scroll when Drawer is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll when Drawer is closed
    };
  }, []);

  const handleClose = useCallback(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-[var(--theme-background-light)] text-[var(--theme-text-light)]"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Fade out
      transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
    >
      <nav className="absolute top-4 right-8">
        <button
          onClick={handleClose}
          aria-label={icons.close.label}
          className="w-10 h-10 cursor-pointer hover:opacity-75"
        >
          <img
            src={icons.close.path}
            alt={icons.close.description}
            aria-hidden="true" // Hide image from screen readers
          />
        </button>
      </nav>

      <motion.div
        className="flex flex-row items-center gap-20"
        initial={{ y: -50 }} // Start off-screen
        animate={{ y: 0 }} // Slide in
        transition={{ duration: 0.8 }}
      >
        <section className="text-center">
          <span className="text-xl font-bold">projzkhme</span>
          <span className="text-sm block">PORTFOLIO</span>
        </section>

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
                aria-label={link.label} // Added aria-label for better accessibility
              >
                <span className="text-2xl font-bold hover:underline hover:underline-offset-4 transition-all duration-300">
                  {link.label.toUpperCase()}
                </span>
              </motion.a>
            </li>
          ))}
        </ul>

        <section className="flex flex-col gap-3">
          <span className="text-sm">LINKS</span>
          <ProfileLinks className="invert" />
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Drawer;
