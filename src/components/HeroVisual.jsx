export default function HeroVisual() {
  return (
    <aside className="hero-plate" aria-hidden="true">
      <div className="hero-plate__frame">
        <div className="hero-plate__meta">
          <span className="mono">Profile / 2026</span>
          <span className="hero-plate__status">
            <span className="availability-dot" />
            Open to work
          </span>
        </div>

        <div className="hero-plate__stage">
          <svg
            className="hero-plate__art"
            viewBox="0 0 440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <defs>
              <radialGradient id="heroGlow" cx="50%" cy="46%" r="52%">
                <stop offset="0%" stopColor="#7df9d3" stopOpacity="0.2" />
                <stop offset="58%" stopColor="#7df9d3" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#7df9d3" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="heroLine" x1="30" y1="200" x2="410" y2="330">
                <stop stopColor="#7df9d3" stopOpacity="0.75" />
                <stop offset="1" stopColor="#aa9fff" stopOpacity="0.3" />
              </linearGradient>
              <pattern
                id="heroGrid"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M28 0H0V28"
                  stroke="#eaf5ee"
                  strokeOpacity="0.065"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect width="440" height="500" fill="url(#heroGlow)" />
            <rect width="440" height="500" fill="url(#heroGrid)" />

            <g stroke="#eef7f0" strokeOpacity="0.11">
              <circle cx="220" cy="250" r="184" strokeDasharray="1 10" />
              <circle cx="220" cy="250" r="138" strokeOpacity="0.16" />
              <circle cx="220" cy="250" r="70" strokeDasharray="2 7" />
              <path d="M220 36V464M8 250H432" strokeDasharray="2 9" />
            </g>

            <g className="hero-plate__arc">
              <circle
                cx="220"
                cy="250"
                r="160"
                stroke="url(#heroLine)"
                strokeWidth="1.2"
                strokeDasharray="2 8 48 8"
                strokeLinecap="round"
              />
            </g>

            <g pointerEvents="none">
              <path
                d="M16 380C78 338 121 418 192 378C259 340 306 412 424 356"
                stroke="url(#heroLine)"
                strokeWidth="1.15"
              />
              <path
                d="M16 400C78 358 121 438 192 398C259 360 306 432 424 376"
                stroke="#7df9d3"
                strokeOpacity="0.22"
                strokeWidth="1"
              />
              <path
                d="M16 420C78 378 121 458 192 418C259 380 306 452 424 396"
                stroke="#aa9fff"
                strokeOpacity="0.16"
                strokeWidth="1"
              />
            </g>

            <g fill="#7df9d3">
              <circle cx="220" cy="66" r="3.4" />
              <circle cx="374" cy="250" r="2.6" fillOpacity="0.8" />
              <circle cx="66" cy="250" r="2" fillOpacity="0.55" />
              <circle cx="299" cy="368" r="2.4" fillOpacity="0.7" />
              <circle cx="139" cy="141" r="2" fillOpacity="0.5" />
            </g>

            <g stroke="#7df9d3" strokeOpacity="0.55">
              <path d="M220 60V74" />
              <path d="M368 250H380" />
              <path d="M60 250H72" />
            </g>

            <g
              fill="#85948a"
              fontFamily="'JetBrains Mono Variable', monospace"
              fontSize="8"
              letterSpacing="1.4"
            >
              <text x="197" y="28">
                00 / SIGNAL
              </text>
              <text x="356" y="316">
                AI
              </text>
              <text x="30" y="440">
                CHENNAI / IN
              </text>
            </g>

            <g stroke="#eef7f0" strokeOpacity="0.06">
              <path d="M28 28H72M28 28V72" />
              <path d="M412 472H368M412 472V428" />
            </g>
          </svg>

          <div className="hero-plate__monogram">
            <span>R</span>
            <span>D</span>
            <i>.</i>
          </div>

          <span className="hero-plate__tag hero-plate__tag--one">AI / ML</span>
          <span className="hero-plate__tag hero-plate__tag--two">
            Full Stack
          </span>
          <span className="hero-plate__tag hero-plate__tag--three">Data</span>
          <span className="hero-plate__coordinate">
            13.08° N
            <br />
            80.27° E
          </span>
          <span className="hero-plate__scan" />
        </div>

        <div className="hero-plate__details">
          <div>
            <span className="mono">Education</span>
            <strong>B.Tech AI &amp; DS</strong>
          </div>
          <div>
            <span className="mono">Base</span>
            <strong>Chennai, IN</strong>
          </div>
          <div>
            <span className="mono">Class</span>
            <strong>2026</strong>
          </div>
        </div>

        <div className="hero-plate__footer">
          <span className="mono">Index 01 — Developer</span>
          <span className="mono">Signal / Active</span>
        </div>
      </div>
    </aside>
  );
}
