import { useState } from "react";
import { motion } from "framer-motion";
import Content from "../components/layout/Content";
import ProjectsGrid from "../components/layout/ProjectsGrid";
import UITags from "../components/common/UITags";

const projects = {
  "Web Application": [
    {
      image: "",
      title: "Saint Louis University Triage System",
      link: "",
      date: "2022.06",
    },
  ],
  Websites: [
    {
      image: "",
      title: "Projzkhme Portfolio (My Portolio)",
      link: "",
      date: "2025.04",
    },
  ],
  "UI / UX Designs": [
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

  return (
    <Content>
      <header className="text-2xl px-24" aria-labelledby="work-timeline-header">
        <motion.h1
          id="work-timeline-header"
          initial={{ opacity: 0, y: -50 }} // Start off-screen
          animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
          transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
        >
          PROJECTS
        </motion.h1>
      </header>

      <section className="px-24">
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
          />
          <ProjectsGrid projects={projects[selectedCategory]} />
        </motion.div>
      </section>
    </Content>
  );
}

export default Projects;
