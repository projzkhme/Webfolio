import { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import WorkInformation from "../screens/WorkInformation";

const items = [
  {
    start: "2022",
    end: "2025",
    month: "Feb",
    company: "Sumidenso Automotive Technologies Asia Corporation",
    pos: "Associate Systems Developer",
    desc: "Worked as an Associate Systems Developer, who  is responsible for Documenting, Designing, Developing, Testing and Supporting Proprietary Systems.",
    tasks: [
      "Enhanced the Profit and Loss feature in the company's Business Planning System, resulting in more accurate and timely financial reporting.",
      "Developed key components of the back-end and front-end for a proprietary Task Management Web Application using Blazor and Entity Framework, adhering to CLEAN Architecture principles to ensure scalability and maintainability of the codebase.",
      "Redesigned the client's business web application under Client Requirements.",
      "Developed core algorithms for a Coding Standards Checker tool used company-wide to enforce best practices and improve code consistency across multiple projects.",
      "Developed a data transformation pipeline to seamlessly convert design files between two proprietary Computer-aided Design (CAD) systems.",
      "Developed an automated spreadsheet tool using VBA macros to perform design checks on wiring harnesses, ensuring compliance with industry standards and reducing design review time.",
    ],
  },
  {
    start: "2022",
    end: "2022",
    month: "Jun",
    company: "Saint Louis University",
    pos: "Software Engineer Intern",
    desc: "Interned at the Data Privacy Office, where I designed, developed, and tested the triage system used by students, employees, and visitors of the university.",
    tasks: [
      "Conducted user research through client interviews and surveys.",
      "Designed intuitive UI/UX prototypes in Figma, incorporating client feedback to ensure alignment with project goals. Then, translated these designs into functional software components, adhering to client specifications and industry best practices.",
    ],
  },
];

function WorkExperienceList({ className = "" }) {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleClick = useCallback((item) => {
    setSelectedExperience(item);
  }, []);

  const selectedExperienceMemo = useMemo(
    () => selectedExperience,
    [selectedExperience]
  );

  return (
    <>
      <section
        className={`flex flex-col space-y-3 ${className}`}
        aria-labelledby="work-experience"
      >
        <h2 id="work-experience" className="sr-only">
          Work Experience
        </h2>
        <ul role="list">
          {items.map((item, index) => {
            const { end, month, company, pos, desc } = item;
            return (
              <li key={`${company}-${end}-${month}`} role="listitem">
                <article
                  className="relative w-full h-[8rem] flex flex-row items-center border-b group cursor-pointer hover:translate-x-2 transition-all duration-600 ease-in-out"
                  role="button"
                  aria-labelledby={`experience-${index}`}
                  onClick={() => handleClick(item)}
                >
                  <header className="px-4 flex flex-col">
                    <span className="text-base">{end}</span>
                    <span className="text-base">{month}</span>
                  </header>

                  <h3
                    id={`experience-${index}`}
                    className="w-[48rem] px-4 text-base text-ellipsis overflow-hidden whitespace-nowrap block max-w-full"
                  >
                    {company.toUpperCase()}
                  </h3>

                  <div className="flex flex-col">
                    <p className="text-base">{pos}</p>
                    <p className="text-base">{desc}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[var(--theme-accent-primary)] transition-all duration-900 ease-in-out transform origin-left scale-x-0 group-hover:scale-x-100"></div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <AnimatePresence>
        {selectedExperienceMemo && (
          <WorkInformation
            information={selectedExperienceMemo}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default WorkExperienceList;
