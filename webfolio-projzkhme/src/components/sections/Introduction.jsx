import ProfileLinks from "../layout/ProfileLinks";

const name = "Kristian Harrel Zuniga";
const roles = ["Developer", "UI / UX Designer", "Editor"];

function Introduction() {
  return (
    <div className="flex flex-col text-right">
      <span className="text-2xl">{name}</span>
      <div className="flex flex-col opacity-75">
        {roles.map((role) => (
          <span key={role} className="text-xl">
            {role}
          </span>
        ))}
      </div>

      <ProfileLinks />
    </div>
  );
}

export default Introduction;
