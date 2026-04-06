// ╔══════════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this section to customize your website  ║
// ╚══════════════════════════════════════════════════════════════════╝

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────────────────────────
  name: 'Venkata Ateet Gogineni',
  initials: 'VA',
  email: 'ateetgogineni@outlook.com',
  phone: '+919618325678',
  phoneDisplay: '+91 9618325678',
  location: 'Hyderabad, India',
  github: 'https://github.com/ateetgogineni',
  githubUsername: 'ateetgogineni',
  // Add more social links here (linkedin, twitter, etc.)
  linkedin: '',   // Add your LinkedIn profile URL
  twitter: '',    // e.g. 'https://twitter.com/yourhandle'

  // ── Hero Section ───────────────────────────────────────────────
  heroGreeting: "Hi, I'm",
  // These titles rotate with a typing animation
  heroTitles: [
    'Software Engineer',
    'React Native Developer',
    'Unity Developer',
    'Mobile App Engineer',
  ],
  heroDescription:
    'Dynamic Application Developer & Mobile App Engineer with 3+ years of experience building scalable, performance-optimized applications and games across Android and iOS.',
  heroCTAPrimary: 'Get In Touch',
  heroCTASecondary: 'View My Work',

  // ── About Section ──────────────────────────────────────────────
  aboutParagraphs: [
    "I'm a <strong>Software Engineer</strong> with 3+ years of experience in <strong>React Native</strong>, <strong>Unity</strong>, and <strong>C#</strong>, delivering cross-platform applications and games.",
    'I focus on building scalable mobile apps, optimizing performance, and creating seamless integrations between React Native and Unity for Android and iOS.',
    'My experience includes feature development, debugging, Firebase and API integrations, and localization systems that improve product accessibility and user engagement.',
    'I enjoy innovation-driven work and collaborative problem-solving in agile teams.',
  ],
  aboutStats: [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 8, suffix: '+', label: 'Major Projects' },
    { value: 2, suffix: '', label: 'Platforms' },
    { value: 1, suffix: '', label: 'Award Won' },
  ],

  // ── Experience Section ─────────────────────────────────────────
  experience: [
    {
      title: 'Software Engineer',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Sep 2025 — Present',
      details: [
        'Collaborated in Unity to build a narrative-based game with immersive storytelling elements.',
        'Used AWS for bundle storage and Google Cloud for data path management to improve gameplay performance.',
        'Leveraged Yarn scripting for dynamic narrative structure implementation.',
        'Developed a text-to-image localization plugin for Android and iOS to expand accessibility.',
      ],
      tags: ['Unity', 'AWS', 'Google Cloud', 'Yarn', 'Localization', 'Android', 'iOS'],
    },
    {
      title: 'Associate Analyst Engineer',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Aug 2022 — Sep 2025',
      details: [
        'Developed cross-platform mobile apps and games using Unity and React Native.',
        'Engineered Unity-React Native bridge solutions to improve app performance and user experience.',
        'Designed gameplay mechanics and optimized applications for scalability on Android and iOS.',
        'Delivered feature development and stability improvements for robust product releases.',
        'Debugged and resolved technical issues to improve performance and user satisfaction.',
        'Integrated Firebase and APIs to enhance functionality and user engagement.',
      ],
      tags: ['React Native', 'Unity', 'Firebase', 'API Integration', 'Performance', 'Agile'],
    },
    {
      title: 'Trainee Software Engineer',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Aug 2022 — Oct 2023',
      details: [
        'Contributed to SDK integrations for Clash using React Native and Unity.',
        'Developed and integrated a multiplayer Rummy game in Unity with server integration.',
        'Implemented Unity-native bridge support for GamePe to enable regional language support.',
        'Worked with cross-functional teams to ensure stable feature integration across platforms.',
      ],
      tags: ['React Native', 'Unity', 'SDK Integration', 'Multiplayer', 'Localization'],
    },
  ],

  // ── Projects Section ───────────────────────────────────────────
  // icon: use any name from the ICONS object below, or 'default'
  projects: [
    {
      title: 'Bigg Boss: The Game',
      description: 'Built advanced narrative gameplay with localization, asset bundle handling, and dialogue audio support for immersive Android and iOS experiences.',
      tags: ['Unity', 'Localization', 'Asset Bundles', 'Audio', 'Android', 'iOS'],
      link: 'https://play.google.com/store/search?q=Bigg+Boss+The+Game',
      linkText: 'View on Play Store',
      icon: 'gamepad',
    },
    {
      title: 'Big Brother: The Game',
      description: 'Implemented gameplay features and bug fixes, integrated Xsolla Web Store, and used Yarn scripting for interactive narrative branching.',
      tags: ['Unity', 'Xsolla', 'Yarn', 'Gameplay', 'Bug Fixes'],
      link: 'https://play.google.com/store/search?q=Big+Brother+The+Game',
      linkText: 'View on Play Store',
      icon: 'lock',
    },
    {
      title: 'Slot Stream',
      description: 'Developed a React Native + Unity WebGL slot platform with dynamic game loading, WebView messaging, and synchronized state handling.',
      tags: ['React Native', 'Unity WebGL', 'WebView', 'AWS', 'Performance'],
      link: 'https://play.google.com/store/search?q=Slot+Stream',
      linkText: 'View on Play Store',
      icon: 'bolt',
    },
    {
      title: 'Blackjack',
      description: 'Built a real-time multiplayer 1 vs N Blackjack game in Unity with complete client-side game logic, UI systems, and server synchronization.',
      tags: ['Unity', 'Multiplayer', 'Realtime Sync', 'Game Logic', 'UI'],
      link: '',
      linkText: '',
      icon: 'chat',
    },
    {
      title: 'GamePe',
      description: 'Worked on Cricket Clash integration, application and chat localization, and custom localization framework to overcome Unity native limitations.',
      tags: ['Unity', 'Localization', 'Platform Integration', 'Performance'],
      link: 'https://play.google.com/store/search?q=GamePe',
      linkText: 'View on Play Store',
      icon: 'phone',
    },
    {
      title: 'Clash - Games & Group Chats',
      description: 'Integrated Unity games into React Native via custom SDK bridge and optimized loading performance and transitions across Android and iOS.',
      tags: ['React Native', 'Unity', 'SDK Bridge', 'Optimization', 'iOS', 'Android'],
      link: 'https://play.google.com/store/search?q=Clash+Games+%26+Group+Chats',
      linkText: 'View on Play Store',
      icon: 'layers',
    },
    {
      title: 'Multiplayer Rummy',
      description: 'Developed and integrated a multiplayer Rummy game in Unity with server connectivity, gameplay systems, and stable cross-platform behavior.',
      tags: ['Unity', 'Multiplayer', 'Server Integration', 'Gameplay', 'Android', 'iOS'],
      link: '',
      linkText: '',
      icon: 'gamepad',
    },
  ],

  // ── Skills Section ─────────────────────────────────────────────
  // icon: use any name from the ICONS object below
  skills: [
    {
      category: 'Programming & Scripting',
      icon: 'code',
      items: ['C#', 'TypeScript', 'JavaScript', 'C++'],
    },
    {
      category: 'Frameworks & Libraries',
      icon: 'phone',
      items: ['React Native', 'React.js', 'Unity3D', 'Unity Engine'],
    },
    {
      category: 'Version Control',
      icon: 'play',
      items: ['Git', 'SourceTree', 'Bitbucket'],
    },
    {
      category: 'Cloud & Platforms',
      icon: 'wrench',
      items: ['AWS', 'Google Console', 'Firebase'],
    },
    {
      category: 'Project Management & Tools',
      icon: 'users',
      items: ['Agile', 'Jira', 'Confluence', 'Yarn', 'MS Office'],
    },
    {
      category: 'AI Tools',
      icon: 'wrench',
      items: ['GitHub Copilot', 'Cursor', 'Bezi', 'Google Gemini'],
    },
  ],

  // ── Education Section ──────────────────────────────────────────
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      school: 'Malla Reddy College of Engineering & Technology',
      location: 'Medak, India',
      year: '2017 — 2021',
      gpa: 'Grade: 7/10',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'FIITJEE Junior College',
      location: 'Hyderabad, India',
      year: 'May 2017',
      gpa: 'GPA: 75%',
    },
  ],

  // ── Certifications ─────────────────────────────────────────────
  certifications: [
    'Spark Award — Received for exceptional ownership and accountability in project delivery.',
  ],

  // ── Contact Section ────────────────────────────────────────────
  contactHeading: 'Get In Touch',
  contactText:
    "I'm open to software engineering opportunities and collaboration on React Native and Unity projects. Feel free to reach out for roles, projects, or technical discussions.",

  // ── Footer ─────────────────────────────────────────────────────
  footerText: '© 2026 Venkata Ateet Gogineni. Built with passion.',
};
