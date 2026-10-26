export default function ProjectCover({ project, context = 'card' }) {
  const isModal = context === 'modal';
  const { visual } = project;

  if (visual) {
    return (
      <div className={`project-cover project-cover--${context}`}>
        <img
          className="project-cover__image"
          src={visual.src}
          alt={visual.alt}
          loading={isModal ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="project-cover__chrome">
          <span className="project-cover__label">
            <span aria-hidden="true" />
            {visual.label}
          </span>
          <span className="project-cover__code">RD / {project.number}</span>
        </div>
        {isModal && visual.caption ? (
          <p className="project-cover__caption">{visual.caption}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`project-cover project-cover--${context} project-cover--generated`}
      role="img"
      aria-label={`${project.title} — ${project.subtitle}. Case-study design cover.`}
    >
      {project.cover === 'finance' ? <FinanceCover project={project} /> : null}
      {project.cover === 'watch' ? <WatchCover project={project} /> : null}
      {project.cover === 'house' ? <HouseCover project={project} /> : null}
      {project.cover === 'laptop' ? <LaptopCover project={project} /> : null}

      <div className="project-cover__chrome">
        <span className="project-cover__label">
          <span aria-hidden="true" />
          Case-study visual
        </span>
        <span className="project-cover__code">RD / {project.number}</span>
      </div>
      <span className="project-cover__notice">
        Design cover · not a screenshot
      </span>
    </div>
  );
}

function FinanceCover({ project }) {
  return (
    <div className="cover-art cover-art--finance">
      <span className="cover-art__eyebrow">Personal finance / product concept</span>
      <div className="finance-orbit" aria-hidden="true" />
      <div className="finance-glyph" aria-hidden="true">
        ₹
      </div>

      <svg
        className="finance-spark"
        viewBox="0 0 600 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="finance-spark__fill"
          d="M0 222C44 208 74 226 112 196C150 166 173 186 208 160C243 134 270 150 304 124C338 98 365 118 400 88C435 58 465 78 502 54C539 30 567 48 600 24V260H0Z"
        />
        <path
          className="finance-spark__line"
          d="M0 222C44 208 74 226 112 196C150 166 173 186 208 160C243 134 270 150 304 124C338 98 365 118 400 88C435 58 465 78 502 54C539 30 567 48 600 24"
        />
        <g className="finance-spark__dots">
          <circle cx="112" cy="196" r="3.5" />
          <circle cx="208" cy="160" r="3.5" />
          <circle cx="304" cy="124" r="3.5" />
          <circle cx="400" cy="88" r="3.5" />
          <circle cx="502" cy="54" r="3.5" />
          <circle cx="600" cy="24" r="3.5" />
        </g>
      </svg>

      <div className="finance-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="finance-meta">
        <span>Budgets · goals · reports</span>
        <strong>
          Money<span>Mind</span>
        </strong>
      </div>
      <span className="cover-art__index">{project.number} / 07</span>
    </div>
  );
}

function WatchCover({ project }) {
  return (
    <div className="cover-art cover-art--watch">
      <span className="cover-art__eyebrow">Horology / Front-end study</span>

      <div className="watch-dial" aria-hidden="true">
        <span className="watch-hand watch-hand--hour" />
        <span className="watch-hand watch-hand--minute" />
        <span className="watch-centre" />
        <span className="watch-marker watch-marker--top">XII</span>
        <span className="watch-marker watch-marker--right">III</span>
        <span className="watch-marker watch-marker--bottom">VI</span>
        <span className="watch-marker watch-marker--left">IX</span>
      </div>

      <p className="watch-type">
        <span className="serif-italic">Time</span>
        <span>is precious.</span>
      </p>

      <span className="cover-art__meta">
        A quiet luxury concept — no brand affiliation.
      </span>
      <span className="cover-art__index">{project.number} / 07</span>
    </div>
  );
}

function HouseCover({ project }) {
  return (
    <div className="cover-art cover-art--house">
      <span className="cover-art__eyebrow">Regression / feature space</span>

      <svg
        className="house-plot"
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="house-plot__grid">
          <path d="M60 60H560M60 120H560M60 180H560M60 240H560" />
          <path d="M120 30V270M240 30V270M360 30V270M480 30V270" />
        </g>
        <path className="house-plot__trend" d="M62 248L548 64" />
        <g className="house-plot__points">
          <circle cx="96" cy="228" r="4" />
          <circle cx="132" cy="244" r="3" />
          <circle cx="166" cy="208" r="4.5" />
          <circle cx="204" cy="226" r="3" />
          <circle cx="242" cy="176" r="4" />
          <circle cx="278" cy="190" r="3" />
          <circle cx="316" cy="152" r="4.5" />
          <circle cx="346" cy="168" r="3" />
          <circle cx="386" cy="132" r="4" />
          <circle cx="420" cy="146" r="3.5" />
          <circle cx="456" cy="110" r="4" />
          <circle cx="492" cy="92" r="3" />
          <circle cx="528" cy="76" r="4.5" />
        </g>
        <path
          className="house-plot__frame"
          d="M60 270V190L130 128L200 190V270M94 270V220H166V270"
        />
      </svg>

      <div className="house-meta">
        <span>Features → estimate</span>
        <strong>
          House Price
          <em>Prediction</em>
        </strong>
      </div>
      <span className="cover-art__index">{project.number} / 07</span>
    </div>
  );
}

function LaptopCover({ project }) {
  return (
    <div className="cover-art cover-art--laptop">
      <span className="cover-art__eyebrow">Product UI</span>

      <div className="laptop-shapes" aria-hidden="true">
        <div className="laptop-shape laptop-shape--back">
          <span className="laptop-shape__screen">
            <span />
            <span />
            <span />
          </span>
          <span className="laptop-shape__base" />
        </div>
        <div className="laptop-shape laptop-shape--front">
          <span className="laptop-shape__screen">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="laptop-shape__base" />
        </div>
      </div>

      <div className="laptop-meta">
        <span className="mono">Specs / price / rating</span>
        <strong>
          Less guessing.
          <em>Better shortlists.</em>
        </strong>
      </div>
      <span className="cover-art__index">{project.number} / 07</span>
    </div>
  );
}
