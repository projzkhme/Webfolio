import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Loading from "./components/screens/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkTimeline from "./pages/WorkTimeline";
import Projects from "./pages/Projects";

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
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work-timeline" element={<WorkTimeline />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
