import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UIBtnScrollDown from "../components/common/UIBtnScrollDown";
import UIBtnScrollUp from "../components/common/UIBtnScrollUp";
import Introduction from "../components/sections/Introduction";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

const sections = [Introduction, Services, Contact];

function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const isScrolling = useRef(false); // Ref to handle scroll lock

  const handleScroll = useCallback((direction) => {
    if (isScrolling.current) return; // Prevent multiple triggers during scroll

    isScrolling.current = true;
    setScrollDirection(direction); // Update scroll direction

    setCurrentSection((prev) => {
      if (direction === "down" && prev < sections.length - 1) {
        return prev + 1;
      } else if (direction === "up" && prev > 0) {
        return 0; // Directly go to the first section
      }
      return prev;
    });

    // Lock scroll for a brief moment after each scroll action
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Adjust delay as needed
  }, []);

  const handleScrollToNext = () => {
    if (currentSection < sections.length - 1) {
      handleScroll("down");
    }
  };

  const handleScrollToFirst = () => {
    handleScroll("up"); // Now this directly scrolls to the first section
  };

  const SectionComponent = sections[currentSection];

  return (
    <div
      onWheel={(e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          handleScroll(e.deltaY > 0 ? "down" : "up");
        }
      }}
      className="fixed inset-0 overflow-hidden"
      aria-live="polite" // Announce section changes
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: scrollDirection === "down" ? -50 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <SectionComponent />

          {currentSection === 0 && (
            <UIBtnScrollDown
              className="absolute bottom-0 left-0 mb-4 ml-4"
              onClick={handleScrollToNext}
              aria-label="Scroll down to next section"
            />
          )}

          {currentSection === sections.length - 1 && (
            <UIBtnScrollUp
              className="absolute bottom-0 right-0 mb-4 mr-4"
              onClick={handleScrollToFirst}
              aria-label="Scroll up to first section"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
