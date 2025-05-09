import ProfileLinks from "../layout/ProfileLinks";

const name = "Kristian Harrel Zuniga";
const roles = ["Developer", "UI / UX Designer", "Editor"];

function Introduction() {
  return (
    <div className="flex flex-col text-right">
      <span className="text-xl md:text-2xl">{name}</span>

      <div className="flex flex-col opacity-75 space-y-2 mt-2">
        {roles.map((role) => (
          <span key={role} className="text-base md:text-xl" aria-label={`Role: ${role}`}>
            {role}
          </span>
        ))}
      </div>

      <ProfileLinks />
    </div>
  );
}

export default Introduction;
