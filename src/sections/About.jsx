import { ArrowUpRight } from 'lucide-react';
import { education, learningNow, principles, profile } from '../data';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="section section--divided about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <SectionHeading
          id="about"
          index="01"
          label="About"
          title={
            <>
              Curious about the problem.{' '}
              <span className="serif-italic">Careful</span> about the details.
            </>
          }
          intro="A developer with a data-science grounding, an eye for clear interfaces, and an allergy to pretending unfinished work is done."
        />

        <div className="about__grid">
          <Reveal className="about__copy">
            <p className="about__lead">
              I&apos;m an AI &amp; Data Science graduate from Chennai who likes
              taking an idea from a blank file to something a person can
              actually use.
            </p>
            <p>
              My interests sit across Python development, full-stack web
              applications, machine learning and data analytics. I care about
              the unglamorous parts too: clear naming, sensible data models,
              keyboard access, and status labels that tell the truth.
            </p>
            <p>
              A 30-day full-stack internship at NoviTech gave me a first proper
              look at how that work happens inside a team. Since then I&apos;ve
              kept building — dashboards, small React interfaces,
              computer-vision experiments and data exercises — mostly to
              understand the fundamentals rather than to polish a demo.
            </p>

            <div className="about__currently">
              <span className="mono about__currently-label">
                Currently exploring
              </span>
              <ul>
                {learningNow.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__signoff">
              <span className="serif-italic">Still learning.</span>
              <span>Still building.</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="about__side">
            <div className="about__principles">
              <div className="about__card-head">
                <span className="mono">Working principles</span>
                <span className="mono">03 notes</span>
              </div>
              <ol>
                {principles.map((principle) => (
                  <li key={principle.number}>
                    <span className="about__principle-number mono">
                      {principle.number}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="about__glance">
              <div className="about__card-head">
                <span className="mono">At a glance</span>
                <span className="status">
                  <span className="availability-dot" aria-hidden="true" />
                  Available
                </span>
              </div>
              <dl>
                <div>
                  <dt>Education</dt>
                  <dd>{education.degree}</dd>
                </div>
                <div>
                  <dt>University</dt>
                  <dd>{education.affiliation}</dd>
                </div>
                <div>
                  <dt>Graduating</dt>
                  <dd>{education.year}</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
              <a className="text-link" href="#contact">
                Open to fresher roles
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
