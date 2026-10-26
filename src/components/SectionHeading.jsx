import Reveal from './Reveal';

export default function SectionHeading({ id, index, label, title, intro }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <div className="section-heading__body">
        <h2 id={`${id}-heading`} className="section-heading__title">
          {title}
        </h2>
        {intro ? <p className="section-heading__intro">{intro}</p> : null}
      </div>
    </Reveal>
  );
}
