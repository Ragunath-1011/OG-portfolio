import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Code2,
} from 'lucide-react';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import HeroVisual from '../components/HeroVisual';

const focusIcons = [Code2, BrainCircuit, BarChart3];

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <Reveal className="hero__eyebrow-wrap">
            <div className="hero__eyebrow">
              <span className="hero__availability">
                <span className="availability-dot" aria-hidden="true" />
                {profile.availability}
              </span>
              <span className="hero__eyebrow-rule" aria-hidden="true" />
              <span className="mono">Chennai, India</span>
            </div>
          </Reveal>

          <h1 id="hero-title" className="hero__title">
            <Reveal as="span" className="hero__title-intro" delay={60}>
              Hi, I&apos;m
            </Reveal>
            <Reveal as="span" className="hero__title-name" delay={120}>
              <span className="serif-italic">Ragunath</span> D.
            </Reveal>
          </h1>

          <Reveal delay={180}>
            <p className="hero__headline">
              Building <span className="serif-italic">intelligent</span>{' '}
              solutions through code, data, and AI.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__description">{profile.description}</p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="hero__focus" aria-label="Professional focus areas">
              {profile.focusAreas.map((area, index) => {
                const Icon = focusIcons[index];
                return (
                  <li key={area} className="hero__focus-item">
                    <span className="hero__focus-icon" aria-hidden="true">
                      <Icon size={14} strokeWidth={1.7} />
                    </span>
                    <span>{area}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={360} className="hero__actions-wrap">
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                Explore My Projects
                <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a
                className="btn btn--secondary"
                href={profile.resume}
                download="Ragunath-D-Resume.pdf"
              >
                <ArrowDownToLine
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={420} className="hero__social-wrap">
            <div className="hero__social">
              <span className="mono hero__social-label">Elsewhere</span>
              <SocialLinks variant="text" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={260} className="hero__visual-wrap">
          <HeroVisual />
        </Reveal>
      </div>

      <div className="container">
        <Reveal delay={480} className="hero__facts-wrap">
          <div className="hero__facts">
            <div className="hero__fact">
              <span className="mono">Based in</span>
              <p>Chennai, Tamil Nadu</p>
            </div>
            <div className="hero__fact">
              <span className="mono">Education</span>
              <p>B.Tech AI &amp; Data Science · 2026</p>
            </div>
            <div className="hero__fact">
              <span className="mono">Experience</span>
              <p>Full-stack intern · NoviTech</p>
            </div>
            <a className="hero__fact-link" href="#about">
              <span className="mono">Next / About</span>
              <span>
                Who I am
                <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
