export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      approach: 'Approach',
      work: 'Work',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      title: 'Staff Engineer • AI Architect',
      name: 'Pablo Schaffner',
      headline: 'I build production AI systems—from scratch to 100M+ users',
      subheadline: 'Full-stack AI development, system architecture, and technical leadership for startups and Fortune 500 companies.',
      ctaPrimary: "Let's Talk",
      ctaSecondary: 'View Projects',
      stat1Value: '100M+',
      stat1Label: 'USERS SERVED',
      stat2Value: '20+',
      stat2Label: 'YEARS BUILDING',
      stat3Value: '3 weeks',
      stat3Label: 'TYPICAL DELIVERY',
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
        title: 'Production AI Systems',
        description: 'Build complete AI platforms from scratch—RAG pipelines, multi-agent systems, voice/video integrations. For startups that need to ship fast and enterprises serving millions.',
      },
      fullStack: {
        title: 'Full-Stack Product Delivery',
        description: 'End-to-end development with Next.js, Python, React. From backend architecture to frontend polish. Ship complete, production-ready systems in weeks, not months.',
      },
      scale: {
        title: 'Scale & Architecture',
        description: 'Systems that handle 100M+ users. ML pipelines for Fortune 500 companies. Enterprise compliance (HIPAA, SOC2). Built MercadoPlay streaming platform across 18 countries.',
      },
      leadership: {
        title: 'Technical Leadership',
        description: 'Led engineering teams as Tech Lead and CTO. 13 years as founding CEO. Fractional CTO services for startups that need strategic technical guidance.',
      },
    },
    
    // Track Record Section
    trackRecord: {
      badge: 'TRACK RECORD',
      title: 'Built for Startups. Proven at Scale.',
      summary: 'From founding companies to scaling systems for 100M+ users. From shipping MVPs in weeks to architecting Fortune 500 infrastructure.',
      highlights: [
        '100M+ users at MercadoLibre ($14.3B company)',
        'Custom IDE powering 100+ mobile apps',
        '13 years as Founding CEO at Creador S.A.',
        'CTO at Trabajando.com (acquired by El Mercurio)',
        'Promoted to Tech Lead in 1 month at Truepill',
        'Healthcare, insurance, fintech, e-commerce',
        'Raised traffic 18,000% at Celmedia',
        'Staff/Principal Engineer level',
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
        role: 'Software Expert & Architect',
        description: 'Built ML systems for 100M+ users. MercadoPlay streaming platform across 18 countries. Referenced expert for 300+ engineers.',
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
      intro: "I wanted to explore what an AI-first marketing agency would look like as a product.",
      description1: "Started with the core platform—interactive video avatars, an AI brand designer, research agents.",
      description2: "Built it with",
      pythonNicegui: "Python + NiceGUI",
      description3: ", then created a custom React bridge because I needed the flexibility of React components inside a Python GUI framework.",
      description4: "Then built 6 specialized tools around it: holiday video generators, brand kit creators, virtual backgrounds, drawing tools, photo restoration. Each one solves a specific creative problem.",
      description5: "Took about 4 months in parallel with client work. Now it's in production.",
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
    
    // Mission and Values Section
    mission: {
      badge: 'MISSION & VALUES',
      title: 'Why I Build What I Build',
      problem: 'Most teams spend 6 months planning what could ship in 3 weeks. They get stuck in complexity that experience would have avoided.',
      whoIHelp: 'I work with startups that need to move fast without breaking things, and enterprises that need AI systems to scale to millions of users.',
      approach: 'Experience means I have already made the mistakes. I know what breaks, what scales, where complexity hides. This is not speed through shortcuts—mastery through 20 years and hundreds of projects.',
      focus: 'Building production-ready AI systems from day one. Complete platforms that work, scale, and solve real business problems.',
    },
    
    // How We Can Work Together (formerly Services)
    workTogether: {
      badge: 'WORK WITH ME',
      title: 'How We Can Work Together',
      subtitle: 'From idea to production. From MVP to enterprise scale.',
      startups: {
        title: 'For Startups',
        description: 'Turn your idea into a working product in weeks. Full-featured systems that scale.',
        services: [
          'MVP to production in weeks',
          'Full-stack AI implementation',
          'Technical architecture & system design',
          'Fractional CTO services',
        ],
      },
      enterprises: {
        title: 'For Enterprises',
        description: 'Scale AI systems to millions of users. Architect solutions that handle Fortune 500 complexity with startup agility.',
        services: [
          'AI/ML system architecture at scale',
          'Production ML pipelines (100M+ users)',
          'Technical due diligence & audits',
          'Team leadership & training',
          'HIPAA, SOC2, enterprise compliance',
        ],
      },
      techStack: 'Tech Stack Highlight',
    },
    
    // Contact Section
    contact: {
      badge: "LET'S BUILD",
      title1: "Your 6-month roadmap?",
      title2: "Let's ship it in 3 weeks.",
      subtitle: 'Complete, production-ready systems from day one.',
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
      built: 'Built with',
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
      contact: 'Contacto',
    },
    
    // Sección Hero
    hero: {
      title: 'Staff Engineer • Arquitecto AI',
      name: 'Pablo Schaffner',
      headline: 'Construyo sistemas de IA para producción—desde cero hasta 100M+ usuarios',
      subheadline: 'Desarrollo full-stack de IA, arquitectura de sistemas y liderazgo técnico para startups y empresas Fortune 500.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Ver Proyectos',
      stat1Value: '100M+',
      stat1Label: 'USUARIOS SERVIDOS',
      stat2Value: '20+',
      stat2Label: 'AÑOS CONSTRUYENDO',
      stat3Value: '3 semanas',
      stat3Label: 'ENTREGA TÍPICA',
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
        title: 'Sistemas de IA para Producción',
        description: 'Construyo plataformas de IA completas desde cero—pipelines RAG, sistemas multi-agente, integraciones de voz/video. Para startups que necesitan entregar rápido y empresas que sirven millones.',
      },
      fullStack: {
        title: 'Entrega de Producto Full-Stack',
        description: 'Desarrollo end-to-end con Next.js, Python, React. Desde arquitectura backend hasta frontend pulido. Entrego sistemas completos y listos para producción en semanas, no meses.',
      },
      scale: {
        title: 'Escala y Arquitectura',
        description: 'Sistemas que manejan 100M+ usuarios. Pipelines ML para empresas Fortune 500. Cumplimiento empresarial (HIPAA, SOC2). Construí plataforma de streaming MercadoPlay en 18 países.',
      },
      leadership: {
        title: 'Liderazgo Técnico',
        description: 'Lideré equipos de ingeniería como Tech Lead y CTO. 13 años como CEO fundador. Servicios de CTO fraccionado para startups que necesitan guía técnica estratégica.',
      },
    },
    
    // Sección Trayectoria
    trackRecord: {
      badge: 'TRAYECTORIA',
      title: 'Construido para Startups. Probado a Escala.',
      summary: 'Desde fundar empresas hasta escalar sistemas para 100M+ usuarios. Desde entregar MVPs en semanas hasta arquitectura Fortune 500.',
      highlights: [
        '100M+ usuarios en MercadoLibre (empresa de $14.3B)',
        'IDE personalizado impulsando 100+ apps móviles',
        '13 años como CEO Fundador en Creador S.A.',
        'CTO en Trabajando.com (adquirida por El Mercurio)',
        'Promovido a Tech Lead en 1 mes en Truepill',
        'Salud, seguros, fintech, e-commerce',
        'Aumenté tráfico 18,000% en Celmedia',
        'Nivel Staff/Principal Engineer',
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
        role: 'Experto en Software & Arquitecto',
        description: 'Sistemas ML para 100M+ usuarios. Plataforma de streaming MercadoPlay en 18 países. Referente técnico para 300+ ingenieros.',
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
      intro: "Quería entender cómo se vería una agencia de marketing impulsada por IA desde su esencia.",
      description1: "Empecé con la plataforma central—avatares de video interactivos, un diseñador de marca con IA, agentes de investigación autónomos.",
      description2: "La construí con",
      pythonNicegui: "Python + NiceGUI",
      description3: ", después creé un puente personalizado a React porque necesitaba la flexibilidad de componentes React dentro de un framework GUI de Python.",
      description4: "Luego construí 6 herramientas especializadas: generadores de video para fechas especiales, creadores de kits de marca, fondos virtuales, herramientas de dibujo, restauración de fotos. Cada una resuelve un problema creativo específico.",
      description5: "Tomó unos 4 meses en paralelo con trabajo de clientes. Ahora está en producción.",
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
    
    // Sección Misión y Valores
    mission: {
      badge: 'MISIÓN Y VALORES',
      title: 'Por Qué Construyo Lo Que Construyo',
      problem: 'La mayoría de equipos gastan 6 meses planeando lo que podría entregarse en 3 semanas. Se atascan en complejidad que la experiencia habría evitado.',
      whoIHelp: 'Trabajo con startups que necesitan moverse rápido sin romper cosas, y empresas que necesitan sistemas de IA que escalen a millones de usuarios.',
      approach: 'La experiencia significa que ya cometí los errores. Sé qué falla, qué escala, dónde se esconde la complejidad. No es velocidad por atajos—es maestría por 20 años y cientos de proyectos.',
      focus: 'Construir sistemas de IA listos para producción desde el día uno. Plataformas completas que funcionan, escalan y resuelven problemas reales de negocio.',
    },
    
    // Sección Trabajar Juntos
    workTogether: {
      badge: 'TRABAJA CONMIGO',
      title: 'Cómo Podemos Trabajar Juntos',
      subtitle: 'De la idea a producción. De MVP a escala empresarial.',
      startups: {
        title: 'Si Tienes una Startup',
        description: 'Tu idea convertida en producto funcional en semanas. Sistemas completos que escalan.',
        services: [
          'De idea a producción en semanas',
          'Implementación completa de IA',
          'Arquitectura técnica desde el inicio',
          'CTO fraccionado cuando lo necesites',
        ],
      },
      enterprises: {
        title: 'Si Lideras una Empresa',
        description: 'Escala sistemas de IA a millones de usuarios. Soluciones que manejan complejidad Fortune 500 con agilidad de startup.',
        services: [
          'Arquitectura de sistemas IA/ML a escala',
          'Pipelines ML en producción (100M+ usuarios)',
          'Auditoría técnica y due diligence',
          'Liderazgo de equipos y capacitación',
          'Cumplimiento HIPAA, SOC2, empresarial',
        ],
      },
      techStack: 'Herramientas que Domino',
    },
    
    // Sección Contacto
    contact: {
      badge: 'CONSTRUYAMOS',
      title1: '¿Ese roadmap de 6 meses?',
      title2: 'Hagámoslo realidad en 3 semanas.',
      subtitle: 'Sistemas completos que van directo a producción.',
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
      built: 'Hecho con',
      by: 'por Pablo Schaffner',
      version: 'Siempre evolucionando.',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

