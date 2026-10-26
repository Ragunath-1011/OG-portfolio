import { ArrowUpRight } from 'lucide-react';
import ProjectCover from './ProjectCover';

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <article
      className={`project-card ${
        project.id === 'aquavision' ? 'project-card--featured' : ''
      }`}
      style={{ '--card-delay': `${Math.min(index * 60, 300)}ms` }}
    >
      <div className="project-card__visual">
        <ProjectCover project={project} />
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className={`status-pill status-pill--${project.statusTone}`}>
            <span aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <div className="project-card__heading">
          <span className="project-card__number mono">{project.number}</span>
          <div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
        </div>

        <p className="project-card__summary">{project.summary}</p>

        <ul
          className="project-card__stack"
          aria-label={`${project.title} technologies`}
        >
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-card__footer">
          <button
            type="button"
            className="project-card__button"
            onClick={() => onOpen(project)}
          >
            View case study
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <span className="project-card__context mono">{project.yearLabel}</span>
        </div>
      </div>
    </article>
  );
}
