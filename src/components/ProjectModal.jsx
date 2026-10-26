import { useEffect, useRef } from 'react';
import { ArrowLeft, Mail, X } from 'lucide-react';
import { profile } from '../data/profile';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import ProjectCover from './ProjectCover';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useLockBodyScroll(Boolean(project));

  useEffect(() => {
    if (!project) return undefined;

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog?.open) dialog.close();
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [project]);

  if (!project) return null;

  const titleId = `project-modal-title-${project.id}`;

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="project-modal__panel">
        <div className="project-modal__topbar">
          <span className="mono">
            Case study / {project.number} — {project.category}
          </span>
          <button
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close project case study"
          >
            <span>Close</span>
            <X size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <div className="project-modal__scroll">
          <div className="project-modal__media">
            <ProjectCover project={project} context="modal" />
          </div>

          <div className="project-modal__content">
            <div className="project-modal__intro">
              <div className="project-card__meta">
                <span className="project-card__category">
                  {project.category}
                </span>
                <span
                  className={`status-pill status-pill--${project.statusTone}`}
                >
                  <span aria-hidden="true" />
                  {project.status}
                </span>
              </div>
              <h2 id={titleId}>{project.title}</h2>
              <p className="project-modal__subtitle">{project.subtitle}</p>
              <p className="project-modal__overview">{project.overview}</p>
            </div>

            <div className="project-modal__grid">
              <div className="project-modal__details">
                <h3>What I worked on</h3>
                <ul>
                  {project.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {project.visual?.extra ? (
                  <figure className="project-modal__artifact">
                    <img
                      src={project.visual.extra}
                      alt="Dataset class distribution and bounding-box statistics from the local YOLO training run."
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>
                      Training statistics from the local YOLO run — another
                      actual project artifact.
                    </figcaption>
                  </figure>
                ) : null}
              </div>

              <aside className="project-modal__aside">
                <div>
                  <h3>Stack</h3>
                  <ul className="project-card__stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal__status">
                  <h3>Status note</h3>
                  <p>{project.statusNote}</p>
                </div>

                {project.links?.length ? (
                  <div>
                    <h3>Links</h3>
                    <ul className="project-modal__links">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a
                            className="text-link"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </aside>
            </div>

            <div className="project-modal__footer">
              <a
                className="btn btn--primary"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  `Question about ${project.title}`,
                )}`}
              >
                <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
                Ask about this project
              </a>
              <button type="button" className="text-link" onClick={onClose}>
                <ArrowLeft size={15} strokeWidth={1.8} aria-hidden="true" />
                Back to projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
