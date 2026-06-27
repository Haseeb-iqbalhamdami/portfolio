import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  const firstName = personalInfo.name.split(' ')[0];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{firstName}<span className="text-gold">.</span></span>
          <p className="footer__tagline">{personalInfo.title}</p>
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name}. Crafted with precision.
        </p>

        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
