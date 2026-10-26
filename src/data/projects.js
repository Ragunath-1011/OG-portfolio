export const categories = [
  'All',
  'AI / ML',
  'Full Stack',
  'Data Analytics',
  'Web Development',
];

export const projects = [
  {
    id: 'aquavision',
    number: '01',
    title: 'AquaVision',
    subtitle: 'Underwater Object Detection & Tracking',
    category: 'AI / ML',
    status: 'Academic project · In progress',
    statusTone: 'progress',
    yearLabel: 'Academic',
    summary:
      'A computer-vision study for spotting and tracking underwater species in images and video.',
    overview:
      'AquaVision is an academic deep-learning project built around a YOLOv8 pipeline. I trained and evaluated detection experiments on underwater imagery, then explored how detections could be stored, reviewed and queried in a more useful interface.',
    contributions: [
      'Prepared and worked with underwater image data for YOLOv8 object-detection training.',
      'Explored detection across seven target species: fish, jellyfish, penguin, puffin, shark, starfish and stingray.',
      'Investigated SQLite for detection storage, FFmpeg for video frames, Streamlit for review, and Flask/FastAPI for serving results.',
      'Prototyped a conversational layer using LangChain, Ollama, FAISS and HuggingFace embeddings.',
    ],
    statusNote:
      'The model and training artifacts are real. End-to-end integration and video playback were still being refined, so this is presented as an academic work-in-progress — not a finished detection product.',
    stack: ['Python', 'YOLOv8', 'Ultralytics', 'PyTorch', 'OpenCV', 'SQLite'],
    visual: {
      src: '/images/aquavision-training.webp',
      alt: 'A real YOLO training batch showing underwater images with coloured bounding boxes around fish, jellyfish, turtles and other species.',
      label: 'Actual training artifact',
      caption:
        'A training batch from the local YOLOv8 run. Bounding boxes are model annotations, not a live app screenshot.',
      extra: '/images/aquavision-labels.webp',
    },
    links: [],
  },
  {
    id: 'ecommerce-analytics',
    number: '02',
    title: 'E-Commerce Analytics',
    subtitle: 'Analytics Dashboard Prototype',
    category: 'Data Analytics',
    status: 'Prototype',
    statusTone: 'live',
    yearLabel: 'Full stack',
    summary:
      'An API-driven dashboard for reading revenue, orders and category performance at a glance.',
    overview:
      'A full-stack analytics prototype with a React and Vite front end backed by a Django REST API. It brings summary metrics, a revenue trend, category breakdown and recent orders into one scan-friendly workspace.',
    contributions: [
      'Built the React/Vite dashboard shell with a responsive sidebar, top bar and date-range controls.',
      'Connected the interface to Django REST endpoints through a central axios service layer.',
      'Used Recharts for the revenue trend and category-mix visualisations.',
      'Created views for dashboard, orders, products, customers, analytics, reports and settings.',
    ],
    statusNote:
      'The screenshot shows the real interface populated with demo data for presentation. It does not represent real business results.',
    stack: ['React', 'Vite', 'JavaScript', 'Recharts', 'Django REST', 'CSS'],
    visual: {
      src: '/images/ecommerce-analytics.webp',
      alt: 'Screenshot of the e-commerce analytics dashboard showing a sidebar, revenue, order and average-order cards, and a revenue trend chart.',
      label: 'Actual interface · demo data',
      caption:
        'Actual dashboard UI shown with demo data. Numbers are illustrative, not business results.',
    },
    links: [],
  },
  {
    id: 'horror-hub',
    number: '03',
    title: 'Horror Hub',
    subtitle: 'Horror Movie Website',
    category: 'Web Development',
    status: 'Front-end build',
    statusTone: 'live',
    yearLabel: 'Hand-coded',
    summary:
      'A dark, OTT-inspired movie landing page built with plain HTML, CSS and JavaScript.',
    overview:
      'A horror streaming concept built as a single-page front-end exercise. The experience leans into a cinematic dark palette, a subscription prompt, language selector and poster rail with hover interactions.',
    contributions: [
      'Designed a full-bleed cinematic hero with a dark image overlay and clear value proposition.',
      'Built the subscription and language/sign-in UI as a static visual prototype.',
      'Added five film posters with hover focus and blur interactions, linking to public trailers.',
      'Hand-wrote the responsive layout and styling without a framework.',
    ],
    statusNote:
      'The email, language and sign-in controls are visual-only in the original build — no authentication or email backend is connected.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    visual: {
      src: '/images/horror-hub.webp',
      alt: 'Screenshot of the Horror Hub landing page with a collage of horror movie posters, a subscription headline and an email sign-up field.',
      label: 'Actual interface',
      caption: 'An actual capture of the locally saved Horror Hub front-end build.',
    },
    links: [],
  },
  {
    id: 'moneymind',
    number: '04',
    title: 'MoneyMind',
    subtitle: 'Personal Finance Tracker',
    category: 'Full Stack',
    status: 'In progress',
    statusTone: 'progress',
    yearLabel: 'Full stack',
    summary:
      'A personal finance app for making transactions, budgets and savings goals legible.',
    overview:
      'MoneyMind is a Flask and MySQL application designed around the everyday rhythm of personal finance: recording transactions, tracking budgets, setting savings goals and producing reports. The modules and data model were being brought together into one complete flow.',
    contributions: [
      'Designed MySQL tables for users, transactions, budgets and savings goals.',
      'Worked on authentication, transaction, analytics and reporting modules.',
      'Built CSV transaction-report output for taking data out of the app.',
      'Investigated a foreign-key error during transaction creation when the users table was empty.',
    ],
    statusNote:
      'Front-end/back-end integration is still in progress. I have not presented the transaction flow as a completed, deployable feature.',
    stack: ['Python', 'Flask', 'MySQL', 'REST APIs', 'CSV'],
    cover: 'finance',
    links: [],
  },
  {
    id: 'time-is-precious',
    number: '05',
    title: 'Time Is Precious',
    subtitle: 'Luxury Watch Website',
    category: 'Web Development',
    status: 'Concept',
    statusTone: 'concept',
    yearLabel: 'Design study',
    summary:
      'A luxury watch website concept built around restraint, typography and motion.',
    overview:
      'A brand-led front-end concept for a luxury-watch house. The direction favours generous space, editorial type, cinematic media and quiet hover interactions over a busy storefront. Brands such as Rolex, Omega, Patek Philippe and TAG Heuer appear as examples within the concept only.',
    contributions: [
      'Created a luxury editorial layout with a cinematic hero section.',
      'Explored brand-oriented pages, navigation and responsive structure.',
      'Added hero video and hover animation concepts.',
      'Built with HTML5 and CSS3 as a front-end design study.',
    ],
    statusNote:
      'This is an independent concept and is not affiliated with any watch brand. The cover shown here is a case-study visual, not a screenshot of the original site.',
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
    cover: 'watch',
    links: [],
  },
  {
    id: 'house-price',
    number: '06',
    title: 'House Price Prediction',
    subtitle: 'Regression Study',
    category: 'AI / ML',
    status: 'Academic exercise',
    statusTone: 'concept',
    yearLabel: 'Machine learning',
    summary:
      'A regression-based exploration of how property attributes can inform a price estimate.',
    overview:
      'A machine-learning exercise centred on regression-based house-price prediction. The project explores the Python data workflow behind a model rather than a deployed property-pricing service.',
    contributions: [
      'Explored a regression workflow with Python, pandas, NumPy and Linear Regression.',
      'Focused on data preparation and understanding model fit rather than production deployment.',
      'Kept the scope deliberately academic: no accuracy or business-impact claims are published.',
    ],
    statusNote:
      'No deployed prediction demo or performance metric is claimed. The focus here is the learning process.',
    stack: ['Python', 'pandas', 'NumPy', 'Linear Regression'],
    cover: 'house',
    links: [],
  },
  {
    id: 'laptop-comparison',
    number: '07',
    title: 'Laptop Price Comparison',
    subtitle: 'Product Comparison Interface',
    category: 'Web Development',
    status: 'Prototype',
    statusTone: 'progress',
    yearLabel: 'React UI',
    summary:
      'A React interface for comparing laptops by specifications, price and ratings side by side.',
    overview:
      'A responsive React comparison experience built around structured, JSON-driven product data. The goal was a clear reading experience for spec-heavy listings without page reloads.',
    contributions: [
      'Built side-by-side comparison views for laptop specifications and pricing.',
      'Rendered product listings from structured JSON data without page reloads.',
      'Used a component-driven React structure for repeatable listing and comparison UI.',
    ],
    statusNote:
      'Presented as a prototype. No live retailer integration or real-time pricing is claimed.',
    stack: ['React', 'JavaScript', 'CSS', 'JSON'],
    cover: 'laptop',
    links: [],
  },
];
