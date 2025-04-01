import { motion } from "framer-motion";
import Content from "../components/layout/Content";

const logo = "projzkhme";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // Initial state: hidden and slightly above
      animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
      transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
      aria-labelledby="profile-heading" // Added for better accessibility
    >
      <Content>
        <header className="text-2xl px-24" id="profile-heading">
          <h1>PROFILE</h1>
        </header>

        <motion.div
          className="h-[22.5rem] bg-[var(--theme-accent-primary)] bottom-0 left-0 w-full"
          initial={{ height: 0 }} // Initial state: height is 0 (closed)
          animate={{ height: "22.5rem" }} // Final state: height is fully expanded
          transition={{ duration: 0.8 }} // Smooth transition over 0.8 seconds
          aria-hidden="true" // This is just for decorative purposes, no need for screen readers to read it
        />

        <article className="w-[50rem] py-24 flex flex-row items-center justify-between self-center space-x-24">
          <span className="text-2xl font-bold" aria-label="Project logo">
            {logo}
          </span>

          <section className="text-base flex flex-col space-y-3">
            <h2>ABOUT ME</h2>
            <p>
              I am a developer with experience in software engineering, web
              development, and web design. Skilled in UI/UX design, content
              management systems (CMS), Python programming, scripting, and
              automation.
            </p>
            <p>
              Beyond coding, I enjoy playing games, reading and writing novels,
              and drawing. Also, I appreciate both coffee and tea—but I
              absolutely love sandwiches!
            </p>
          </section>
        </article>
      </Content>
    </motion.div>
  );
}

export default Profile;
