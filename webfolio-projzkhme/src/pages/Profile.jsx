import Content from "../components/layout/Content";

const logo = "projzkhme";

function Profile() {
  return (
    <Content>
      <header className="text-2xl px-24">
        <h1>PROFILE</h1>
      </header>

      <div className="h-[22.5rem] bg-[var(--theme-accent-primary)] bottom-0 left-0 w-full" />

      <article className="flex flex-row items-center justify-between w-[50rem] py-24 self-center space-x-24">
        <span className="text-2xl font-bold">{logo}</span>

        <section className="text-base flex flex-col space-y-3">
          <h2>ABOUT ME</h2>
          <p>
            I am a developer with experience in software engineering, web
            development, and web design. Skilled in UI/UX design, content
            management systems (CMS), Python programming, scripting, and
            automation.
          </p>
          <p>
            Beyond coding, I enjoy playing games, reading and writing novels,
            and drawing. Also, I appreciate both coffee and tea—but I absolutely
            love sandwiches!
          </p>
        </section>
      </article>
    </Content>
  );
}

export default Profile;
