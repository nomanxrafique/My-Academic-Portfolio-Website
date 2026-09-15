/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH
 * ============================================================================
 *
 *  Everything the website displays lives in this file. To update the site,
 *  edit the values here — you never need to touch the components.
 *
 *  Anything written as `[Add ...]` is a placeholder you should replace.
 *  Placeholders are rendered with a visible "to be added" style so you can
 *  spot them instantly, and project cards marked `placeholder: true` are
 *  hidden automatically once you fill them in properly.
 *
 *  RULE: never put anything here that you cannot evidence with a document,
 *  a repository, or a transcript. This site is read by admissions committees.
 * ============================================================================
 */

/* -------------------------------------------------------------------------
 * 1. IDENTITY
 * ---------------------------------------------------------------------- */

export const profile = {
  /** Full legal name, exactly as it appears on your passport and CSC forms. */
  fullName: 'Muhammad Nauman Rafique',
  /** Compact form used in tight spaces such as the mobile navigation bar. */
  shortName: 'M. Nauman Rafique',

  headline: 'BS Software Engineering | Cybersecurity Graduate Applicant',

  degree: 'Bachelor of Science in Software Engineering',
  university: 'Institute of Management Sciences (IMSciences)',
  universityShort: 'IMSciences',
  universityUrl: 'https://imsciences.edu.pk',
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  nationality: 'Pakistani',
  graduation: '2026',

  academicDirection: 'Cybersecurity / Cyberspace Security',

  /** Shown in the hero. Keep to two sentences — professors skim. */
  summary:
    'Software Engineering graduate from Pakistan preparing for Master’s-level study and research in Cybersecurity and Cyberspace Security, with research interests spanning AI Security, Cloud Security, Blockchain Security, Data Privacy, and Applied Cryptography.',

  /** Optional professional photograph. Set to null to hide it. */
  photo: {
    src: '/images/profile.jpg',
    alt: 'Portrait photograph of Muhammad Nauman Rafique',
  } as { src: string; alt: string } | null,
} as const;

/* -------------------------------------------------------------------------
 * 2. CONTACT
 * ---------------------------------------------------------------------- */

export const contact = {
  email: 'nomirafique2@gmail.com',
  github: 'https://github.com/nomanxrafique',
  githubHandle: 'nomanxrafique',

  /**
   * Displayed in international format. The `tel:` link is derived from this
   * automatically, so write it however you want it to read. Set to null to
   * remove the phone card.
   */
  phone: '+92 341 3368188' as string | null,

  /**
   * Many Chinese supervisors prefer WeChat to email. Set to null to hide the
   * WeChat card in the Contact section entirely.
   */
  wechat: 'naumanrafiq' as string | null,

  /**
   * WeChat "add me" QR code. Displayed beside the WeChat ID so a supervisor
   * can scan it straight from the page. Set to null to hide the QR panel.
   * Export a fresh one from WeChat → Me → My QR Code if it ever changes.
   */
  wechatQr: {
    src: '/images/wechat-qr.png',
    alt: 'WeChat QR code for Muhammad Nauman Rafique — scan in WeChat to add as a contact',
  } as { src: string; alt: string } | null,

  /**
   * Google Scholar / ORCID — leave null until you actually have one.
   * Never link an empty profile.
   */
  scholar: null as string | null,
  orcid: null as string | null,
} as const;

/* -------------------------------------------------------------------------
 * 3. CURRICULUM VITAE
 * ---------------------------------------------------------------------- */

export const cv = {
  /** Place the PDF at public/<filename>. */
  file: '/Muhammad-Nauman-Rafique-Academic-CV.pdf',
  /** Filename the visitor's browser will save it as. */
  downloadName: 'Muhammad-Nauman-Rafique-Academic-CV.pdf',
  /** Shown beneath the download button. Update whenever you replace the PDF. */
  lastUpdated: 'September 2026',
} as const;

