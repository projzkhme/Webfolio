const name = "Kristian Harrel Zuniga";
const roles = ["Developer", "UI / UX Designer", "Editor"];
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

function Introduction() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="text-right">
          <span className="text-3xl">{name}</span>
          <div className="flex flex-col opacity-75">
            {roles.map((role, index) => (
              <span key={index} className="text-2xl">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.ref}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-on-hover"
            >
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
