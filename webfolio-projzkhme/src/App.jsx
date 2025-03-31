import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UIBtnScrollDown from "./components/common/UIBtnScrollDown";
import Introduction from "./components/sections/Introduction";
import Loading from "./components/screens/Loading";
import Navbar from "./components/layout/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
