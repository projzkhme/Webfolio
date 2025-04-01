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
    if (isScrolling.current) return; // Prevent multiple triggers

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Adjust delay as needed

    setScrollDirection(direction); // Update scroll direction

    setCurrentSection((prev) => {
      if (direction === "down" && prev < sections.length - 1) {
        return prev + 1;
      } else if (direction === "up" && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const handleScrollToNext = () => {
    setScrollDirection("down");
    setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  };

  const handleScrollToFirst = () => {
    setScrollDirection("up");
    setCurrentSection(0);
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
