import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: <Code2 size={21} />, title: "Clean code", text: "Readable, reusable components." },
  { icon: <Palette size={21} />, title: "Creative UI", text: "Designs with personality and purpose." },
  { icon: <Zap size={21} />, title: "Always learning", text: "Improving one project at a time." },
];

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <span className="section-kicker">A LITTLE ABOUT ME</span>
        <h2>Curious mind. <span className="gradient-text">Creative builder.</span></h2>
        <p>Good websites are more than code — they make things feel simple and delightful.</p>
      </div>
      <div className="about-layout">
        <div className="about-note glass-card">
          <div className="note-icon">✦</div>
          <h3>I'm Muskan.</h3>
          <p>
            I'm a frontend developer focused on building modern web interfaces.
            I enjoy turning ideas into real experiences, exploring UI details,
            and learning tools that help me build better products.
          </p>
          <p>
            My current focus is strengthening my React skills and creating
            projects that solve everyday problems.
          </p>
          <a className="text-link" href="#projects">See what I'm building <span>↗</span></a>
        </div>
        <div className="highlight-list">
          {highlights.map((item, index) => (
            <article className="highlight-card" key={item.title}>
              <div className="highlight-icon">{item.icon}</div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="highlight-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
