const items = [
  {
    year: "2025",
    month: "Feb",
    company: "SUMIDENSO AUTOMOTIVE TECHNOLOGIES ASIA CORPORATION",
    pos: "ASSOCIATE SYSTEMS DEVELOPER",
    desc: "Worked as an Associate Systems Developer, who  is responsible for Documenting, Designing, Developing, Testing and Supporting Proprietary Systems.",
  },
  {
    year: "2022",
    month: "Jun",
    company: "SAINT LOUIS UNIVERSITY",
    pos: "SOFTWARE DEVELOPER INTERN",
    desc: "Interned at the Data Privacy Office, where I designed, developed, and tested the triage system used by students, employees, and visitors of the university.",
  },
];

function WorkExperienceList({ className = "" }) {
  return (
    <section
      className={`flex flex-col space-y-3 ${className}`}
      aria-labelledby="work-experience"
    >
      <h2 id="work-experience" className="sr-only">
        Work Experience
      </h2>
      {items.map((item, index) => {
        const { year, month, company, pos, desc } = item;
        return (
          <article
            key={`${company}-${year}-${month}`}
            className="relative w-full h-[8rem] flex flex-row items-center border-b group cursor-pointer hover:translate-x-2 transition-all duration-600 ease-in-out"
            role="listitem"
            aria-labelledby={`experience-${index}`}
          >
            <header className="px-4 flex flex-col">
              <span className="text-base">{year}</span>
              <span className="text-base">{month}</span>
            </header>

            <div className="w-[48rem] px-4 overflow-hidden">
              <h3
                id={`experience-${index}`}
                className="text-base text-ellipsis overflow-hidden whitespace-nowrap block max-w-full"
              >
                {company}
              </h3>
            </div>

            <div className="flex flex-col">
              <p className="text-base">{pos}</p>
              <p className="text-base">{desc}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[var(--theme-accent-primary)] transition-all duration-900 ease-in-out transform origin-left scale-x-0 group-hover:scale-x-100"></div>
          </article>
        );
      })}
    </section>
  );
}

export default WorkExperienceList;
