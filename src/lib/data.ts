import { ServiceItem, ProjectItem, ExperienceRole } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'network-support',
    num: '01',
    icon: '🌐',
    title: 'Network Support',
    description:
      'Strategic ecosystem networking, stakeholder matchmaking, and building symbiotic partnerships across industries.',
  },
  {
    id: 'startup-law',
    num: '02',
    icon: '⚖️',
    title: 'Startup Law',
    description:
      'Navigating foundational regulatory compliance, governance frameworks, startup documentation, and legal clarity.',
  },
  {
    id: 'leadership-development',
    num: '03',
    icon: '👑',
    title: 'Leadership Development',
    description:
      'Cultivating high-impact founder mindset, executive decision-making frameworks, and sustainable operational vision.',
  },
  {
    id: 'team-building',
    num: '04',
    icon: '🤝',
    title: 'Team Building',
    description:
      'Fostering cohesive, goal-oriented team cultures, talent alignment, delegation systems, and cross-functional synergy.',
  },
  {
    id: 'career-development',
    num: '05',
    icon: '🎯',
    title: 'Career Development Coaching',
    description:
      'Empowering professionals and aspiring founders with clear growth roadmaps, skill upgrades, and personal positioning.',
  },
  {
    id: 'advertising',
    num: '06',
    icon: '📢',
    title: 'Advertising',
    description:
      'Designing data-driven promotional campaigns, multichannel outreach, and targeted customer acquisition funnels.',
  },
  {
    id: 'business-consulting',
    num: '07',
    icon: '📊',
    title: 'Business Consulting',
    description:
      'Strategic operational diagnostics, revenue model optimization, unit economics refinement, and scaling strategies.',
  },
  {
    id: 'educational-consulting',
    num: '08',
    icon: '🎓',
    title: 'Educational Consulting',
    description:
      'Institutional curriculum modernization, quality standards policy, and digitizing academic management processes.',
  },
  {
    id: 'public-relations',
    num: '09',
    icon: '📰',
    title: 'Public Relations',
    description:
      'Brand storytelling, community outreach, reputation management, and positioning ventures with authentic credibility.',
  },
  {
    id: 'brand-design',
    num: '10',
    icon: '🎨',
    title: 'Brand Design',
    description:
      'Crafting holistic brand visual identities, customer-facing digital storefronts, and consistent aesthetic touchpoints.',
  },
  {
    id: 'startup-mentorship',
    num: '11',
    icon: '🚀',
    title: 'Startup Mentorship',
    description:
      'Guiding early-stage entrepreneurs through MVP validation, market discovery, operational roadmaps, and investor readiness.',
  },
  {
    id: 'restaurant-growth',
    num: '12',
    icon: '🍽️',
    title: 'Restaurant Growth Consultant',
    description:
      'Accelerating restaurant revenue, table turnover, QR tech adoption, guest retention, and F&B operational efficiency.',
  },
  {
    id: 'sop-implementer',
    num: '13',
    icon: '📋',
    title: 'SOP Implementer',
    description:
      'Documenting and establishing repeatable Standard Operating Procedures that eliminate chaos and guarantee quality consistency.',
  },
  {
    id: 'fnb-edutech-innovator',
    num: '14',
    icon: '💡',
    title: 'F&B & EduTech Innovator',
    description:
      'Architecting AI-first food service solutions and modern educational management platforms like myResto and EduTrack.',
  },
  {
    id: 'entrepreneur',
    num: '15',
    icon: '💼',
    title: 'Entrepreneur',
    description:
      'Hands-on venture building, cross-disciplinary execution, multi-company governance, and building impactful businesses.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'edutrack',
    title: 'EduTrack',
    category: 'EduTech · Management Platform',
    tagline: 'Education Tracking & Institution Management System',
    description:
      'A comprehensive digital tracking and operational suite built to modernize educational oversight, student management, and administrative tracking across institutions with automated records and clarity.',
    tags: ['EduTech', 'Software Architecture', 'Workflow Automation', 'Admin Systems'],
    link: 'https://foredu.co.in/',
    linkText: 'Visit EduTrack (foredu.co.in) →',
    featured: true,
  },
  {
    id: 'myresto',
    title: 'myResto Today Suite',
    category: 'Hospitality Tech · AI Solutions',
    tagline: 'AI-Powered Dining & POS Ecosystem',
    description:
      'Pioneering end-to-end intelligent restaurant operations: QR table ordering, kitchen management, automated SOP standards, and AI-enabled business insights for modern food service enterprises.',
    tags: ['AI Solutions', 'Cloud POS', 'QR Ordering', 'SOP Framework'],
    link: 'https://myrestotoday.com',
    linkText: 'Visit myResto Today →',
  },
  {
    id: 'rapid-prototypes',
    title: 'Rapid Prototype Suite',
    category: 'Rapid Engineering · Vibe Coding',
    tagline: '6+ Specialized Web Builds & Micro-Tools',
    description:
      'Interactive utility apps, customer conversion funnels, and niche business portals developed using vibe coding and modern web stacks, optimized for fast deployment, speed, and fluid user experience.',
    tags: ['Vibe Coder', 'Rapid MVPs', 'Frontend UI/UX', 'Full-Stack'],
    linkText: '6+ Active Deployments',
  },
  {
    id: 'teaque',
    title: 'TeaQue - Taste of Diversitea',
    category: 'F&B Brand & Commerce',
    tagline: 'Brand Identity & Digital Storefront',
    description:
      'Integrated brand building, website design, and social media acquisition engine developed for a specialty beverage concept, harmonizing physical product with a high-engagement digital footprint.',
    tags: ['Brand Architecture', 'Web Design', 'Social Growth'],
    linkText: 'Brand Case Study',
  },
  {
    id: 'fixcom',
    title: 'Fixcom India',
    category: 'Digital Agency · Web Systems',
    tagline: 'Web Design & Digital Infrastructure',
    description:
      'Delivered custom web portals, content management solutions, and search optimization strategies for regional businesses seeking digital transformation and structured brand credibility.',
    tags: ['WordPress', 'Web Architecture', 'Client Solutions'],
    linkText: 'Agency Portfolio',
  },
  {
    id: 'institutional-modernization',
    title: 'Institutional Modernization',
    category: 'EduTech & Social Impact',
    tagline: 'Curriculum & Educational Quality Systems',
    description:
      'Strategic oversight and procedural frameworks deployed across educational boards and colleges to integrate modern management, digitized record-keeping, and pedagogical standards.',
    tags: ['Quality Standards', 'Institutional SOPs', 'Governance'],
    link: '#timeline',
    linkText: 'View Roles →',
  },
];

