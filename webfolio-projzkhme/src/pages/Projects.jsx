import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Content from "../components/layout/Content";
import ProjectsGrid from "../components/layout/ProjectsGrid";
import UITags from "../components/common/UITags";

const projects = {
  "Websites": [
    {
      image: "",
      title: "Projzkhme Portfolio (My Portolio)",
      link: "",
      date: "2025.04",
    },
  ],
  "Web Designs": [
    {
      image: "",
      title: "Projzkhme Portfolio Figma Design (My Portolio)",
      link: "",
      date: "2025.03",
    },
    {
      image: "",
      title: "Saint Louis University Triage System Figma Design",
      link: "",
      date: "2022.06",
    },
  ],
};

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(projects)[0]
  );

  useEffect(() => {
    document.title = "PROJECTS | Projzkhme";
  }, []);

  // When the category changes, scroll the user to the top of the section
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on category change
  }, [selectedCategory]);

  return (
    <Content>
      <header className="text-xl md:text-2xl px-8 md:px-24" aria-labelledby="projects-header">
        <motion.h1
          id="projects-header"
          initial={{ opacity: 0, y: -50 }} // Start off-screen
          animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
          transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
        >
          PROJECTS
        </motion.h1>
      </header>

      <section className="px-8 md:px-24" aria-labelledby="projects-section">
        <motion.div
          className="flex flex-col space-y-10"
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 1, delay: 0.3 }} // Delay to make it appear after the header
        >
          <UITags
            items={Object.keys(projects)}
            selectedItem={selectedCategory}
            onClick={(category) => setSelectedCategory(category)}
            aria-label="Select project category"
          />
          <ProjectsGrid
            projects={projects[selectedCategory]}
            aria-labelledby="projects-grid"
          />
        </motion.div>
      </section>
    </Content>
  );
}

export default Projects;