/* -------------------------------------------------------------------------
 * 4. ABOUT
 * ---------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    'I am a Software Engineering graduate from the Institute of Management Sciences (IMSciences), Peshawar, Pakistan. My undergraduate education provided me with foundations in software engineering, algorithms, databases, computer networks, operating systems, artificial intelligence, data mining, statistics, mathematics, and software architecture.',
    'I am interested in pursuing graduate study in Cybersecurity and Cyberspace Security, particularly in areas connecting artificial intelligence, cloud computing, blockchain, privacy, and secure computing. My undergraduate final year project gave me practical exposure to authentication, authorisation, transport security, and cloud infrastructure hardening, and my Cisco CyberOps Associate certification introduced me to network security monitoring and incident detection.',
    'My goal is to develop deeper theoretical and practical knowledge of cybersecurity during Master’s study, and to gradually build the research skills required to contribute to secure and trustworthy digital systems.',
  ],

  /**
   * A short research statement. This is the paragraph a prospective supervisor
   * is most likely to read in full — keep it specific and honest.
   */
  researchStatement:
    'My intended research direction is the security of intelligent systems: understanding how machine learning models fail under adversarial conditions, and how privacy can be preserved when learning happens across distributed or untrusted infrastructure. I am particularly drawn to problems at the intersection of AI security and cloud or blockchain-based systems — for example, adversarial robustness of models deployed as cloud services, privacy-preserving and federated learning, and the integrity of decentralised computation. I do not yet claim research experience in these areas; my aim during a Master’s programme is to build the theoretical grounding and methodological discipline needed to work on them seriously, under supervision.',

  languages: [
    { name: 'English', level: 'Professional working proficiency — medium of instruction throughout B.S.' },
    { name: 'Urdu', level: 'Native proficiency' },
    { name: 'Pashto', level: 'Native proficiency' },
  ],

  /**
   * English test scores. Required by most Chinese universities and by CSC.
   * Fill these in when you have them; the block is hidden while empty.
   */
  englishTest: null as { name: string; score: string; date: string } | null,
} as const;

/* -------------------------------------------------------------------------
 * 5. RESEARCH INTERESTS
 * ---------------------------------------------------------------------- */

export type ResearchInterest = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  topics: string[];
};

export const researchInterests: ResearchInterest[] = [
  {
    id: 'ai-security',
    title: 'AI Security',
    icon: 'Brain',
    summary:
      'Security and trustworthiness of machine learning systems, and the ways they can be attacked or defended.',
    topics: [
      'Secure AI',
      'Adversarial machine learning',
      'AI system security',
      'Trustworthy AI',
      'AI privacy',
      'Attacks and defences in machine learning',
    ],
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    icon: 'Cloud',
    summary:
      'Protecting workloads, identities, and data across distributed cloud infrastructure.',
    topics: [
      'Cloud infrastructure security',
      'Distributed systems security',
      'Identity and access management',
      'Cloud data protection',
      'Secure cloud architectures',
    ],
  },
  {
    id: 'blockchain-security',
    title: 'Blockchain Security',
    icon: 'Blocks',
    summary:
      'Security, privacy, and correctness of decentralised systems and the contracts that run on them.',
    topics: [
      'Blockchain security',
      'Smart-contract security',
      'Decentralised systems',
      'Blockchain privacy',
      'Consensus security',
    ],
  },
  {
    id: 'data-privacy',
    title: 'Data Security & Privacy',
    icon: 'ShieldCheck',
    summary:
      'Keeping data useful while keeping it confidential, both at rest and in computation.',
    topics: [
      'Data protection',
      'Privacy-preserving computation',
      'Secure data sharing',
      'Privacy-enhancing technologies',
    ],
  },
  {
    id: 'applied-cryptography',
    title: 'Applied Cryptography',
    icon: 'KeyRound',
    summary:
      'Cryptographic building blocks and the protocols that turn them into real, deployable guarantees.',
    topics: [
      'Cryptographic protocols',
      'Secure communication',
      'Privacy-preserving systems',
      'Modern cryptographic applications',
    ],
  },
  {
    id: 'secure-ml',
    title: 'Secure Machine Learning',
    icon: 'Network',
    summary:
      'Learning across distributed and untrusted participants without surrendering privacy or integrity.',
    topics: [
      'Federated learning',
      'Privacy-preserving ML',
      'Distributed learning',
      'ML attacks and defences',
    ],
  },
];

/* -------------------------------------------------------------------------
 * 6. RESEARCH DIRECTION (the academic pathway diagram)
 * ---------------------------------------------------------------------- */

export const researchDirection = {
  stages: [
    {
      label: 'Foundation',
      title: 'Software Engineering',
      detail: 'B.S. Software Engineering — algorithms, systems, networks, databases, AI.',
    },
    {
      label: 'Direction',
      title: 'Cybersecurity / Cyberspace Security',
      detail: 'Intended field of Master’s-level study and research.',
    },
    {
      label: 'Focus areas',
      title: 'AI Security · Cloud Security · Blockchain Security · Privacy · Cryptography',
      detail: 'Specialisation to be developed during graduate coursework and supervised work.',
    },
    {
      label: 'Objective',
      title: 'Graduate Research',
      detail: 'Contributing to secure and trustworthy digital systems under academic supervision.',
    },
  ],
  destination: 'Secure Intelligent Digital Systems',
} as const;

