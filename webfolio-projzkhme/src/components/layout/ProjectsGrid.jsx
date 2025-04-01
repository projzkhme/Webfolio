function ProjectsGrid({ className = "", projects }) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,15rem)] gap-3 ${className}`}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col space-y-3 cursor-pointer hover:opacity-75 duration-300 ease-in-out"
          onClick={() => window.open(project.link, "_blank")}
        >
          <div className="w-[15rem] h-[11.25rem] bg-[var(--theme-primary)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <section className="flex flex-col">
            <span className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[15rem]">
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
