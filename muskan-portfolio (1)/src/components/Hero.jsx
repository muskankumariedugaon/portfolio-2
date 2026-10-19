import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section container" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER IN THE MAKING</div>
        <h1>Turning ideas into <span className="gradient-text">beautiful</span> digital experiences.</h1>
        <p className="hero-description">
          Hey, I'm <strong>Muskan Kumari</strong>. I create clean, responsive and
          engaging websites with React.js, thoughtful details and a little creativity.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
          <a className="button button-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-socials">
          <span>Find me on</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>

      <div className="hero-art" aria-label="Decorative code illustration">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="floating-chip chip-top"><Sparkles size={16} /> Creative UI</div>
        <div className="code-card glass-card">
          <div className="code-card-top"><span /><span /><span /><small>muskan.jsx</small></div>
          <div className="code-lines">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="indent"><span className="code-pink">name</span>: <span className="code-green">"Muskan"</span>,</p>
            <p className="indent"><span className="code-pink">skills</span>: [</p>
            <p className="indent2"><span className="code-green">"React"</span>, <span className="code-green">"CSS"</span></p>
            <p className="indent">],</p>
            <p className="indent"><span className="code-pink">mindset</span>: <span className="code-green">"Keep building"</span></p>
            <p>{"};"}</p>
            <p className="code-comment">// always learning ✨</p>
          </div>
        </div>
        <div className="floating-chip chip-bottom"><span className="mini-spark">✦</span> Built with curiosity</div>
        <div className="hero-glow" />
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
    </section>
  );
}
