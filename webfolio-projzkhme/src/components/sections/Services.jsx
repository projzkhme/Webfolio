import UICarousell from "../common/UICarousell";

const services = [
  "Web Development",
  "UI / UX Design",
  "Video Editing",
  "Photo Editing",
];

function Services() {
  return (
    <div className="flex flex-col items-start space-y-10">
      <span className="text-2xl">WHAT I DO</span>
      <UICarousell items={services} />
    </div>
  );
}

export default Services;
