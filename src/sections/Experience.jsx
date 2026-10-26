import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
} from 'lucide-react';
import {
  credentials,
  education,
  experience,
  learningNow,
} from '../data/experience';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--alt experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <SectionHeading
          id="experience"
          index="04"
          label="Experience"
          title={
            <>
              Learning by shipping,{' '}
              <span className="serif-italic">not by claiming.</span>
            </>
          }
          intro="One internship, an engineering degree and a set of short credentials — presented at the scale they actually happened."
        />

        <div className="experience__grid">
          <Reveal className="experience__main">
            {experience.map((item) => (
              <article className="timeline-card" key={item.id}>
                <div className="timeline-card__head">
                  <span className="timeline-card__icon" aria-hidden="true">
                    <BriefcaseBusiness size={18} strokeWidth={1.6} />
                  </span>
                  <span className="mono timeline-card__meta">{item.meta}</span>
                  <span className="timeline-card__status">
                    <span aria-hidden="true" />
                    {item.status}
                  </span>
                </div>

                <div className="timeline-card__title">
                  <p className="mono">{item.organisation}</p>
                  <h3>{item.role}</h3>
                </div>

                <p className="timeline-card__summary">{item.summary}</p>

                <ul className="timeline-card__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a className="text-link timeline-card__link" href="#contact">
                  Ask about the internship
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}

            <div className="experience__learning">
              <div className="experience__learning-head">
                <span className="mono">Currently learning</span>
                <span className="mono">Ongoing</span>
              </div>
              <ul>
                {learningNow.map((item, index) => (
                  <li key={item}>
                    <span className="mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="experience__side" delay={100}>
            <article className="education-card">
              <div className="education-card__head">
                <span className="education-card__icon" aria-hidden="true">
                  <GraduationCap size={18} strokeWidth={1.6} />
                </span>
                <span className="mono">Education</span>
                <span className="education-card__year">{education.year}</span>
              </div>

              <h3>{education.degree}</h3>
              <p className="education-card__institution">
                {education.institution}
                <span>{education.affiliation}</span>
              </p>

              <div className="education-card__score">
                <span className="mono">Final CGPA</span>
                <strong>8.53</strong>
                <span>/ 10</span>
              </div>

              <div className="education-card__focus">
                <span className="mono">
                  <BookOpen size={12} strokeWidth={1.8} aria-hidden="true" />
                  Focus areas
                </span>
                <ul>
                  {education.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <p className="experience__note">
              <span className="mono">Note</span>
              Credential names are listed as issued. Certificates are available
              on request rather than displayed as unverifiable badges.
            </p>
          </Reveal>
        </div>

        <div className="credentials">
          <Reveal className="credentials__head">
            <span className="mono">
              <Award size={13} strokeWidth={1.8} aria-hidden="true" />
              Certifications &amp; courses
            </span>
            <span className="mono">{credentials.length} entries</span>
          </Reveal>

          <ul className="credentials__grid">
            {credentials.map((credential, index) => (
              <Reveal
                as="li"
                key={credential.title}
                delay={Math.min(index * 50, 250)}
                className="credential"
              >
                <span className="credential__index mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{credential.title}</h3>
                  <p>{credential.issuer}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
