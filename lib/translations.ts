export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      work: 'Work',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      title: 'Staff Engineer • AI Architect • System Designer',
      name: 'Pablo Schaffner',
      headline1: 'Building complete systems in',
      headline2: '3 weeks',
      headline3: 'instead of',
      headline4: '6 months',
      subheadline1: 'Production',
      subheadline1Bold: 'AI systems',
      subheadline2: 'that work from day one.',
      subheadline3: 'Worked with',
      subheadline3Bold: 'MercadoLibre (100M users)',
      subheadline4: ', healthcare startups, insurance companies, and more.',
      ctaPrimary: "Let's Talk",
      ctaSecondary: 'See Projects',
      stat1Value: '100M+',
      stat1Label: 'USERS SERVED',
      stat2Value: '20+',
      stat2Label: 'YEARS BUILDING',
      stat3Value: '3',
      stat3Label: 'WEEKS TYPICAL',
    },
    
    // Trusted By Section
    trustedBy: {
      title: 'Trusted by Fortune 500s and startups',
    },
    
    // About Section
    about: {
      badge: 'PHILOSOPHY',
      title: "20 Years Building. Still Learning.",
      intro: "After two decades—from custom IDEs that ran 100+ apps, to ML systems at",
      introHighlight: "MercadoLibre serving 100M users",
      introEnd: "—here's what I've learned:",
      insight: "You start seeing patterns. What usually breaks. What actually scales. Where complexity hides.",
      description: "Experience means I've made the mistakes already. Tried the shortcuts that don't work. Built the architectures that do. It's not magic—just repetition across hundreds of projects.",
      okidokiTitle: "Okidoki.chat: Production-Grade in Week 3",
      okidokiDescription: "Deployed a complete platform to production in 3 weeks. Still adding features based on what users actually need.",
      okidokiFeatures: [
        "Voice + video meetings",
        "Auto transcription + AI summaries",
        "Intelligent lead profiling",
        "Cron-based RAG automation",
        "PDF + website scraping",
        "Bot personality engine",
        "Landing page generator",
        "Production deployment",
      ],
      closing1: "Experience compounds.",
      closing2: "Problems I solve now, I've solved variations of before.",
      experienceTitle: "Companies I've worked with",
    },
    
    // Experience Section
    experience: {
      badge: 'EXPERIENCE',
      title: "Where I've Built",
      mercadolibre: {
        company: 'MercadoLibre',
        period: '2023-2024',
        role: 'Software Expert & Architect',
        description: 'Built ML systems for 100M+ users. MercadoPlay streaming platform across 18 countries. Referenced expert for 300+ engineers.',
      },
      consulting: {
        company: 'AI Consulting',
        period: '2024-PRESENT',
        role: 'Punto Origen - AI Specialist',
        description: 'Healthcare EMR migration, insurance document translation (150 pages in 3 min), AI sales prospecting, enterprise AI implementations.',
      },
      creador: {
        company: 'Creador S.A.',
        period: '2007-2020',
        role: 'Founding Engineer & CEO',
        description: 'Built custom IDE from scratch. Powered 100+ mobile applications. 13 years leading company serving major Latin American businesses.',
      },
    },
    
    // Case Studies Section
    caseStudies: {
      badge: 'CASE STUDIES',
      title: 'Production Systems, Delivered Fast',
      subtitle: 'Real projects. Real impact. Real speed.',
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
    
    // Services Section
    services: {
      badge: 'SERVICES',
      title: 'How I Can Help',
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
      work: 'Trabajo',
      contact: 'Contacto',
    },
    
    // Sección Hero
    hero: {
      title: 'Staff Engineer • Arquitecto AI • Diseñador de Sistemas',
      name: 'Pablo Schaffner',
      headline1: 'Sistemas completos en',
      headline2: '3 semanas',
      headline3: 'en vez de',
      headline4: '6 meses',
      subheadline1: 'Sistemas de',
      subheadline1Bold: 'inteligencia artificial',
      subheadline2: 'que funcionan desde el día uno.',
      subheadline3: 'He trabajado con',
      subheadline3Bold: 'MercadoLibre (100M usuarios)',
      subheadline4: ', startups de salud, aseguradoras y más.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Ver Proyectos',
      stat1Value: '100M+',
      stat1Label: 'USUARIOS SERVIDOS',
      stat2Value: '20+',
      stat2Label: 'AÑOS CONSTRUYENDO',
      stat3Value: '3',
      stat3Label: 'SEMANAS TÍPICO',
    },
    
    // Sección Confianza
    trustedBy: {
      title: 'Han confiado en mí desde Fortune 500 hasta startups',
    },
    
    // Sección Acerca
    about: {
      badge: 'FILOSOFÍA',
      title: "20 Años Construyendo. Todavía Aprendiendo.",
      intro: "Dos décadas—desde IDEs personalizados que corrían 100+ apps, hasta sistemas ML en",
      introHighlight: "MercadoLibre sirviendo 100M usuarios",
      introEnd: "—esto es lo que he aprendido:",
      insight: "Empiezas a ver patrones. Qué suele fallar. Qué realmente escala. Dónde se esconde la complejidad.",
      description: "La experiencia significa que ya cometí los errores. Probé los atajos que no funcionan. Construí las arquitecturas que sí. No es magia—es repetición a través de cientos de proyectos.",
      okidokiTitle: "Okidoki.chat: En Producción Semana 3",
      okidokiDescription: "Desplegué una plataforma completa a producción en 3 semanas. Sigo agregando funcionalidades según lo que los usuarios realmente necesitan.",
      okidokiFeatures: [
        "Reuniones de voz + video",
        "Transcripción automática + resúmenes IA",
        "Perfilado inteligente de leads",
        "Automatización RAG programada",
        "Extracción de PDFs + sitios web",
        "Motor de personalidades del bot",
        "Generador de landing pages",
        "Desplegado en producción",
      ],
      closing1: "La experiencia se acumula.",
      closing2: "Los problemas que resuelvo ahora, ya resolví variantes antes.",
      experienceTitle: "Empresas con las que he trabajado",
    },
    
    // Sección Experiencia
    experience: {
      badge: 'EXPERIENCIA',
      title: 'Dónde He Construido',
      mercadolibre: {
        company: 'MercadoLibre',
        period: '2023-2024',
        role: 'Experto en Software & Arquitecto',
        description: 'Sistemas ML para 100M+ usuarios. Plataforma de streaming MercadoPlay en 18 países. Referente técnico para 300+ ingenieros.',
      },
      consulting: {
        company: 'Consultoría en IA',
        period: '2024-PRESENTE',
        role: 'Punto Origen - Especialista IA',
        description: 'Migración de historias clínicas, traducción de documentos de seguros (150 páginas en 3 min), prospección de ventas con IA, implementaciones empresariales.',
      },
      creador: {
        company: 'Creador S.A.',
        period: '2007-2020',
        role: 'Ingeniero Fundador & CEO',
        description: 'Construí un IDE completo desde cero. Impulsó 100+ aplicaciones móviles. 13 años liderando empresa sirviendo grandes negocios latinoamericanos.',
      },
    },
    
    // Sección Casos de Estudio
    caseStudies: {
      badge: 'CASOS DE ESTUDIO',
      title: 'Sistemas Reales, Velocidad Real',
      subtitle: 'Proyectos reales. Impacto real. Velocidad real.',
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
    
    // Sección Servicios
    services: {
      badge: 'SERVICIOS',
      title: 'Cómo Puedo Ayudarte',
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

