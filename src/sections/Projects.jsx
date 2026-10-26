import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categories, projects } from '../data/projects';
import { profile } from '../data/profile';
import { GithubIcon } from '../components/BrandIcons';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const counts = useMemo(
    () =>
      projects.reduce(
        (accumulator, project) => {
          accumulator[project.category] += 1;
          return accumulator;
        },
        Object.fromEntries(categories.map((category) => [category, 0])),
      ),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section
      id="projects"
      className="section section--divided projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionHeading
          id="projects"
          index="03"
          label="Projects"
          title={
            <>
              Selected work, <span className="serif-italic">shown honestly.</span>
            </>
          }
          intro="Seven projects across AI, full-stack and front-end work. Real screenshots where they exist; clear labels where they don't."
        />

        <Reveal className="projects__toolbar" delay={80}>
          <div
            className="filter-bar"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-bar__button ${
                  activeCategory === category ? 'is-active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
                <span aria-hidden="true">
                  {category === 'All' ? projects.length : counts[category]}
                </span>
              </button>
            ))}
          </div>

          <a
            className="text-link projects__github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={15} aria-hidden="true" />
            More on GitHub
            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </Reveal>

        <p className="projects__count mono" aria-live="polite">
          Showing {String(filteredProjects.length).padStart(2, '0')} of{' '}
          {String(projects.length).padStart(2, '0')} projects
        </p>

        <div className="projects__grid" key={activeCategory}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <Reveal className="projects__note" delay={100}>
          <span className="mono">A note on status</span>
          <p>
            “In progress”, “Prototype” and “Concept” are deliberate labels. I&apos;d
            rather show the real stage of the work than overstate a screenshot.
          </p>
        </Reveal>
      </div>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  );
}
