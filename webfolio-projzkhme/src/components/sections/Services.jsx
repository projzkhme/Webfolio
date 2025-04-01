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
      <span className="text-2xl" aria-labelledby="services-title">
        WHAT I DO
      </span>

      <UICarousell items={services} aria-labelledby="services-carousel" />
    </div>
  );
}

export default Services;