/* -------------------------------------------------------------------------
 * 7. TECHNICAL SKILLS
 *
 *  Keep this honest. A short list you can defend in an interview is worth
 *  more than a long list you cannot.
 * ---------------------------------------------------------------------- */

export type SkillGroup = {
  title: string;
  icon: string;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    items: ['Python', 'Java', 'JavaScript', 'C / C++'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    note: 'Coursework and personal project level.',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Matplotlib'],
  },
  {
    title: 'Web & Software Development',
    icon: 'Layers',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Security Foundations',
    icon: 'ShieldCheck',
    note: 'Foundational level, from Cisco CyberOps Associate coursework and undergraduate study.',
    items: [
      'Network Security',
      'Security Monitoring',
      'Incident Detection & Response',
      'Network Intrusion Analysis',
      'Threat Intelligence Concepts',
      'Vulnerability Assessment',
      'Authentication & Access Control',
      'Cryptography Fundamentals',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Terminal',
    items: ['Git', 'GitHub', 'Linux', 'Wireshark', 'AWS (EC2, RDS, S3)', 'VS Code'],
  },
];

/* -------------------------------------------------------------------------
 * 8. EDUCATION
 * ---------------------------------------------------------------------- */

export type EducationEntry = {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  /** Only ever show a verified grade. Set to null to hide. */
  grade: string | null;
  description: string;
};

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Institute of Management Sciences (IMSciences)',
    institutionUrl: 'https://imsciences.edu.pk',
    location: 'Peshawar, Pakistan',
    period: '2021 — 2026',
    grade: '72%',
    description:
      'Undergraduate study covering software engineering, artificial intelligence, data mining, algorithms, computer networks, operating systems, information security, databases, statistics, mathematics, and software architecture.',
  },
];

/* -------------------------------------------------------------------------
 * 9. RELEVANT COURSEWORK
 *
 *  `verified: true` marks courses confirmed on your academic transcript.
 *  Grades are deliberately omitted — add them only from the official
 *  transcript, never from memory.
 * ---------------------------------------------------------------------- */

export type Course = { name: string; area: 'Computing' | 'Security & Systems' | 'Mathematics & Statistics' };

export const coursework: Course[] = [
  { name: 'Artificial Intelligence', area: 'Computing' },
  { name: 'Natural Language Processing', area: 'Computing' },
  { name: 'Data Mining', area: 'Computing' },
  { name: 'Data Structures & Algorithms', area: 'Computing' },
  { name: 'Database Systems', area: 'Computing' },
  { name: 'Software Architecture & Design', area: 'Computing' },
  { name: 'Simulation & Modeling', area: 'Computing' },
  { name: 'Information & Communication Technology', area: 'Computing' },

  { name: 'Computer Networks', area: 'Security & Systems' },
  { name: 'Operating Systems', area: 'Security & Systems' },
  { name: 'Information Security', area: 'Security & Systems' },
  { name: 'Digital Logic Design', area: 'Security & Systems' },

  { name: 'Discrete Computing / Discrete Mathematics', area: 'Mathematics & Statistics' },
  { name: 'Probability & Statistics', area: 'Mathematics & Statistics' },
  { name: 'Computational Statistics', area: 'Mathematics & Statistics' },
  { name: 'Linear Algebra', area: 'Mathematics & Statistics' },
  { name: 'Calculus', area: 'Mathematics & Statistics' },
];

/* -------------------------------------------------------------------------
 * 10. FINAL YEAR PROJECT
 * ---------------------------------------------------------------------- */

