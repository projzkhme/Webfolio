import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkTimeline from "./pages/WorkTimeline";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-timeline" element={<WorkTimeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
