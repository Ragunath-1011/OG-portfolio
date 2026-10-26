import { ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/profile';

export default function ResumeBanner() {
  return (
    <section className="resume-banner" aria-labelledby="resume-heading">
      <div className="container">
        <div className="resume-banner__inner">
          <div className="resume-banner__copy">
            <p className="eyebrow">
              <span className="eyebrow__index">R</span>
              <span className="eyebrow__rule" aria-hidden="true" />
              <span>Résumé / PDF</span>
            </p>
            <h2 id="resume-heading">
              The short version, <span className="serif-italic">on paper.</span>
            </h2>
            <p>
              Education, toolkit and selected project summaries in one PDF — kept
              current as the work grows.
            </p>
          </div>
          <div className="resume-banner__actions">
            <a
              className="btn btn--primary"
              href={profile.resume}
              download="Ragunath-D-Resume.pdf"
            >
              <Download size={17} strokeWidth={1.8} aria-hidden="true" />
              Download Resume
            </a>
            <a className="btn btn--secondary" href="#contact">
              Start a conversation
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