export const finalYearProject = {
  title: 'ARTIC ESTATE',
  kicker: 'Undergraduate Final Year Project — B.S. Software Engineering',
  period: '2024 — 2025',

  problem:
    'Property listing platforms handle personal data, financial intent, and role-separated workflows for buyers, sellers, and administrators. Built quickly and without a security model, they commonly leak data through weak authentication, missing authorisation checks between roles, and unhardened cloud infrastructure.',

  solution:
    'A full-stack real-estate platform designed around an explicit security model: token-based authentication with hashed credentials, role-based access control enforced at the API layer rather than in the interface, encrypted transport, and a cloud deployment where network access and storage permissions are restricted by default.',

  features: [
    'Token-based authentication using JWT, with OAuth 2.0 for federated sign-in',
    'Password storage using bcrypt hashing rather than reversible encryption',
    'Role-based access control separating buyer, seller, and administrator capabilities',
    'Authorisation enforced server-side on every REST endpoint',
    'HTTPS/TLS for all client–server communication',
    'AWS IAM roles and security groups restricting infrastructure and storage access',
    'Property management workflows with media storage on Amazon S3',
    'Integration and security testing, with performance evaluated under load',
  ],

  contribution:
    'I worked on the application end to end — designing the data model and REST API, implementing the authentication and role-based authorisation layer, configuring the AWS deployment including IAM policies and security groups, and carrying out the integration and security testing. System performance was evaluated under workloads of up to 120 concurrent users.',

  technologies: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MySQL',
    'Sequelize ORM',
    'AWS EC2',
    'AWS RDS',
    'AWS S3',
    'AWS IAM',
    'JWT',
    'OAuth 2.0',
    'bcrypt',
    'HTTPS/TLS',
  ],

  /** Replace with the real repository URL, or set to null to hide the button. */
  github: 'https://github.com/nomanxrafique/ARTIC-ESTATE-Undergraduate-Final-Year-Project' as
    | string
    | null,
  /** Live deployment, if one exists. */
  demo: null as string | null,

  /** Shown when `github` is null, so visitors understand why there is no link. */
  repositoryNote: 'Repository link to be added.',
} as const;

/* -------------------------------------------------------------------------
 * 11. OTHER PROJECTS
 *
 *  Add real projects here. Entries with `placeholder: true` render in a
 *  muted "to be added" style — delete them once you have real projects, or
 *  set the flag to false after filling in the details.
 * ---------------------------------------------------------------------- */

export type Project = {
  name: string;
  category:
    | 'Cybersecurity'
    | 'Artificial Intelligence'
    | 'Machine Learning'
    | 'Software Engineering'
    | 'Web Development'
    | 'Data';
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Hire Hub',
    category: 'Software Engineering',
    description:
      'A job-seeking platform where candidates search and apply for relevant positions while administrators manage job postings and applicant submissions. Applicant and administrator capabilities are separated on the server, with token-based sessions, hashed credentials, and file upload handling for candidate documents.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Multer',
    ],
    github: 'https://github.com/nomanxrafique/Hire_hub',
    demo: null,
  },
  {
    name: 'Hotlify',
    category: 'Software Engineering',
    description:
      'A hotel management web application covering room, booking, and guest administration. Built on the MERN stack with JWT-based authentication, bcrypt password hashing, image upload handling, and transactional email notification.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Nodemailer',
    ],
    github: 'https://github.com/nomanxrafique/Hotlify',
    demo: null,
  },
  {
    name: 'Event Management System',
    category: 'Web Development',
    description:
      'An event management platform for arranging events and delivering services to clients. Built on Express and MongoDB with JWT-based authentication, bcrypt credential hashing, and integrated payment processing.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcryptjs',
      'Stripe',
    ],
    github: 'https://github.com/nomanxrafique/Event_Management_System',
    demo: null,
  },
  {
    name: 'Bus Ticketing Service',
    category: 'Web Development',
    description:
      'A bus ticket booking service built as a separated client and server application. Implements token-based authentication, hashed password storage, payment processing, and email confirmation of bookings.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcryptjs',
      'Stripe',
      'Nodemailer',
    ],
    github: 'https://github.com/nomanxrafique/Bus_tickeing_service',
    demo: null,
  },
  {
    name: 'E-Commerce Website',
    category: 'Web Development',
    description:
      'A MERN-stack online store where customers place and track orders and administrators manage the store, inventory, and order fulfilment, with available actions governed by assigned permissions.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/nomanxrafique/E-Commece_website',
    demo: null,
  },
];

/* -------------------------------------------------------------------------
 * 12. PROFESSIONAL / ENGINEERING EXPERIENCE
 * ---------------------------------------------------------------------- */

export type ExperienceEntry = {
  role: string;
  organisation: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'MERN Stack Developer',
    organisation: 'Devmind',
    location: 'Peshawar, Pakistan',
    period: 'Sep 2025 — Jul 2026',
    points: [
      'Designed, developed, and deployed three full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      'Optimised database queries, indexing, and caching, achieving a 20% improvement in backend response performance.',
      'Built responsive user interfaces with React and Next.js using component-based architecture.',
    ],
  },
];

/* -------------------------------------------------------------------------
 * 13. CERTIFICATIONS
 *
 *  Only add a credential ID or verification URL if you actually have one.
 * ---------------------------------------------------------------------- */

export type Certification = {
  name: string;
  issuer: string;
  date: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
  featured?: boolean;
  description?: string;
};

