import { motion } from "framer-motion";

function UIBtnScrollUp({ className = "", onClick }) {
  const icon = {
    label: "Scroll Up",
    description: "Scroll Up Icon",
    path: "/scroll-up.svg",
  };

  return (
    <motion.div
      className={`fixed bottom-0 flex flex-col items-center gap-5 p-8 cursor-pointer ${className}`}
      whileHover={{ y: -5, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick} // Added onClick here
    >
      <motion.img
        src={icon.path}
        alt={icon.description}
        className="w-[4rem] h-[4rem]"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <span className="text-base">{icon.label.toUpperCase()}</span>
    </motion.div>
  );
}

export default UIBtnScrollUp;