export const EXPERIENCE_DATA: ExperienceRole[] = [
  {
    id: '1',
    role: 'Founder',
    company: 'myResto Today Pvt Ltd',
    period: 'Feb 2024 - Present · 2 yrs 4 mos',
    badges: ['Full-time', 'On-site'],
    location: '📍 Ernakulam, Kerala, India',
    focus: '🏢 Hospitality & Food Industry Tech',
    description:
      'Pioneered MyResto Today, merging technology and hospitality to revolutionize the dining experience through intelligent digital menus, smart ordering, kitchen workflows, and operational standards.',
    skills: ['Hospitality Tech', 'AI-Powered Solutions', 'Product Strategy', 'SOP Consulting'],
    categories: ['founding'],
  },
  {
    id: '2',
    role: 'Chairman & Managing Director',
    company: 'myResto Today Pvt Ltd',
    period: 'Dec 2024 - Present · 1 yr 6 mos',
    badges: ['Full-time'],
    location: '📍 Kerala, India',
    focus: '👔 Corporate Governance & Strategy',
    description:
      'Visionary leader guiding corporate strategy, governance, partnerships, and operations for sustainable growth and long-term industry innovation.',
    skills: ['Corporate Governance', 'Strategic Leadership', 'Scaling Operations', 'Financial Oversight'],
    categories: ['founding'],
  },
  {
    id: '3',
    role: 'Chief Executive Officer',
    company: 'myResto Today Pvt Ltd',
    period: 'Dec 2024 - Present · 1 yr 6 mos',
    badges: ['Self-employed', 'On-site'],
    location: '📍 Kerala, India',
    focus: '🚀 Executive Execution',
    description:
      'Driving overall mission execution, product delivery pipelines, cross-functional team leadership, and technology adoption across partner restaurant networks.',
    skills: ['Executive Management', 'Product Innovation', 'Client Ecosystem', 'F&B Tech'],
    categories: ['founding'],
  },
  {
    id: '4',
    role: 'Software Architect',
    company: 'Independent & Enterprise Platforms',
    period: 'Core Competency',
    badges: ['Specialized'],
    location: '💻 System Architecture & Cloud Frameworks',
    focus: '🌐 EduTech & FoodTech Platforms',
    description:
      'Designing resilient, scalable, and secure system architectures for web applications, institutional platforms (such as EduTrack), and modern restaurant POS networks with decoupled microservices and clean data flow.',
    skills: ['Software Architecture', 'System Design', 'Scalability', 'Cloud Infrastructure'],
    categories: ['tech'],
  },
  {
    id: '5',
    role: 'Website Developer (Vibe Coder)',
    company: 'Independent Practice',
    period: '2021 - Present · 5+ yrs',
    badges: ['Builder'],
    location: '⚡ Modern Web & AI-Augmented Engineering',
    focus: '🚀 7+ Platforms Launched',
    description:
      'Vibe Coder leveraging modern AI-assisted engineering tools and rapid prototyping workflows to build high-performance web applications, responsive interfaces, and custom digital tools with exceptional development velocity.',
    skills: ['Vibe Coding', 'Web Development', 'UI/UX Craft', 'Rapid MVPs'],
    categories: ['tech'],
  },
  {
    id: '6',
    role: 'Social Media Content Creator',
    company: 'Digital Media & Thought Leadership',
    period: '2025 - Present',
    badges: ['Creator'],
    location: '📱 Digital Storytelling & Audience Engagement',
    focus: '💡 Startup & Tech Community',
    description:
      'Creating insightful content on entrepreneurship, restaurant technology, SOP standardization, vibe coding, and AI tools to inspire founders, creators, and business owners.',
    skills: ['Content Strategy', 'Video & Visual Creation', 'Personal Branding', 'Digital Outreach'],
    categories: ['growth'],
  },
  {
    id: '7',
    role: 'Board Member',
    company: 'MM Board of Education in India - Majmaul Madaris',
    period: 'Jan 2016 - Present · 10 yrs 5 mos',
    badges: ['Board Member', 'Remote'],
    location: '📍 Kerala, India',
    focus: '🎓 Educational Quality & Governance',
    description:
      'Promoting Quality Education in Madrasas Across India. Guiding institutional standards, academic curriculum modernization, quality assurance policies, and community-wide educational upliftment over a decade of dedication.',
    skills: ['Educational Governance', 'Curriculum Modernization', 'Policy Advisory', 'Quality Standards'],
    categories: ['education', 'advisory'],
  },
  {
    id: '8',
    role: 'Startup Mentor',
    company: 'Parago Artificial Enterprises',
    period: 'Jul 2025 - Dec 2025 · 6 mos',
    badges: ['Part-time', 'Hybrid'],
    location: '📍 Malappuram, Kerala, India',
    focus: '🤖 Artificial Intelligence & Emerging Ventures',
    description:
      'Provided hands-on advisory to emerging artificial intelligence ventures, guiding founders through product conceptualization, tech validation, and structural business execution.',
    skills: ['Start-up Support', 'Start-up Consulting', 'AI Enterprise Strategy'],
    categories: ['advisory'],
  },
  {
    id: '9',
    role: 'Startup Mentor',
    company: 'SAMPLET',
    period: 'Feb 2025 - Dec 2025 · 11 mos',
    badges: ['Part-time'],
    location: '📊 Business Analysis & Incubation',
    description:
      'Mentored startup cohorts on business model viability, market research analysis, risk mitigation, and foundational operational discipline for sustainable traction.',
    skills: ['Business Management', 'Business Analysis', 'Operational SOPs'],
    categories: ['advisory'],
  },
  {
    id: '10',
    role: 'Startup Mentor',
    company: 'Zaasio Technology',
    period: 'Jun 2025 - Oct 2025 · 5 mos',
    badges: ['Self-employed', 'Hybrid'],
    location: '📍 Aluva, Kerala, India',
    focus: '💻 Tech Commercialization',
    description:
      'Advised tech entrepreneurs on go-to-market roadmaps, team building, tech stack choices, and scalable startup support mechanisms.',
    skills: ['Start-up Support', 'Mentoring', 'Product Architecture'],
    categories: ['advisory'],
  },
  {
    id: '11',
    role: 'Proprietor',
    company: 'TeaQue - Taste of Diversitea',
    period: 'Oct 2022 - Jan 2026 · 3 yrs 4 mos',
    badges: ['Hybrid'],
    location: '🍵 Food & Beverage Brand',
    focus: '📍 Kerala, India',
    description:
      'Conceptualized, founded, and managed end-to-end operations for TeaQue, delivering a curated beverage experience with standardized preparation, supply chain oversight, and community branding.',
    skills: ['F&B Operations', 'Business Management', 'Customer Experience'],
    categories: ['founding'],
  },
  {
    id: '12',
    role: 'Social Media Marketing Manager',
    company: 'TeaQue - Taste of Diversitea',
    period: 'Jan 2023 - Jan 2026 · 3 yrs 1 mo',
    badges: ['Hybrid'],
    location: '📢 Brand Marketing & Campaigns',
    description:
      'Orchestrated multichannel social media strategies, audience engagement campaigns, and digital promotional stunts that established a distinctive visual presence for the TeaQue brand.',
    skills: ['Social Media Marketing', 'Brand Direction', 'Customer Engagement'],
    categories: ['growth'],
  },
  {
    id: '13',
    role: 'Website Designer',
    company: 'TeaQue - Taste of Diversitea',
    period: 'Jan 2023 - Sep 2023 · 9 mos',
    badges: ['Remote'],
    location: '🎨 Digital Experience & Storefront',
    description:
      'Designed and implemented the primary website and customer interface, translating the warm, artisanal identity of TeaQue into a clean, mobile-optimized digital experience.',
    skills: ['Website Design', 'Responsive Layouts', 'Digital Branding'],
    categories: ['tech'],
  },
  {
    id: '14',
    role: 'Management Team Member',
    company: "Hameem Women's Quranic Madrasa",
    period: 'Sep 2021 - Jan 2026 · 4 yrs 5 mos',
    badges: ['Part-time'],
    location: '🏛️ Community Education Management',
    description:
      "Contributed to organizational planning, infrastructure development, educational program scheduling, and management oversight to empower women's religious and moral education.",
    skills: ['Institutional Administration', 'Program Scheduling', 'Community Leadership'],
    categories: ['education'],
  },
  {
    id: '15',
    role: 'Administrative Assistant',
    company: 'Maiza Institute',
    period: 'Jul 2024 - Dec 2025 · 1 yr 6 mos',
    badges: ['Self-employed'],
    location: '📁 Startup Development & Marketing',
    description:
      'Assisted in institutional coordination, startup development workflows, student marketing, and administrative operational alignment.',
    skills: ['Startup Development', 'Startup Marketing', 'Administrative Systems'],
    categories: ['education', 'growth'],
  },
  {
    id: '16',
    role: 'Sales Partner',
    company: 'Vyapar',
    period: 'Mar 2024 - Feb 2025 · 1 yr',
    badges: ['Hybrid'],
    location: '📍 Kerala, India',
    focus: '💼 Business Software Distribution',
    description:
      "Partnered to introduce and deploy Vyapar's invoicing, inventory, and accounting software to regional businesses and retailers, facilitating digital transformation of financial records.",
    skills: ['B2B Sales', 'Software Adoption', 'MSME Solutions'],
    categories: ['growth'],
  },
  {
    id: '17',
    role: 'Sales Leader',
    company: 'Upfin App',
    period: 'Jan 2024 - Feb 2025 · 1 yr 2 mos',
    badges: ['Part-time', 'Remote'],
    location: '📍 Palakkad, Kerala, India',
    focus: '📈 Fintech Sales & Growth',
    description:
      'Led sales outreach, referral growth, and customer acquisition campaigns for the Upfin financial application, mentoring sales associates and scaling target numbers.',
    skills: ['Sales Leadership', 'Fintech Expansion', 'User Acquisition'],
    categories: ['growth'],
  },
  {
    id: '18',
    role: 'Teacher',
    company: 'AL JAMIATHUL KAUZARIYYA ARABIC COLLEGE',
    period: 'Jul 2018 - Feb 2025 · 6 yrs 8 mos',
    badges: ['Full-time', 'On-site'],
    location: '📍 India · On-site',
    focus: '📖 Academic & Moral Instruction',
    description:
      'Delivered rigorous academic instruction and mentorship across religious sciences and Arabic studies, fostering intellectual curiosity, ethical character, and academic achievement over nearly seven years.',
    skills: ['Pedagogy', 'Academic Mentorship', 'Student Development'],
    categories: ['education'],
  },
  {
    id: '19',
    role: 'Graphic Designer',
    company: 'AL JAMIATHUL KAUZARIYYA ARABIC COLLEGE',
    period: 'Jan 2018 - Jun 2025 · 7 yrs 6 mos',
    badges: [],
    location: '📍 Aluva, Kerala, India',
    focus: '🎨 Publication & Visual Design',
    description:
      'Designed promotional materials, event posters, identity collateral, and institutional publications with meticulous typographic and visual aesthetic standards.',
    skills: ['Graphic Design', 'Visual Layout', 'Print & Digital Collateral'],
    categories: ['growth'],
  },
  {
    id: '20',
    role: 'Founder',
    company: 'Fixcom India',
    period: 'Jun 2018 - Dec 2022 · 4 yrs 7 mos',
    badges: ['Self-employed', 'Remote'],
    location: '📍 Erattupetta, Kerala, India',
    focus: '💻 Web & Digital Solutions Agency',
    description:
      'Founded and directed Fixcom India, delivering WordPress engineering, custom client websites, social media strategy, and IT services to commercial clients across Kerala.',
    skills: ['WordPress Design', 'Web Development', 'Social Media Growth', 'Agency Operations'],
    categories: ['founding', 'tech'],
  },
];
