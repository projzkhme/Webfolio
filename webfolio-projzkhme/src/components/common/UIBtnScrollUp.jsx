import { motion } from "framer-motion";

function UIBtnScrollDown({ className = "" }) {
  const icon = {
    label: "Scroll Up",
    description: "Scroll Up Icon",
    path: "/scroll-up.svg",
  };

  return (
    <motion.div
      className="fixed bottom-0 flex flex-row"
      whileHover={{ y: -5, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-8 flex flex-col items-center gap-5 cursor-pointer">
        <motion.img
          className={`w-[4rem] h-[4rem] ${className}`}
          src={icon.path}
          alt={icon.description}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <span className="text-base">{icon.label.toUpperCase()}</span>
      </div>
    </motion.div>
  );
}

export default UIBtnScrollDown;
