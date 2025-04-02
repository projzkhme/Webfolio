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
  const isAnimating = useRef(false);
  const startTouchY = useRef(0);

  const handleScroll = useCallback((direction) => {
    if (isAnimating.current) return;

    setCurrentSection((prev) => {
      let newSection = prev;
      if (direction === "down" && prev < sections.length - 1) {
        newSection = prev + 1;
      } else if (direction === "up" && prev > 0) {
        newSection = prev - 1;
      }

      if (newSection !== prev) {
        isAnimating.current = true;
      }
      return newSection;
    });
  }, []);

  const handleScrollToNext = () => handleScroll("down");
  const handleScrollToFirst = () => setCurrentSection(0);

  const SectionComponent = sections[currentSection];

  const handleTouchStart = (e) => {
    startTouchY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!startTouchY.current) return;
    const endTouchY = e.touches[0].clientY;
    const deltaY = endTouchY - startTouchY.current;

    if (Math.abs(deltaY) > 30) {
      handleScroll(deltaY < 0 ? "down" : "up");
      startTouchY.current = null;
    }
  };

  return (
    <div
      onWheel={(e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          handleScroll(e.deltaY > 0 ? "down" : "up");
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="fixed inset-0 overflow-hidden"
      aria-live="polite"
    >
      <AnimatePresence
        mode="wait"
        onExitComplete={() => (isAnimating.current = false)}
      >
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <SectionComponent />
          {currentSection === 0 && (
            <UIBtnScrollDown
              className="absolute bottom-0 left-0 mb-4 ml-4"
              onClick={handleScrollToNext}
            />
          )}
          {currentSection === sections.length - 1 && (
            <UIBtnScrollUp
              className="absolute bottom-0 right-0 mb-4 mr-4"
              onClick={handleScrollToFirst}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
