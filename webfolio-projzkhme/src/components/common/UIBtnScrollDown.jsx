import { motion } from "framer-motion";

function UIBtnScrollDown({ className = "" }) {
  const icon = {
    label: "Scroll Down",
    description: "Scroll Down Icon",
    path: "/scroll-down.svg",
  };

  return (
    <motion.div
      className={`fixed bottom-0 flex flex-row ${className}`}
      whileHover={{ y: 5, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-8 flex flex-col items-center gap-5 cursor-pointer">
        <span className="text-base">{icon.label.toUpperCase()}</span>
        <motion.img
          className="w-[4rem] h-[4rem]"
          src={icon.path}
          alt={icon.description}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export default UIBtnScrollDown;
