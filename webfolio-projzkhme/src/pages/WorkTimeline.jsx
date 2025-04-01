import { motion } from "framer-motion";
import Content from "../components/layout/Content";
import WorkExperienceList from "../components/layout/WorkExperienceList";

function WorkTimeline() {
  return (
    <Content>
      <header className="text-2xl px-24" aria-labelledby="work-timeline-header">
        <motion.h1
          id="work-timeline-header"
          initial={{ opacity: 0, y: -50 }} // Start off-screen
          animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
          transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
        >
          WORK TIMELINE
        </motion.h1>
      </header>

      <section className="px-24">
        <motion.div
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 1, delay: 0.3 }} // Delay to make it appear after the header
        >
          <WorkExperienceList />
        </motion.div>
      </section>
    </Content>
  );
}

export default WorkTimeline;
