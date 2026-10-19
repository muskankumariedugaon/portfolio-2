import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home"><span className="brand-mark">M</span><span>muskan<span className="brand-dot">.</span></span></a>
        <p>Designed with <Heart size={14} className="heart-icon" /> and built with React.</p>
        <a className="back-top" href="#home">Back to top <ArrowUp size={15} /></a>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Muskan Kumari. Keep creating.</div>
    </footer>
  );
}
