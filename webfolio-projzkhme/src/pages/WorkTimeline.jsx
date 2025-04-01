import Content from "../components/layout/Content";
import WorkExperienceList from "../components/layout/WorkExperienceList";

function WorkTimeline() {
  return (
    <Content>
      <header className="text-2xl px-24" aria-labelledby="work-timeline-header">
        <h1 id="work-timeline-header">WORK TIMELINE</h1>
      </header>

      <section className="px-24">
        <WorkExperienceList />
      </section>
    </Content>
  );
}

export default WorkTimeline;
