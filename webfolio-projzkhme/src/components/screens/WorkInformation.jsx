import { motion } from "framer-motion";
import Content from "../layout/Content";

const icons = {
  close: {
    label: "Chevron Left",
    description: "Chevron Left Icon",
    path: "/chevron-left.svg",
  },
};

function WorkInformation({ information, onClose }) {
  const { start, end, company, pos, desc, tasks } = information;

  return (
    <motion.div
      initial={{ x: "-100%" }} // Start off-screen to the left
      animate={{ x: 0 }} // Slide in to position
      exit={{ x: "-100%" }} // Slide out to the left when closing
      transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
      className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-[var(--theme-background-black)] text-[var(--theme-text-dark)]"
      role="dialog"
      aria-labelledby="work-timeline-header"
      aria-describedby="work-timeline-description"
      aria-modal="true"
    >
      <Content>
        <header className="px-32">
          <div className="w-full pb-4 border-b flex flex-row items-center justify-between">
            <div className="flex flex-col space-y-3">
              <h1 id="work-timeline-header" className="text-2xl">
                WORK INFORMATION
              </h1>
              <h2 className="flex flex-col text-xl">
                <span>
                  {company} | {pos}
                </span>
                <span>
                  {start} — {end}
                </span>
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex flex-row items-center space-x-10 cursor-pointer hover:opacity-75"
              aria-label="Close work information"
            >
              <img
                src={icons.close.path}
                alt={icons.close.description}
                width="24"
                height="24"
                aria-hidden="true" // Hide the image from screen readers
              />
              <span className="text-base">RETURN</span>
            </button>
          </div>
        </header>

        <section className="px-32 py-4">
          <article className="flex flex-col">
            <p
              id="work-timeline-description"
              className="text-base text-justify"
            >
              {desc}
            </p>
            {tasks.length > 0 && (
              <ul className="pt-8 pl-8 list-disc">
                {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            )}
          </article>
        </section>
      </Content>
    </motion.div>
  );
}

export default WorkInformation;
