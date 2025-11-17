export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      approach: 'Approach',
      work: 'Work',
      blog: 'Blog',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      title: 'AI Architect • Visionary Builder',
      name: 'Pablo Schaffner',
      headline: 'Architecting AI systems for complex, ambitious problems',
      subheadline: 'End-to-end builder. Custom IDE creator. 100M+ users served. Where vision meets technical mastery.',
      ctaPrimary: "Let's Build Something Bold",
      ctaSecondary: 'View Projects',
      stat1Value: 'Custom IDE',
      stat1Label: 'FROM SCRATCH',
      stat2Value: '100M+',
      stat2Label: 'USERS AT SCALE',
      stat3Value: '20+ Years',
      stat3Label: 'IN PRODUCTION',
    },
    
    // Trusted By Section
    trustedBy: {
      title: 'Trusted by Fortune 500s and startups',
    },
    
    // Key Pillars Section
    pillars: {
      badge: 'WHAT I DO',
      title: 'How I Create Value',
      aiSystems: {
        title: 'AI Pioneer',
        description: 'Production AI since 2021—before the LLM wave. Built AI coding assistant years before it became mainstream. From autonomous healthcare systems to multi-agent pipelines, I build what others will use tomorrow. Consistently ahead of the curve.',
      },
      fullStack: {
        title: 'Visionary Architect',
        description: 'From ambitious idea to production reality—full ownership of complex, multi-layered systems. End-to-end from system architecture to user experience, infrastructure to business impact.',
      },
      scale: {
        title: 'Proven at Scale',
        description: 'Led architecture for systems serving 100M+ users at $14.3B company. Technical reference for 300+ engineers. Mission-critical healthcare systems. Terabyte-scale data processing. Where massive scale meets innovative leadership.',
      },
      leadership: {
        title: 'Technical Leader',
        description: 'Shaping product vision with founders, scaling with enterprises, mentoring teams to excellence. 13 years as founding CEO. Leading through clarity and innovation.',
      },
    },
    
    // Track Record Section
    trackRecord: {
      badge: 'TRACK RECORD',
      title: 'Building What Doesn\'t Exist Yet',
      summary: 'From architecting custom IDE before low-code was mainstream, to scaling AI systems for 100M+ users. Visionary thinking meets production mastery.',
      highlights: [
        'Built custom IDE from scratch—used for 100+ apps',
        'Software Expert at MercadoLibre—1 of ~20 company-wide',
        'Led tech leads across 3 major areas (300+ engineers each)',
        'Architected systems for 100M+ users, 1M+ concurrent',
        '13 years as Founding CEO at Creador S.A.',
        'Autonomous healthcare AI with HIPAA compliance',
        'Novel RAG architectures for document fidelity',
        'Co-founder & CTO at Trabajando.com (acquired by El Mercurio)',
      ],
    },
    
    // Experience Section
    experience: {
      badge: 'EXPERIENCE',
      title: "Where I've Built",
      consulting: {
        company: 'Punto Origen',
        period: '2024-PRESENT',
        role: 'AI Consulting Specialist',
        description: 'Healthcare EMR migration, insurance document translation (150 pages in 3 min), AI sales prospecting, enterprise AI implementations.',
      },
      mercadolibre: {
        company: 'MercadoLibre',
        period: '2023-2024',
        role: 'Software Expert',
        description: 'One of ~20 Software Experts company-wide. Technical reference across 3 major areas (MercadoPlay, Demand, OwnChannels)—leading tech leads for 300+ engineers per area. Led architecture for MercadoPlay streaming (100M+ users, 1M+ concurrent, 18 countries).',
      },
      docnexus: {
        company: 'DocNexus Inc.',
        period: '2022-2023',
        role: 'Principal Software Engineer',
        description: 'Physician search engine with Neo4j graph database. Terabyte-scale data extraction. ReactJS dashboards with Storybook UI kit.',
      },
      truepill: {
        company: 'Truepill.com Inc.',
        period: '2021-2022',
        role: 'Senior Software Engineer & Tech Lead',
        description: 'Led team of 7 engineers. Telehealth platform with video consultations (Twilio). Backend migration Next.js → NestJS. Promoted to Tech Lead in 1 month.',
      },
      vpublicidad: {
        company: 'V+ Publicidad SpA',
        period: '2019-2021',
        role: 'Principal Engineer & Tech Lead',
        description: 'D-OOH advertising platform. AWS infrastructure design. VueJS/Nuxt web panel. Android IoT integration. React Native mobile app.',
      },
      creador: {
        company: 'Creador S.A.',
        period: '2007-2020',
        role: 'Founding Engineer & CEO',
        description: 'Built custom IDE from scratch. Powered 100+ mobile applications. 13 years leading company serving major Latin American businesses.',
      },
      trabajando: {
        company: 'Trabajando.com',
        period: '2002-2004',
        role: 'CTO & Board Member',
        description: 'Complete website remake (ASP → ColdFusion + Java). Company acquired by El Mercurio. Co-founders became Endeavor Entrepreneurs.',
      },
      celmedia: {
        company: 'Celmedia S.A.',
        period: '2004-2007',
        role: 'Lead Engineer → Head of Engineering',
        description: 'Raised WAP traffic by 18,000%. Backend for 120M+ requests/month (Movistar Chat). Clients: TVN, Mega, Discovery Networks.',
      },
    },
    
    // Projects Section (formerly Case Studies)
    projects: {
      badge: 'PROJECTS & VENTURES',
      title: 'What I Have Built',
      subtitle: 'Production systems that solve real problems.',
      okidoki: {
        featuredBadge: 'FEATURED PROJECT',
        title: 'Okidoki.chat',
        subtitle: 'Production-Ready in 3 Weeks. Still Evolving.',
        viewLive: 'View Live',
        tryItTitle: 'Try It Live',
        tryItText: 'This website uses Okidoki.chat—click the chat widget in the bottom right corner to experience it yourself!',
        challengeTitle: 'The Goal',
        challengeText: 'Build an AI sales automation platform with voice/video, lead management, and automated RAG—then deploy it to production with paying customers. Keep iterating based on real feedback.',
        timelineTitle: 'The Timeline',
        day3: 'Day 3',
        day3Text: 'First version live with real users testing',
        week2: 'Week 2',
        week2Text: 'Voice, video, transcription—based on feedback',
        week3: 'Week 3',
        week3Text: 'Production deployment with enterprise features',
        deliveredTitle: 'Production Features (Week 3)',
        features: [
          'Voice + video meeting engine',
          'Real-time transcription & AI summarization',
          'Intelligent lead profiling & scoring',
          'Automated RAG pipeline (cron-based)',
          'PDF & website content scraping',
          'Customizable bot personalities',
          'Dynamic landing page generation',
          'Production deployment & monitoring',
        ],
        techStackTitle: 'Tech Stack',
        techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Vercel AI SDK', 'Pinecone', 'WebRTC', 'PostgreSQL', 'Vercel'],
      },
      mercadolibre: {
        title: 'MercadoLibre MercadoPlay',
        subtitle: '100M+ Users, 18 Countries',
        description: 'ML classifiers for strategic ad placement in streaming platform. High-performance dynamic menus serving millions of concurrent users.',
      },
      healthcare: {
        title: 'Healthcare EMR Migration',
        subtitle: 'HIPAA-Compliant AI Tool',
        description: 'Autonomous CLI processing 100+ page medical records. Handles PDFs, XML, CCDA across any EMR system with complete audit trails.',
      },
      insurance: {
        title: 'Insurance Translation',
        subtitle: '150-Page Docs in <3min',
        description: 'Document translation with formatting preservation and PII handling. Enterprise precision at startup speed.',
      },
      ide: {
        title: 'Custom IDE',
        subtitle: 'Built 100+ Apps',
        description: 'Complete development environment from scratch. Mindmap-based visual programming generating production Node.js + React code.',
      },
    },
    
    // FenixBlack Section
    fenixblack: {
      title: 'FenixBlack.ai',
      intro: "What if an entire marketing agency could be replaced by intelligent software? That's what FenixBlack explores.",
      description1: "Built a complete AI marketing platform with interactive video avatars, autonomous brand designer, and research agents.",
      description2: "Used",
      pythonNicegui: "Python + NiceGUI",
      description3: ", then engineered a custom React bridge to bring the full power of React components into Python—because the problem demanded it.",
      description4: "Then built 6 specialized satellite apps: holiday video generators, brand kit creators, virtual backgrounds, AI drawing tools, photo restoration. Each solving specific creative challenges at scale.",
      description5: "Seven production apps in 4 months, built in parallel with client work. Now serving real customers.",
      mainPlatform: 'SAAS PLATFORM',
      mainTitle: 'FenixBlack.ai',
      mainSubtitle: 'AI marketing agency as a service',
      feature1: 'Interactive video avatars',
      feature2: 'AI brand designer',
      feature3: 'Research agent',
      visit: 'Visit',
      holidays: {
        name: 'Holidays',
        description: 'Holiday video generator for any brand',
      },
      brand: {
        name: 'Brand',
        description: 'Complete brand kit generator',
      },
      backgrounds: {
        name: 'Backgrounds',
        description: 'Virtual backgrounds for meetings',
      },
      canvas: {
        name: 'Canvas',
        description: 'AI hand-drawing & animation tool',
      },
      restore: {
        name: 'Restore',
        description: 'Photo restoration & animation',
      },
      growth: {
        name: 'Growth',
        description: 'Credit management system',
      },
      launchApp: 'Launch App',
      stats: {
        apps: 'Apps Total',
        months: 'Months Development',
        parallel: 'Parallel Execution',
      },
      techNote1: 'Main Platform:',
      techNote2: 'Micro-Apps:',
    },
    mercadolibre: {
      title: 'MercadoLibre',
      subtitle: 'Leading Tech Leads Across 3 Major Areas',
      badge: 'SOFTWARE EXPERT',
      description: 'One of ~20 Software Experts company-wide. Technical reference across 3 major areas (MercadoPlay, Demand, OwnChannels)—leading tech leads for 300+ engineers per area. Led architecture for MercadoPlay streaming platform (100M+ users, 1M+ concurrent, 18 countries).',
      features: [
        'Elite Software Expert—1 of ~20 across entire company',
        'Technical reference across 3 major areas (MercadoPlay, Demand, OwnChannels)',
        'Led tech leads managing 300+ engineers per area',
        'Directed ML classifier design for video content analysis',
        'Architected high-performance systems for massive scale',
      ],
      techStack: 'Tech Stack:',
    },
    docnexus: {
      title: 'DocNexus',
      subtitle: 'Physician Search Engine',
      badge: 'HEALTHTECH',
      description: 'Built physician search engine powered by prescription data relationships. Extracted terabyte-scale XML datasets from US government sources into Neo4j graph database for real-time search.',
      features: [
        'Efficient XML extraction for terabyte-scale government datasets',
        'Neo4j graph database pipeline with daily updates',
        'Optimized Cypher queries for sub-second search performance',
        'ReactJS dashboards with Storybook UI kit',
        'FastAPI backend + PostgreSQL storage',
        'CLI tool for physician network analysis reports',
      ],
      techStack: 'Tech Stack:',
    },
    healthcareEmr: {
      title: 'Healthcare EMR Migration',
      subtitle: 'Autonomous Patient Data Import',
      badge: 'HEALTHCARE AI',
      description: 'CLI tool for autonomous migration of patient medical records from any EMR system into SaaS healthcare platform. Handles 100+ page documents across multiple formats with HIPAA compliance.',
      features: [
        'Autonomous CLI tool built with Node.js',
        'Handles PDFs, XML, CCDA, JSON, DOCX (100+ pages per patient)',
        'Migrates from any EMR system to target SaaS platform',
        'Parallel processing for multiple patient records',
        'HIPAA-compliant with complete audit trails',
        'Zero data loss with validation and error recovery',
      ],
      techStack: 'Tech Stack:',
    },
    insurance: {
      title: 'Insurance Docs',
      subtitle: '150-Page Translation in 3 Minutes',
      badge: 'HIGH-SPEED AI',
      description: 'Built AI system for high-speed document translation with perfect formatting fidelity. Maintains complex layouts, tables, and legal terminology.',
      features: [
        '150-200 page documents translated in < 3 minutes',
        'Formatting preservation across complex layouts',
        'Secure PII detection and handling',
        'Multi-LLM orchestration with custom load balancing',
        'GDPR-compliant data processing',
        'Perfect terminology preservation',
      ],
      techStack: 'Tech Stack:',
    },
    concepto: {
      title: 'Concepto DSL',
      subtitle: 'Mindmap-Based Low-Code IDE',
      badge: 'CUSTOM TOOLING',
      description: 'Built complete IDE from scratch in Java/Eclipse with mindmap-based visual programming. Powers 100+ mobile applications with automatic code generation for Node.js backends and React/Vue frontends.',
      features: [
        'Custom IDE built in Java within Eclipse IDE',
        'Mindmap-based low-code visual programming environment',
        'Automatic code generation: Node.js backends + React/Vue frontends',
        'Drag-drop nodes with AI-powered autocomplete based on context',
        '1000x faster compilation than previous version',
        'Powered 100+ production mobile applications',
      ],
      techStack: 'Tech Stack:',
    },
    okidoki: {
      title: 'Okidoki.chat',
      subtitle: 'Enterprise AI Chat Widget',
      badge: 'PRODUCTION SAAS',
      description: 'Enterprise AI chat widget with RAG pipelines, voice mode (Gemini Live), video calls, and meeting transcription. Sub-200ms response times from brand data. Built and deployed in 3 weeks, now serving paying customers.',
      features: [
        'RAG pipelines with sub-200ms response times',
        'Voice mode powered by Gemini Live',
        'Video calls with Daily.co integration',
        'Real-time meeting transcription with AssemblyAI',
        'Automated website content scraping and indexing',
        'Dynamic landing page generation for brands',
      ],
      techStack: 'Tech Stack:',
    },
    vplus: {
      title: 'V+ Publicidad',
      subtitle: 'D-OOH Advertising Platform with IoT',
      badge: 'FOUNDER & CTO',
      description: 'Founded and built complete D-OOH advertising technology platform. Drivers earn revenue by displaying ads on rear-window IoT devices. Real-time ad serving at scale with AWS infrastructure.',
      features: [
        'Founded company and built entire platform from scratch',
        'Android IoT devices for rear-window displays (Python, C, Java)',
        'Real-time ad serving under high load',
        'Vue.js/Nuxt web panel for ad agencies',
        'React Native mobile app for drivers',
        'AWS infrastructure (Elastic Beanstalk, Lambda, DynamoDB, AuroraDB)',
      ],
      techStack: 'Tech Stack:',
    },
    keyFeatures: 'Key Features:',
    techStack: 'Tech Stack:',
    viewProject: 'View Project',
    featured: 'FEATURED',
    viewing: 'Viewing',
    
    // Open Source Section
    opensource: {
      badge: 'OPEN SOURCE',
      title: 'Tools & Libraries',
      subtitle: 'Building tools for the developer community.',
      viewAllPyPI: 'View all on PyPI',
      viewAllNPM: 'View all on npm',
      readArticle: 'Read Article',
      pypiLink: 'https://pypi.org/user/puntorigen/',
      npmLink: 'https://www.npmjs.com/~pabloschaffner',
      brainProxy: {
        title: 'brain-proxy',
        description: 'OpenAI-compatible FastAPI router with unlimited dynamic memory. Integrates Chroma and LangMem for RAG, streaming, and multi-tenant file uploads.',
        tech: ['Python', 'FastAPI', 'Chroma', 'LangChain', 'OpenAI API'],
        link: 'https://pypi.org/project/brain-proxy/',
        article: 'https://www.linkedin.com/pulse/your-ai-backend-just-got-brain-speaks-any-model-schaffner-bofill-dmhle/',
      },
      asyncPromptic: {
        title: 'Async-Promptic',
        description: 'Python library making LLM calls feel like function decorators. Provider-agnostic via LiteLLM with Pydantic models for typed outputs.',
        tech: ['Python', 'LiteLLM', 'Pydantic', 'OpenAI', 'Anthropic'],
        link: 'https://pypi.org/project/async-promptic/',
        article: 'https://www.linkedin.com/pulse/day-i-stopped-fighting-my-llm-framework-started-schaffner-bofill-ikewe/',
      },
      gptResearch: {
        title: 'GPT-Research',
        description: 'Autonomous research agent that gathers information from multiple sources and synthesizes structured reports with verifiable citations.',
        tech: ['TypeScript', 'OpenAI', 'Anthropic', 'Groq', 'Google AI'],
        link: 'https://github.com/puntorigen/gpt-research',
      },
      aiCode: {
        title: 'AI Code',
        description: 'CLI coding assistant built years before Claude Code. Uses current folder context to generate code, execute commands, and find issues.',
        tech: ['Python', 'CLI', 'OpenAI', 'Ollama'],
        link: 'https://github.com/puntorigen/aicode',
      },
      prRules: {
        title: 'PR Rules CI/CD',
        description: 'GitHub Action for AI-powered PR validation. Define rules in natural language markdown—AI validates PRs automatically.',
        tech: ['Node.js', 'GitHub Actions', 'OpenAI', 'Ollama'],
        link: 'https://github.com/puntorigen/pr-rules',
      },
      easyModel: {
        title: 'Async Easy Model',
        description: 'Simplifies asynchronous database operations with SQLModel. Easy-to-use ORM for async databases with FastAPI integration and non-blocking performance.',
        tech: ['Python', 'SQLModel', 'Async', 'FastAPI', 'ORM'],
        link: 'https://pypi.org/project/async-easy-model/',
        article: 'https://www.linkedin.com/pulse/why-async-easy-model-transform-your-python-database-schaffner-bofill-d6dze/',
      },
      niceguiReact: {
        title: 'NiceGUI React',
        description: 'Bridge between Python and React. Integrates ReactJS components into NiceGUI Python apps with real-time interactivity. Featured by NiceGUI CEO and CTO.',
        tech: ['Python', 'React', 'NiceGUI', 'JavaScript', 'Real-time'],
        link: 'https://pypi.org/project/nicegui-react/',
        article: 'https://www.linkedin.com/pulse/integrating-react-components-nicegui-bridging-python-pablo-7dcyf/',
      },
    },
    
    // Mission and Values Section
    mission: {
      badge: 'PHILOSOPHY',
      title: 'Why I Build What I Build',
      imageCaption: 'Where it started – my first Vic20',
      origin: '',
      problem: 'Many teams try to force standard tools into problems that are anything but standard. It works for a while, until the system needs to be reliable, explainable, and ready for real users.',
      whoIHelp: 'I work with founders and leaders who are building ambitious products and facing "there is no template for this" kind of challenges. People who value clarity, long-term thinking, and honest conversations about trade-offs.',
      approach: 'I listen first, then design the smallest system that can carry the whole vision. Clear boundaries, simple mental models, and AI where it truly adds leverage—not just because it is fashionable.',
      focus: 'Less noise, more signal. Systems that stay understandable as they grow. Work that makes the next step easier, not harder, for the people who come after us.',
    },
    
    // How We Can Work Together (formerly Services)
    workTogether: {
      badge: 'WORK WITH ME',
      title: 'How We Can Work Together',
      subtitle: 'From ambitious idea to production reality. From novel architecture to enterprise scale.',
      startups: {
        title: 'For Visionary Founders',
        description: 'Shaping ambitious ideas into reality. From architecture to execution, building what does not fit standard molds.',
        services: [
          'Technical co-founding & architecture',
          'From concept to production system',
          'Novel AI architectures for complex problems',
          'Fractional CTO services',
        ],
      },
      enterprises: {
        title: 'For Complex Challenges',
        description: 'Innovative architectures for problems without standard solutions. Million-user systems requiring custom approaches.',
        services: [
          'Custom AI system architecture',
          'Novel solutions for unprecedented challenges',
          'Production systems at massive scale',
          'Technical leadership & mentoring',
          'HIPAA, SOC2, enterprise compliance',
        ],
      },
      techStack: 'Tech Stack Highlight',
    },
    
    // Blog Page
    blog: {
      badge: 'Technical Blog',
      title: 'Case Studies & Insights',
      subtitle: 'Deep dives into building AI systems, full-stack applications, and lessons learned from 20+ years of software engineering.',
      searchPlaceholder: 'Search articles...',
      loading: 'Loading articles...',
      all: 'All',
      resultsCount: {
        single: 'article',
        plural: 'articles',
        matching: 'matching',
      },
      featured: 'Featured Article',
      noResults: 'No articles found matching your criteria.',
      clearFilters: 'Clear filters',
    },
    
    // Contact Section
    contact: {
      badge: "LET'S BUILD",
      title1: 'Building something bold?',
      title2: 'Let me help shape it into reality.',
      subtitle: 'From ambitious vision to production system. For founders and enterprises ready to innovate.',
      formTitle: 'Send a Message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      successSubtitle: "I'll get back to you within 24 hours.",
      error: 'Please fill in all fields.',
      directContact: 'Direct Contact',
      scheduleCall: 'Schedule a Call',
      scheduleDescription: "Let's discuss your project and see how I can help.",
      bookMeeting: 'Book a meeting',
    },
    
    // Footer
    footer: {
      built: 'Built with ❤️',
      by: 'by Pablo Schaffner',
      version: 'Always improving.',
    },
  },
  
  es: {
    // Navegación
    nav: {
      about: 'Acerca',
      approach: 'Enfoque',
      work: 'Trabajo',
      blog: 'Blog',
      contact: 'Contacto',
    },
    
    // Sección Hero
    hero: {
      title: 'Arquitecto IA • Constructor Visionario',
      name: 'Pablo Schaffner',
      headline: 'Diseño sistemas de IA para problemas complejos y ambiciosos',
      subheadline: 'Constructor de punta a punta. Creador de un IDE personalizado. 100M+ usuarios. Donde la visión se encuentra con la maestría técnica.',
      ctaPrimary: 'Construyamos Algo Audaz',
      ctaSecondary: 'Ver Proyectos',
      stat1Value: 'IDE Propio',
      stat1Label: 'DESDE CERO',
      stat2Value: '100M+',
      stat2Label: 'USUARIOS A ESCALA',
      stat3Value: '20+ Años',
      stat3Label: 'EN PRODUCCIÓN',
    },
    
    // Sección Confianza
    trustedBy: {
      title: 'Han confiado en mí desde Fortune 500 hasta startups',
    },
    
    // Sección Pilares Clave
    pillars: {
      badge: 'LO QUE HAGO',
      title: 'Cómo Creo Valor',
      aiSystems: {
        title: 'Pionero en IA',
        description: 'IA en producción desde 2021—antes de la ola de LLMs. Construí asistentes de código con IA años antes de que se volviera mainstream. Desde sistemas autónomos de salud hasta pipelines multi-agente, construyo lo que otros usarán mañana. Consistentemente adelante de la curva.',
      },
      fullStack: {
        title: 'Visionario Constructor',
        description: 'De la idea ambiciosa a la realidad en producción—propiedad completa de sistemas complejos. De punta a punta: desde la arquitectura hasta la experiencia de usuario, de infraestructura a impacto de negocio.',
      },
      scale: {
        title: 'Probado a Escala',
        description: 'Lideré arquitectura para sistemas de 100M+ usuarios en empresa de $14.3B. Referente técnico para 300+ ingenieros. Sistemas críticos de salud. Procesamiento de datos a escala de terabytes. Donde la escala masiva se encuentra con el liderazgo innovador.',
      },
      leadership: {
        title: 'Líder Técnico',
        description: 'Dando forma a la visión de producto con fundadores, escalando con empresas, mentoreando equipos hacia la excelencia. 13 años como CEO fundador. Liderando con claridad e innovación.',
      },
    },
    
    // Sección Trayectoria
    trackRecord: {
      badge: 'TRAYECTORIA',
      title: 'Construyendo Lo Que Aún No Existe',
      summary: 'Desde crear un IDE personalizado antes del auge del low-code, hasta escalar sistemas de IA para 100M+ usuarios. Donde el pensamiento visionario se encuentra con la maestría en producción.',
      highlights: [
        'Construí un IDE completo desde cero—usado en 100+ apps',
        'Software Expert en MercadoLibre—1 de ~20 en toda la empresa',
        'Lideré tech leads en 3 áreas principales (300+ ingenieros c/u)',
        'Diseñé sistemas para 100M+ usuarios, 1M+ concurrentes',
        '13 años como CEO Fundador en Creador S.A.',
        'IA autónoma para salud con cumplimiento HIPAA',
        'Arquitecturas RAG innovadoras para fidelidad de documentos',
        'Co-fundador y CTO en Trabajando.com (adquirida por El Mercurio)',
      ],
    },
    
    // Sección Experiencia
    experience: {
      badge: 'EXPERIENCIA',
      title: 'Dónde He Construido',
      consulting: {
        company: 'Punto Origen',
        period: '2024-PRESENTE',
        role: 'Especialista en Consultoría IA',
        description: 'Migración de historias clínicas, traducción de documentos de seguros (150 páginas en 3 min), prospección de ventas con IA, implementaciones empresariales.',
      },
      mercadolibre: {
        company: 'MercadoLibre',
        period: '2023-2024',
        role: 'Software Expert',
        description: 'Uno de ~20 Software Experts en toda la empresa. Referente técnico para 3 áreas principales (MercadoPlay, Demand, OwnChannels)—liderando tech leads para 300+ ingenieros por área. Lideré arquitectura para streaming MercadoPlay (100M+ usuarios, 1M+ concurrentes, 18 países).',
      },
      docnexus: {
        company: 'DocNexus Inc.',
        period: '2022-2023',
        role: 'Ingeniero Principal de Software',
        description: 'Motor de búsqueda de médicos con base de datos Neo4j. Extracción de datos a escala de terabytes. Dashboards ReactJS con UI kit Storybook.',
      },
      truepill: {
        company: 'Truepill.com Inc.',
        period: '2021-2022',
        role: 'Ingeniero Senior & Tech Lead',
        description: 'Lideré equipo de 7 ingenieros. Plataforma de telesalud con consultas por video (Twilio). Migración backend Next.js → NestJS. Promovido a Tech Lead en 1 mes.',
      },
      vpublicidad: {
        company: 'V+ Publicidad SpA',
        period: '2019-2021',
        role: 'Ingeniero Principal & Tech Lead',
        description: 'Plataforma publicitaria D-OOH. Diseño infraestructura AWS. Panel web VueJS/Nuxt. Integración IoT Android. App móvil React Native.',
      },
      creador: {
        company: 'Creador S.A.',
        period: '2007-2020',
        role: 'Ingeniero Fundador & CEO',
        description: 'Construí un IDE completo desde cero. Impulsó 100+ aplicaciones móviles. 13 años liderando empresa sirviendo grandes negocios latinoamericanos.',
      },
      trabajando: {
        company: 'Trabajando.com',
        period: '2002-2004',
        role: 'CTO & Miembro del Directorio',
        description: 'Reescritura completa del sitio web (ASP → ColdFusion + Java). Empresa adquirida por El Mercurio. Co-fundadores se convirtieron en Emprendedores Endeavor.',
      },
      celmedia: {
        company: 'Celmedia S.A.',
        period: '2004-2007',
        role: 'Ingeniero Líder → Jefe de Ingeniería',
        description: 'Aumenté tráfico WAP en 18.000%. Backend para 120M+ solicitudes/mes (Movistar Chat). Clientes: TVN, Mega, Discovery Networks.',
      },
    },
    
    // Sección Proyectos
    projects: {
      badge: 'PROYECTOS Y PRODUCTOS',
      title: 'Lo Que He Construido',
      subtitle: 'Sistemas de producción que resuelven problemas reales.',
      okidoki: {
        featuredBadge: 'PROYECTO DESTACADO',
        title: 'Okidoki.chat',
        subtitle: 'En Producción en 3 Semanas. Sigue Evolucionando.',
        viewLive: 'Ver en Vivo',
        tryItTitle: 'Pruébalo en Vivo',
        tryItText: 'Este sitio web usa Okidoki.chat—haz clic en el widget de chat en la esquina inferior derecha para experimentarlo tú mismo!',
        challengeTitle: 'El Objetivo',
        challengeText: 'Construir una plataforma de automatización de ventas con IA—con voz/video, gestión de leads y RAG automatizado—y desplegarla a producción con clientes reales. Seguir iterando basándome en feedback real.',
        timelineTitle: 'La Línea de Tiempo',
        day3: 'Día 3',
        day3Text: 'Primera versión en vivo con usuarios reales probando',
        week2: 'Semana 2',
        week2Text: 'Voz, video, transcripción—basado en feedback',
        week3: 'Semana 3',
        week3Text: 'Despliegue a producción con funciones empresariales',
        deliveredTitle: 'Funciones en Producción (Semana 3)',
        features: [
          'Motor de reuniones de voz + video',
          'Transcripción en tiempo real y resúmenes IA',
          'Perfilado inteligente y scoring de leads',
          'Pipeline RAG automatizado (basado en cron)',
          'Extracción de contenido PDF y sitios web',
          'Personalidades de bot personalizables',
          'Generación dinámica de landing pages',
          'Despliegue y monitoreo en producción',
        ],
        techStackTitle: 'Stack Tecnológico',
        techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Vercel AI SDK', 'Pinecone', 'WebRTC', 'PostgreSQL', 'Vercel'],
      },
      mercadolibre: {
        title: 'MercadoLibre MercadoPlay',
        subtitle: '100M+ Usuarios, 18 Países',
        description: 'Inteligencia artificial que decide dónde mostrar publicidad en video. Menús que funcionan para millones de personas al mismo tiempo.',
      },
      healthcare: {
        title: 'Migración de Historias Clínicas',
        subtitle: 'Cumplimiento HIPAA Garantizado',
        description: 'Herramienta autónoma que lee historiales médicos de 100+ páginas en cualquier formato. Con todas las trazas de auditoría que exige la salud.',
      },
      insurance: {
        title: 'Traducción para Seguros',
        subtitle: 'Documentos de 150 Páginas en Menos de 3 Minutos',
        description: 'Traducciones que mantienen el formato exacto y protegen información sensible. Precisión de empresa grande con velocidad de startup.',
      },
      ide: {
        title: 'Mi Propio Entorno de Desarrollo',
        subtitle: 'Creó Más de 100 Aplicaciones',
        description: 'Un IDE completo hecho desde cero. Programación visual que genera código Node.js + React listo para producción.',
      },
    },
    
    // Sección FenixBlack
    fenixblack: {
      title: 'FenixBlack.ai',
      intro: "¿Qué pasaría si una agencia completa de marketing pudiera ser reemplazada por software inteligente? Eso es lo que explora FenixBlack.",
      description1: "Construí una plataforma completa de marketing con IA con avatares de video interactivos, diseñador de marca autónomo y agentes de investigación.",
      description2: "Usé",
      pythonNicegui: "Python + NiceGUI",
      description3: ", después desarrollé un puente personalizado a React para llevar toda la potencia de componentes React a Python—porque el problema lo exigía.",
      description4: "Luego construí 6 apps satélite especializadas: generadores de video para fechas especiales, creadores de kits de marca, fondos virtuales, herramientas de dibujo con IA, restauración de fotos. Cada una resolviendo desafíos creativos específicos a escala.",
      description5: "Siete apps en producción en 4 meses, construidas en paralelo con trabajo de clientes. Ahora sirviendo clientes reales.",
      mainPlatform: 'PLATAFORMA SAAS',
      mainTitle: 'FenixBlack.ai',
      mainSubtitle: 'Agencia de marketing con IA como servicio',
      feature1: 'Avatares interactivos en video',
      feature2: 'Diseñador de marca inteligente',
      feature3: 'Agente de investigación autónomo',
      visit: 'Conocer',
      holidays: {
        name: 'Fechas Especiales',
        description: 'Crea videos para cualquier celebración de tu marca',
      },
      brand: {
        name: 'Identidad',
        description: 'Kit completo de marca generado con IA',
      },
      backgrounds: {
        name: 'Fondos',
        description: 'Fondos virtuales consistentes con tu marca',
      },
      canvas: {
        name: 'Lienzo',
        description: 'Dibuja y anima con inteligencia artificial',
      },
      restore: {
        name: 'Restaurar',
        description: 'Da vida a fotos antiguas con IA',
      },
      growth: {
        name: 'Crecimiento',
        description: 'Gestión inteligente de créditos',
      },
      launchApp: 'Abrir',
      stats: {
        apps: 'Apps Creadas',
        months: 'Meses',
        parallel: 'Ejecución Paralela',
      },
      techNote1: 'Plataforma:',
      techNote2: 'Apps:',
    },
    mercadolibre: {
      title: 'MercadoLibre',
      subtitle: 'Liderando Tech Leads en 3 Áreas Principales',
      badge: 'SOFTWARE EXPERT',
      description: 'Uno de ~20 Software Experts en toda la empresa. Referente técnico para 3 áreas principales (MercadoPlay, Demand, OwnChannels)—liderando tech leads para 300+ ingenieros por área. Lideré arquitectura para plataforma de streaming MercadoPlay (100M+ usuarios, 1M+ concurrentes, 18 países).',
      features: [
        'Software Expert de élite—1 de ~20 en toda la empresa',
        'Referente técnico para 3 áreas principales (MercadoPlay, Demand, OwnChannels)',
        'Lideré tech leads gestionando 300+ ingenieros por área',
        'Dirigí diseño de clasificadores ML para análisis de contenido de video',
        'Diseñé sistemas de alto rendimiento para escala masiva',
      ],
      techStack: 'Stack Tecnológico:',
    },
    docnexus: {
      title: 'DocNexus',
      subtitle: 'Buscador de Médicos',
      badge: 'SALUD TECH',
      description: 'Construí buscador de médicos impulsado por relaciones de datos de prescripciones. Extraje datasets XML a escala de terabytes de fuentes gubernamentales de EE.UU. hacia base de datos Neo4j para búsqueda en tiempo real.',
      features: [
        'Extracción eficiente de XML para datasets gubernamentales a escala de terabytes',
        'Pipeline de base de datos Neo4j con actualizaciones diarias',
        'Consultas Cypher optimizadas para búsqueda en subsegundos',
        'Dashboards ReactJS con kit UI Storybook',
        'Backend FastAPI + almacenamiento PostgreSQL',
        'Herramienta CLI para reportes de red de médicos',
      ],
      techStack: 'Stack Tecnológico:',
    },
    healthcareEmr: {
      title: 'Migración EMR',
      subtitle: 'Importación Autónoma de Datos de Pacientes',
      badge: 'IA PARA SALUD',
      description: 'Herramienta CLI para migración autónoma de historias clínicas desde cualquier sistema EMR hacia plataforma SaaS de salud. Procesa documentos de 100+ páginas en múltiples formatos con cumplimiento HIPAA.',
      features: [
        'Herramienta CLI autónoma construida con Node.js',
        'Procesa PDFs, XML, CCDA, JSON, DOCX (100+ páginas por paciente)',
        'Migra desde cualquier sistema EMR hacia plataforma SaaS objetivo',
        'Procesamiento paralelo para múltiples historias de pacientes',
        'Cumplimiento HIPAA con trazas de auditoría completas',
        'Cero pérdida de datos con validación y recuperación de errores',
      ],
      techStack: 'Stack Tecnológico:',
    },
    insurance: {
      title: 'Documentos de Seguros',
      subtitle: 'Traducción de 150 Páginas en 3 Minutos',
      badge: 'IA DE ALTA VELOCIDAD',
      description: 'Construí sistema de IA para traducción de documentos de alta velocidad con fidelidad perfecta de formato. Mantiene diseños complejos, tablas y terminología legal.',
      features: [
        'Documentos de 150-200 páginas traducidos en < 3 minutos',
        'Preservación de formato en diseños complejos',
        'Detección y manejo seguro de PII',
        'Orquestación multi-LLM con balanceo de carga personalizado',
        'Procesamiento de datos conforme a GDPR',
        'Preservación perfecta de terminología',
      ],
      techStack: 'Stack Tecnológico:',
    },
    concepto: {
      title: 'Concepto DSL',
      subtitle: 'IDE Low-Code Basado en Mapas Mentales',
      badge: 'HERRAMIENTAS PERSONALIZADAS',
      description: 'Construí IDE completo desde cero en Java/Eclipse con programación visual basada en mapas mentales. Impulsa 100+ aplicaciones móviles con generación automática de código para backends Node.js y frontends React/Vue.',
      features: [
        'IDE personalizado construido en Java dentro de Eclipse IDE',
        'Entorno de programación visual low-code basado en mapas mentales',
        'Generación automática de código: backends Node.js + frontends React/Vue',
        'Nodos drag-drop con autocompletado IA basado en contexto',
        'Compilación 1000x más rápida que versión anterior',
        'Impulsó 100+ aplicaciones móviles en producción',
      ],
      techStack: 'Stack Tecnológico:',
    },
    okidoki: {
      title: 'Okidoki.chat',
      subtitle: 'Widget de Chat IA Empresarial',
      badge: 'SAAS EN PRODUCCIÓN',
      description: 'Widget de chat IA empresarial con pipelines RAG, modo de voz (Gemini Live), videollamadas y transcripción de reuniones. Respuestas en menos de 200ms desde datos de marca. Construido y desplegado en 3 semanas, ahora sirviendo clientes pagos.',
      features: [
        'Pipelines RAG con respuestas en menos de 200ms',
        'Modo de voz impulsado por Gemini Live',
        'Videollamadas con integración Daily.co',
        'Transcripción de reuniones en tiempo real con AssemblyAI',
        'Extracción automática de contenido web e indexación',
        'Generación dinámica de landing pages para marcas',
      ],
      techStack: 'Stack Tecnológico:',
    },
    vplus: {
      title: 'V+ Publicidad',
      subtitle: 'Plataforma D-OOH con IoT',
      badge: 'FUNDADOR & CTO',
      description: 'Fundé y construí plataforma completa de tecnología publicitaria D-OOH. Conductores ganan ingresos mostrando anuncios en dispositivos IoT en ventanas traseras. Servicio de anuncios en tiempo real a escala con infraestructura AWS.',
      features: [
        'Fundé empresa y construí plataforma completa desde cero',
        'Dispositivos IoT Android para pantallas en ventanas traseras (Python, C, Java)',
        'Servicio de anuncios en tiempo real bajo alta carga',
        'Panel web Vue.js/Nuxt para agencias de publicidad',
        'App móvil React Native para conductores',
        'Infraestructura AWS (Elastic Beanstalk, Lambda, DynamoDB, AuroraDB)',
      ],
      techStack: 'Stack Tecnológico:',
    },
    keyFeatures: 'Características Clave:',
    techStack: 'Stack Tecnológico:',
    viewProject: 'Ver Proyecto',
    featured: 'DESTACADO',
    viewing: 'Viendo',
    
    // Sección Open Source
    opensource: {
      badge: 'CÓDIGO ABIERTO',
      title: 'Herramientas y Librerías',
      subtitle: 'Construyendo herramientas para la comunidad de desarrolladores.',
      viewAllPyPI: 'Ver todos en PyPI',
      viewAllNPM: 'Ver todos en npm',
      readArticle: 'Leer Artículo',
      pypiLink: 'https://pypi.org/user/puntorigen/',
      npmLink: 'https://www.npmjs.com/~pabloschaffner',
      brainProxy: {
        title: 'brain-proxy',
        description: 'Router FastAPI compatible con OpenAI con memoria dinámica ilimitada. Integra Chroma y LangMem para RAG, streaming y carga de archivos multi-tenant.',
        tech: ['Python', 'FastAPI', 'Chroma', 'LangChain', 'OpenAI API'],
        link: 'https://pypi.org/project/brain-proxy/',
        article: 'https://www.linkedin.com/pulse/your-ai-backend-just-got-brain-speaks-any-model-schaffner-bofill-dmhle/',
      },
      asyncPromptic: {
        title: 'Async-Promptic',
        description: 'Librería Python que hace que las llamadas LLM se sientan como decoradores de funciones. Agnóstica de proveedor vía LiteLLM con modelos Pydantic para salidas tipadas.',
        tech: ['Python', 'LiteLLM', 'Pydantic', 'OpenAI', 'Anthropic'],
        link: 'https://pypi.org/project/async-promptic/',
        article: 'https://www.linkedin.com/pulse/day-i-stopped-fighting-my-llm-framework-started-schaffner-bofill-ikewe/',
      },
      gptResearch: {
        title: 'GPT-Research',
        description: 'Agente de investigación autónomo que recopila información de múltiples fuentes y sintetiza reportes estructurados con citas verificables.',
        tech: ['TypeScript', 'OpenAI', 'Anthropic', 'Groq', 'Google AI'],
        link: 'https://github.com/puntorigen/gpt-research',
      },
      aiCode: {
        title: 'AI Code',
        description: 'Asistente de codificación CLI construido años antes que Claude Code. Usa contexto de carpeta actual para generar código, ejecutar comandos y encontrar problemas.',
        tech: ['Python', 'CLI', 'OpenAI', 'Ollama'],
        link: 'https://github.com/puntorigen/aicode',
      },
      prRules: {
        title: 'PR Rules CI/CD',
        description: 'GitHub Action para validación de PRs impulsada por IA. Define reglas en lenguaje natural markdown—IA valida PRs automáticamente.',
        tech: ['Node.js', 'GitHub Actions', 'OpenAI', 'Ollama'],
        link: 'https://github.com/puntorigen/pr-rules',
      },
      easyModel: {
        title: 'Async Easy Model',
        description: 'Simplifica operaciones asíncronas de bases de datos con SQLModel. ORM fácil de usar para bases de datos async con integración FastAPI y rendimiento sin bloqueos.',
        tech: ['Python', 'SQLModel', 'Async', 'FastAPI', 'ORM'],
        link: 'https://pypi.org/project/async-easy-model/',
        article: 'https://www.linkedin.com/pulse/why-async-easy-model-transform-your-python-database-schaffner-bofill-d6dze/',
      },
      niceguiReact: {
        title: 'NiceGUI React',
        description: 'Puente entre Python y React. Integra componentes ReactJS en apps Python NiceGUI con interactividad en tiempo real. Destacado por CEO y CTO de NiceGUI.',
        tech: ['Python', 'React', 'NiceGUI', 'JavaScript', 'Tiempo Real'],
        link: 'https://pypi.org/project/nicegui-react/',
        article: 'https://www.linkedin.com/pulse/integrating-react-components-nicegui-bridging-python-pablo-7dcyf/',
      },
    },
    
    // Sección Misión y Valores
    mission: {
      badge: 'FILOSOFÍA',
      title: 'Por Qué Construyo Lo Que Construyo',
      imageCaption: 'Donde empezó todo – mi primera Vic20',
      origin: '',
      problem: 'Muchos equipos intentan usar herramientas estándar en problemas que no lo son. Funciona hasta que el sistema tiene que ser confiable, explicable y estar listo para usuarios reales.',
      whoIHelp: 'Trabajo con fundadores y líderes que construyen productos ambiciosos y enfrentan desafíos del tipo "no hay plantilla para esto". Personas que valoran la claridad, el pensamiento a largo plazo y las conversaciones honestas sobre las decisiones técnicas.',
      approach: 'Primero escucho. Después diseño el sistema más simple que pueda sostener toda la visión. Límites claros, modelos mentales simples y uso de IA donde realmente aporta fuerza, no solo porque está de moda.',
      focus: 'Menos ruido y más señal. Sistemas que sigan siendo entendibles a medida que crecen. Trabajo que deje el camino más fácil para el siguiente paso y para quienes vengan después.',
    },
    
    // Sección Trabajar Juntos
    workTogether: {
      badge: 'TRABAJA CONMIGO',
      title: 'Cómo Podemos Trabajar Juntos',
      subtitle: 'De la idea ambiciosa a la realidad en producción. De arquitectura innovadora a escala empresarial.',
      startups: {
        title: 'Para Fundadores Visionarios',
        description: 'Dando forma a ideas ambiciosas en realidad. De arquitectura a ejecución, construyendo lo que no encaja en moldes estándar.',
        services: [
          'Co-fundación técnica y arquitectura',
          'Del concepto al sistema en producción',
          'Arquitecturas innovadoras de IA para problemas complejos',
          'Servicios de CTO fraccionado',
        ],
      },
      enterprises: {
        title: 'Para Desafíos Complejos',
        description: 'Arquitecturas innovadoras para problemas sin soluciones estándar. Sistemas de millones de usuarios que requieren enfoques personalizados.',
        services: [
          'Arquitectura personalizada de sistemas IA',
          'Soluciones novedosas para desafíos sin precedentes',
          'Sistemas en producción a escala masiva',
          'Liderazgo técnico y mentoría',
          'Cumplimiento HIPAA, SOC2, empresarial',
        ],
      },
      techStack: 'Herramientas que Domino',
    },
    
    // Página Blog
    blog: {
      badge: 'Blog Técnico',
      title: 'Casos de Estudio & Aprendizajes',
      subtitle: 'Análisis profundos sobre construcción de sistemas de IA, aplicaciones full-stack, y lecciones de 20+ años de ingeniería de software.',
      searchPlaceholder: 'Buscar artículos...',
      loading: 'Cargando artículos...',
      all: 'Todos',
      resultsCount: {
        single: 'artículo',
        plural: 'artículos',
        matching: 'que coinciden con',
      },
      featured: 'Artículo Destacado',
      noResults: 'No se encontraron artículos con esos criterios.',
      clearFilters: 'Limpiar filtros',
    },
    
    // Sección Contacto
    contact: {
      badge: 'CONSTRUYAMOS',
      title1: '¿Construyendo algo audaz?',
      title2: 'Déjame ayudarte a convertirlo en realidad.',
      subtitle: 'De visión ambiciosa a sistema en producción. Para fundadores y empresas listas para innovar.',
      formTitle: 'Conversemos',
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Cuéntame tu proyecto',
      send: 'Enviar',
      sending: 'Enviando...',
      success: '¡Mensaje enviado!',
      successSubtitle: 'Te respondo en 24 horas.',
      error: 'Por favor completa todos los campos.',
      directContact: 'Contacto Directo',
      scheduleCall: 'Agendemos una Llamada',
      scheduleDescription: 'Hablemos de tu proyecto y veamos cómo puedo ayudarte.',
      bookMeeting: 'Agendar reunión',
    },
    
    // Footer
    footer: {
      built: 'Hecho con ❤️',
      by: 'por Pablo Schaffner',
      version: 'Siempre evolucionando.',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

