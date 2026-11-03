export interface NavLinkItem {
  title: string;
  description: string;
  href: string;
  iconSvg?: string;
  badge?: string;
}

export interface NavGroup {
  heading: string;
  iconType?: string;
  items: NavLinkItem[];
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  href?: string;
  groups?: NavGroup[];
  footerLink?: {
    text: string;
    href: string;
  };
}

export const NAVIGATION_CONFIG: MegaMenuConfig[] = [
  {
    id: 'platform',
    label: 'Platform',
    groups: [
      {
        heading: 'CORE PLATFORM',
        items: [
          {
            title: 'Coding assessments',
            description: 'Screen developers with real-world coding tests, repository tasks and system design questions.',
            href: '/product/coding-assessments/',
          },
          {
            title: 'AI fluency assessments',
            description: 'Assess how candidates plan, prompt, review and test with AI coding assistants and agents.',
            href: '/product/ai-fluency-assessments/',
          },
          {
            title: 'AI interviews',
            description: 'Run consistent first-round technical interviews with an AI interviewer that adapts its follow-ups.',
            href: '/product/ai-interviews/',
          },
          {
            title: 'Live coding interviews',
            description: 'Run live coding and system design interviews with a shared editor, whiteboard and scorecards.',
            href: '/product/live-coding-interviews/',
          },
        ],
      },
      {
        heading: 'INTEGRITY & INTELLIGENCE',
        items: [
          {
            title: 'Proctoring and integrity',
            description: 'Stop cheating with camera, screen, identity checks, plagiarism and AI-use signals with proof.',
            href: '/product/proctoring-integrity/',
          },
          {
            title: 'Skills intelligence',
            description: 'Map engineering skills with verified assessments, identify gaps and build internal mobility.',
            href: '/product/skills-intelligence/',
          },
          {
            title: 'Question library',
            description: 'Use thousands of leak-checked coding, SQL, system design and AI-task questions.',
            href: '/product/question-library/',
          },
          {
            title: 'Integrations',
            description: 'Greenhouse, Lever, Ashby, SmartRecruiters, Slack, calendars, SSO and a REST API.',
            href: '/integrations/',
          },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    groups: [
      {
        heading: 'BY AUDIENCE & USE CASE',
        items: [
          {
            title: 'Campus hiring',
            description: 'Run high-volume university hiring drives with fraud-resistant tests and batch evaluation.',
            href: '/solutions/campus-hiring/',
          },
          {
            title: 'Enterprise tech hiring',
            description: 'Scale hiring across global teams with custom question pools, ATS sync and SLA support.',
            href: '/solutions/enterprise-tech-hiring/',
          },
          {
            title: 'IT services & staffing',
            description: 'Prove candidate capability to clients with verified skill passports and fast turnaround.',
            href: '/solutions/it-services-staffing/',
          },
          {
            title: 'Startups',
            description: 'Hire engineers faster with ready-to-use role templates without senior engineering distraction.',
            href: '/solutions/startups/',
          },
          {
            title: 'For developers',
            description: 'Transparent assessments, candidate feedback and preparation tools built for engineers.',
            href: '/developers/',
          },
        ],
      },
    ],
  },
  {
    id: 'assessments',
    label: 'Assessments',
    groups: [
      {
        heading: 'LANGUAGES',
        items: [
          {
            title: 'Java coding test',
            description: 'Spring Boot, concurrency & core JVM',
            href: '/skill-tests/java/',
          },
          {
            title: 'Python coding test',
            description: 'FastAPI, Django & backend data logic',
            href: '/skill-tests/python/',
          },
          {
            title: 'JavaScript test',
            description: 'Async/await, ES6+, DOM & fullstack tasks',
            href: '/skill-tests/javascript/',
          },
          {
            title: 'Golang coding test',
            description: 'Goroutines, channels & backend microservices',
            href: '/skill-tests/golang/',
          },
        ],
      },
      {
        heading: 'FRAMEWORKS & DATA',
        items: [
          {
            title: 'React developer test',
            description: 'State management, hooks & component architecture',
            href: '/skill-tests/react/',
          },
          {
            title: 'Node.js developer test',
            description: 'Express, REST APIs, event loop & backend',
            href: '/skill-tests/nodejs/',
          },
          {
            title: 'SQL assessment',
            description: 'Complex joins, indexing & query optimization',
            href: '/skill-tests/sql/',
          },
          {
            title: 'Data science test',
            description: 'Pandas, statistical evaluation & modeling',
            href: '/skill-tests/data-science/',
          },
        ],
      },
      {
        heading: 'ARCHITECTURE & CLOUD',
        items: [
          {
            title: 'Data structures & algorithms',
            description: 'Algorithmic complexity, logic & edge cases',
            href: '/skill-tests/data-structures-algorithms/',
          },
          {
            title: 'System design assessment',
            description: 'Distributed systems, caching & high scale',
            href: '/skill-tests/system-design/',
          },
          {
            title: 'DevOps skills test',
            description: 'Docker, Kubernetes, CI/CD & cloud infra',
            href: '/skill-tests/devops/',
          },
          {
            title: 'AWS skills assessment',
            description: 'IAM, Lambda, VPC, ECS & cloud architecture',
            href: '/skill-tests/aws/',
          },
        ],
      },
    ],
    footerLink: {
      text: 'Need a custom stack assessment? Browse all 40+ pre-built skills &rarr;',
      href: '/skill-tests/',
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    groups: [
      {
        heading: 'GUIDES & INSIGHTS',
        items: [
          {
            title: 'Technical hiring blog',
            description: 'Hiring playbooks, benchmarks & guides',
            href: '/blog/',
          },
          {
            title: 'Assessing developers in AI era',
            description: 'Modern technical evaluation strategies',
            href: '/blog/assessing-developers-in-the-age-of-ai/',
          },
          {
            title: 'Preventing test cheating',
            description: 'Proctoring methods that preserve candidate trust',
            href: '/blog/how-to-prevent-cheating-in-online-coding-tests/',
          },
          {
            title: 'Campus assessment guide',
            description: 'Practical playbook for university drives',
            href: '/blog/campus-hiring-coding-assessment-guide/',
          },
        ],
      },
      {
        heading: 'COMPARISONS & TRUST',
        items: [
          {
            title: 'HackerRank alternatives',
            description: 'Honest 2026 feature & pricing comparison',
            href: '/compare/hackerrank-alternatives/',
          },
          {
            title: 'Fair assessment checklist',
            description: '12-point rubric for unbiased screening',
            href: '/blog/how-to-design-a-fair-coding-assessment/',
          },
          {
            title: 'Security & compliance',
            description: 'SOC 2, ISO readiness, DPDP & encryption',
            href: '/security/',
          },
          {
            title: 'About SetBenchmark',
            description: 'Built by Kombee Technologies for teams',
            href: '/about/',
          },
        ],
      },
      {
        heading: 'REGIONAL EDITIONS',
        items: [
          {
            title: 'India (\u20B9 INR)',
            description: 'DPDP compliance, local data & campus engine',
            href: '/india/',
          },
          {
            title: 'UAE (AED)',
            description: 'Dubai & Abu Dhabi tech hiring standards',
            href: '/uae/',
          },
          {
            title: 'Saudi Arabia (SAR)',
            description: 'Vision 2030 digital talent evaluation',
            href: '/saudi-arabia/',
          },
          {
            title: 'Australia & NZ (ANZ)',
            description: 'Privacy Act compliance with AUD & NZD billing',
            href: '/australia/',
          },
        ],
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    groups: [
      {
        heading: 'PLANS & QUOTES',
        items: [
          {
            title: 'Global pricing plans',
            description: 'Transparent monthly and annual tiers in USD',
            href: '/pricing/',
          },
          {
            title: 'Feature comparison',
            description: 'Side-by-side plan limits, proctoring & API features',
            href: '/pricing/#compare-plans',
          },
          {
            title: 'Enterprise custom quotes',
            description: 'Volume discounts, private SLA & dedicated clusters',
            href: '/contact/',
          },
        ],
      },
      {
        heading: 'LOCAL BILLING & REGIONS',
        items: [
          {
            title: 'India (\u20B9 INR)',
            description: 'Local GST invoicing and data residency in Mumbai',
            href: '/india/',
          },
          {
            title: 'United Arab Emirates (AED)',
            description: 'UAE Dirham billing & local candidate support',
            href: '/uae/',
          },
          {
            title: 'Saudi Arabia (SAR)',
            description: 'Saudi Riyal billing tailored to Vision 2030 hiring',
            href: '/saudi-arabia/',
          },
          {
            title: 'Australia & New Zealand (ANZ)',
            description: 'AUD and NZD invoicing with local data protection',
            href: '/australia/',
          },
        ],
      },
      {
        heading: 'COMPETITOR BENCHMARK',
        items: [
          {
            title: 'HackerRank alternatives',
            description: 'Feature-by-feature and pricing comparison for 2026',
            href: '/compare/hackerrank-alternatives/',
          },
          {
            title: '14-day free trial',
            description: 'Test all features with 10 free candidate invites',
            href: 'https://app.setbenchmark.com/signup',
          },
        ],
      },
    ],
  },
];

