import UILinks from "../common/UILinks";

const name = "Kristian Harrel Zuniga";
const roles = ["Developer", "UI / UX Designer", "Editor"];

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

        <UILinks />
      </div>
    </div>
  );
}

export default Introduction;
