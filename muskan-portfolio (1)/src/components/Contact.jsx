import { useState } from "react";
import { Mail, ArrowUpRight, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:your-muskankumariEdugaon@gmail.com?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with the message prepared. Replace the demo email in Contact.jsx with your real email.");
  }

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setNotice("");
  }

  return (
    <section className="section container contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Let's make something <span className="gradient-text">meaningful.</span></h2>
          <p>Have an idea, an opportunity or just want to say hello? Send me a message.</p>
          <a className="contact-email" href="mailto:your-muskankumariEdugaon@gmail.com"><Mail size={18} /> your-muskankumariEdugaon@gmail.com <ArrowUpRight size={16} /></a>
          <div className="contact-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={update} placeholder="e.g. Priya Sharma" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required />
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." rows="4" required />
          <button className="button button-primary submit-button" type="submit">Prepare email <Send size={16} /></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </div>
    </section>
  );
}
