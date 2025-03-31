import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    description: "Mail to",
    ref: "mailto:projzkhrrel@gmail.com",
    icon: "/email.svg",
  },
  {
    label: "LinkedIn",
    description: "LinkedIn Profile",
    ref: "https://www.linkedin.com/in/kristian-harrel-zuniga/",
    icon: "/linkedin.svg",
  },
  {
    label: "GitHub",
    description: "GitHub Profile",
    ref: "https://github.com/projzkhme",
    icon: "/github.svg",
  },
];

function UILinks({ className = "" }) {
  return (
    <div className="flex flex-row items-center gap-3">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.ref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ opacity: 0.75 }}
          whileTap={{ opacity: 0.75 }}
          className={`w-[1.5rem] h-[1.5rem] transition-all duration-300 ${className}`}
        >
          <img
            src={link.icon}
            alt={link.label}
            className="w-full h-full hover:opacity-75"
          />
        </motion.a>
      ))}
    </div>
  );
}

export default UILinks;
