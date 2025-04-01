import UILinks from "../common/UILinks";

const name = "Kristian Harrel Zuniga";
const roles = ["Developer", "UI / UX Designer", "Editor"];

function Introduction() {
  return (
    <div className="flex flex-col text-right">
      <span className="text-2xl">{name}</span>
      <div className="flex flex-col opacity-75">
        {roles.map((role, index) => (
          <span key={index} className="text-xl">
            {role}
          </span>
        ))}
      </div>

      <UILinks />
    </div>
  );
}

export default Introduction;
