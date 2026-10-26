import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="container">
        <h2 id="footer-heading" className="visually-hidden">
          Site footer
        </h2>

        <div className="site-footer__top">
          <div className="site-footer__intro">
            <a
              href="#home"
              className="brand brand--footer"
              aria-label="RD. Ragunath D. — back to top"
            >
              <span className="brand__mark" aria-hidden="true">
                RD<span>.</span>
              </span>
              <span className="brand__text">Ragunath D.</span>
            </a>
            <p>
              AI &amp; Data Science graduate building practical web, data and
              machine-learning work from Chennai.
            </p>
            <a className="site-footer__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <div>
              <span className="mono">Index</span>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="mono">Elsewhere</span>
              <SocialLinks variant="text" />
              <a
                className="site-footer__resume"
                href={profile.resume}
                download="Ragunath-D-Resume.pdf"
              >
                Résumé / PDF
              </a>
            </div>
          </nav>
        </div>

        <div className="site-footer__wordmark" aria-hidden="true">
          Ragunath<span>.</span>
        </div>

        <div className="site-footer__bottom">
          <p className="mono">
            © {year} Ragunath D. · Chennai, IN
          </p>
          <p className="mono site-footer__built">
            Designed &amp; built with React + Vite
          </p>
          <button
            type="button"
            className="site-footer__top-link"
            onClick={() => {
              const reducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
              ).matches;
              window.scrollTo({
                top: 0,
                behavior: reducedMotion ? 'auto' : 'smooth',
              });
            }}
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
