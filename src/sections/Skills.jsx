import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section--alt skills"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <SectionHeading
          id="skills"
          index="02"
          label="Skills"
          title={
            <>
              A working toolkit,{' '}
              <span className="serif-italic">not a scorecard.</span>
            </>
          }
          intro="Categorised by how I've used each tool — with the exploratory work kept visibly separate from the everyday stack."
        />

        <Reveal className="skills__note" delay={60}>
          <span className="mono">Reading the labels</span>
          <p>
            <strong>Core</strong> is what I reach for first.{' '}
            <strong>Working knowledge</strong> means project use with more to
            learn. <strong>Project experience</strong> is specific, hands-on
            work. <strong>Exploring</strong> is exactly that.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={Math.min(index * 60, 300)}
              className={`skills__cell ${group.wide ? 'skills__cell--wide' : ''}`}
            >
              <SkillGroup group={group} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="skills__footer" delay={100}>
          <p>
            No percentage bars. No “expert in everything” claims. Just a
            transparent inventory of what I&apos;ve built with so far.
          </p>
          <div className="skills__legend" aria-label="Skill level legend">
            <span className="skills__legend-item skills__legend-item--core">
              <span aria-hidden="true" /> Core
            </span>
            <span className="skills__legend-item skills__legend-item--working">
              <span aria-hidden="true" /> Working knowledge
            </span>
            <span className="skills__legend-item skills__legend-item--project">
              <span aria-hidden="true" /> Project experience
            </span>
            <span className="skills__legend-item skills__legend-item--explore">
              <span aria-hidden="true" /> Exploring
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
