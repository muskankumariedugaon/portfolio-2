import { ArrowUpRight, CheckSquare, ShoppingBag, PanelsTopLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Task Manager",
    description: "A simple productivity app to organise tasks, track progress and stay focused.",
    tags: ["React", "CSS", "State"],
    icon: <CheckSquare size={27} />,
    className: "project-art-lilac",
    link: "https://github.com/",
  },
  {
    number: "02",
    title: "ShopEase",
    description: "A modern e-commerce experience with product cards, categories and a clean layout.",
    tags: ["React", "Responsive UI", "UX"],
    icon: <ShoppingBag size={27} />,
    className: "project-art-pink",
    link: "https://github.com/",
  },
  {
    number: "03",
    title: "Landing Page",
    description: "A bold landing page concept designed to introduce a product and guide visitors to act.",
    tags: ["HTML", "CSS", "Design"],
    icon: <PanelsTopLeft size={27} />,
    className: "project-art-blue",
    link: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-kicker">SELECTED WORK</span>
          <h2>Things I've <span className="gradient-text">been building.</span></h2>
          <p>Practice projects that help me learn by doing.</p>
        </div>
        <a className="text-link all-projects-link" href="https://github.com/" target="_blank" rel="noreferrer">
          More on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card glass-card" key={project.number}>
            <div className={`project-art ${project.className}`}>
              <span className="project-number">{project.number} / PROJECT</span>
              <div className="project-illustration">{project.icon}</div>
              <div className="art-orb" />
              <div className="art-lines" />
              <a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`}>
                <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink size={14} /></a>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">Note: Replace the demo GitHub links with your actual project repositories when they're ready.</p>
    </section>
  );
}
