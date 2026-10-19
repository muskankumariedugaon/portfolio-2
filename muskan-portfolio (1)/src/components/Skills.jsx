import { Code2, Braces, PanelsTopLeft, Smartphone, GitBranch, Figma } from "lucide-react";

const skills = [
  { icon: <Code2 />, name: "HTML5", type: "Structure" },
  { icon: <PanelsTopLeft />, name: "CSS3", type: "Styling" },
  { icon: <Braces />, name: "JavaScript", type: "Logic" },
  { icon: <Code2 />, name: "React.js", type: "Frontend" },
  { icon: <GitBranch />, name: "Git & GitHub", type: "Version control" },
  { icon: <Figma />, name: "UI principles", type: "Design basics" },
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <span className="section-kicker">TOOLS I USE</span>
        <h2>My creative <span className="gradient-text">toolkit.</span></h2>
        <p>The technologies and habits I use to bring ideas to life.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.name} style={{ "--delay": `${index * 70}ms` }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.type}</p>
            <span className="skill-arrow">↗</span>
          </article>
        ))}
      </div>
      <p className="skills-note"><span className="status-dot" /> Currently learning, experimenting and building every day.</p>
    </section>
  );
}
