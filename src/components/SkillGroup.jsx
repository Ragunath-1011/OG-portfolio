import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Database,
  Monitor,
  Scan,
  Server,
  Wrench,
} from 'lucide-react';

const iconMap = {
  code: Code2,
  layout: Monitor,
  server: Server,
  database: Database,
  chart: BarChart3,
  scan: Scan,
  bot: Bot,
  wrench: Wrench,
};

export default function SkillGroup({ group, index }) {
  const Icon = iconMap[group.icon] ?? Code2;

  return (
    <article
      className={`skill-card skill-card--${group.tone} ${
        group.wide ? 'skill-card--wide' : ''
      }`}
    >
      <div className="skill-card__top">
        <span className="skill-card__icon" aria-hidden="true">
          <Icon size={18} strokeWidth={1.6} />
        </span>
        <span className="skill-card__index mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`skill-card__level skill-card__level--${group.tone}`}>
          <span aria-hidden="true" />
          {group.level}
        </span>
      </div>

      <h3>{group.title}</h3>
      <p className="skill-card__caption">{group.caption}</p>

      <ul className="skill-card__tags" aria-label={`${group.title} technologies`}>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ArrowUpRight
        className="skill-card__arrow"
        size={16}
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </article>
  );
}