export const certifications: Certification[] = [
  {
    name: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '31 May 2024',
    credentialId: 'd3bcb5b8-0687-427e-a8b8-fc9d045637b2',
    credentialUrl: null,
    featured: true,
    description:
      'Security operations fundamentals: network security monitoring, intrusion analysis, threat investigation, and incident response workflows.',
  },
  {
    name: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    date: null,
    credentialId: null,
    credentialUrl: null,
    description: 'Computer hardware, operating systems, networking fundamentals, and troubleshooting.',
  },
  {
    name: 'Advanced Web Development',
    issuer: 'NAVTTC (National Vocational & Technical Training Commission)',
    date: null,
    credentialId: null,
    credentialUrl: null,
    description: 'Full-stack web application development.',
  },
];

/**
 * Self-directed study — subjects learned independently, with no issuing body
 * and no credential attached.
 *
 * These are kept deliberately separate from `certifications` above. Listing
 * uncertified study among certifications invites an admissions committee to
 * ask for a credential that does not exist; presenting it honestly as
 * independent learning costs nothing and stands up to any question.
 *
 * Set to an empty array to remove the block entirely.
 */
export const selfStudy = [
  {
    topic: 'Frontend Web Development with React',
    detail: 'React fundamentals, Hooks, and Redux state management.',
  },
  {
    topic: 'Agile Development and Scrum',
    detail: 'Agile methodology and Scrum practice for software teams.',
  },
] as const;

/* -------------------------------------------------------------------------
 * 14. MASTER'S RESEARCH GOALS
 * ---------------------------------------------------------------------- */

export const researchGoals = [
  {
    number: '01',
    stage: 'Foundation',
    summary:
      'Build rigorous grounding in the core of the field before specialising.',
    items: [
      'Cybersecurity',
      'Network Security',
      'Cryptography',
      'Systems Security',
      'Privacy',
      'Secure Computing',
    ],
  },
  {
    number: '02',
    stage: 'Specialisation',
    summary:
      'Move into the areas where my interests concentrate, guided by coursework and supervision.',
    items: [
      'AI Security',
      'Cloud Security',
      'Blockchain Security',
      'Secure Machine Learning',
      'Privacy-Preserving Technologies',
    ],
  },
  {
    number: '03',
    stage: 'Research',
    summary:
      'Develop the methodological skill to define, execute, and communicate original research.',
    items: [
      'Secure AI systems',
      'Privacy-preserving technologies',
      'Cloud security',
      'Blockchain security',
      'Emerging cybersecurity challenges',
    ],
  },
] as const;

/* -------------------------------------------------------------------------
 * 15. ACADEMIC REFERENCES
 *
 *  Names and titles only. Contact details are deliberately not published —
 *  publishing a professor's email address without consent is poor practice,
 *  and admissions committees expect "available on request".
 * ---------------------------------------------------------------------- */

export const references = [
  {
    name: 'Dr. Awais Adnan',
    title: 'Professor, School of Computer Science',
    institution: 'Institute of Management Sciences, Peshawar',
  },
  {
    name: 'Dr. Ahmed Hassan Afridi',
    title: 'Assistant Professor, School of Computer Science',
    institution: 'Institute of Management Sciences, Peshawar',
  },
] as const;

/* -------------------------------------------------------------------------
 * 16. NAVIGATION
 * ---------------------------------------------------------------------- */

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#cv', label: 'CV' },
  { href: '#contact', label: 'Contact' },
] as const;

/* -------------------------------------------------------------------------
 * 17. SEO
 * ---------------------------------------------------------------------- */

export const seo = {
  title: 'Muhammad Nauman Rafique | Cybersecurity Graduate Applicant',
  description:
    'Academic portfolio of Muhammad Nauman Rafique, BS Software Engineering graduate from Pakistan preparing for Master’s study in Cybersecurity and Cyberspace Security, with interests in AI Security, Cloud Security, Blockchain Security, Privacy, and Applied Cryptography.',
  keywords: [
    'Cybersecurity',
    'Cyberspace Security',
    'AI Security',
    'Cloud Security',
    'Blockchain Security',
    'Applied Cryptography',
    'Secure Machine Learning',
    'Master’s applicant',
    'Software Engineering',
    'Muhammad Nauman Rafique',
  ],
  /** Set this to your deployed URL after the first deployment. */
  siteUrl: 'https://example.vercel.app',
} as const;

export const portfolio = {
  profile,
  contact,
  cv,
  about,
  researchInterests,
  researchDirection,
  skillGroups,
  education,
  coursework,
  finalYearProject,
  projects,
  experience,
  certifications,
  selfStudy,
  researchGoals,
  references,
  navLinks,
  seo,
};

export default portfolio;
