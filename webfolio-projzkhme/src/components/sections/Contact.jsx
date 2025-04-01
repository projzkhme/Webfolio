import { motion } from "framer-motion";

const contactInfo = {
  email: "projzkhrrel@gmail.com",
  ref: "mailto:projzkhrrel@gmail.com",
};

function Contact() {
  return (
    <div className="relative w-full h-[18.75rem] overflow-hidden bg-[var(--theme-background-light)] text-[var(--theme-text-light)]">
      <motion.div
        className="absolute top-0 left-0 w-full bg-[var(--theme-background-dark)]"
        initial={{ height: "50%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-[var(--theme-background-dark)]"
        initial={{ height: "50%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="h-full flex flex-col justify-center items-center space-y-3"
      >
        <span className="text-sm">Want to work together? Email me at:</span>
        <div className="px-4 py-2 bg-[var(--theme-accent-primary)]">
          <motion.a
            href={contactInfo.ref}
            target="_self"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.75 }}
            whileTap={{ opacity: 0.75 }}
            className="transition-all duration-300"
            aria-label={`Email me at ${contactInfo.email}`} // Added aria-label for screen readers
          >
            <span className="text-sm">{contactInfo.email}</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
