import { motion } from "framer-motion";

function UIBtnScrollDown({ className = "", onClick }) {
  const icon = {
    label: "Scroll Down",
    description: "Scroll Down Icon",
    path: "/scroll-down.svg",
  };

  return (
    <motion.div
      className={`bottom-0 flex flex-col items-center gap-5 p-8 cursor-pointer ${className}`}
      whileHover={{ y: 5, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
    >
      <span className="text-base">{icon.label.toUpperCase()}</span>
      <motion.img
        src={icon.path}
        alt={icon.description}
        className="w-[4rem] h-[4rem]"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </motion.div>
  );
}

export default UIBtnScrollDown;
