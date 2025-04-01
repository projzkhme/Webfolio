import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Introduction from "../components/sections/Introduction";
import Services from "../components/sections/Services";

const sections = [Introduction, Services];

function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <div onWheel={handleScroll} className="fixed inset-0 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {sections[currentSection] && sections[currentSection]()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
