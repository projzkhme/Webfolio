function ProjectsGrid({ className = "", projects }) {
  return (
    <div
      className={`px-4 grid grid-cols-1 md:grid-cols-[repeat(auto-fill,15rem)] gap-3 ${className}`}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col space-y-3 cursor-pointer hover:opacity-75 duration-300 ease-in-out"
          onClick={() => window.open(project.link, "_blank")}
        >
          <div className="w-full h-[22.25rem] md:h-[15.25rem] bg-[var(--theme-primary)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <section className="flex flex-col">
            <span className="text-xs md:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[15rem]">
              {project.title}
            </span>
            <span className="text-xs">{project.date}</span>
          </section>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;
