import serviceAi from "@/assets/service-ai.png";
import serviceScraper from "@/assets/service-scraper.png";
import serviceBackend from "@/assets/service-backend.png";
import serviceAudit from "@/assets/service-audit.png";

export const services = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Turn Manual Chaos Into Intelligent Workflows",
    description: "We architect intelligent AI pipelines that replace repetitive manual tasks with autonomous systems. From smart lead qualification to automated data entry and customer support routing, we build custom n8n and Make.com workflows powered by LLMs to scale your operations effortlessly.",
    image: serviceAi,
    howWeHelp: [
      {
        title: "Workflow Mapping & Architecture",
        desc: "We analyze your existing manual bottlenecks and design an optimized, failure-resistant automation blueprint."
      },
      {
        title: "LLM Integration",
        desc: "We integrate GPT-4o, Claude, or local models to handle reasoning, data extraction, and natural language tasks within your flows."
      },
      {
        title: "Custom Agent Deployment",
        desc: "We deploy specialized agents that can read emails, summarize PDFs, interact with your CRM, and make autonomous decisions."
      }
    ],
    bg: "from-blue-900/40 to-blue-950/20"
  },
  {
    slug: "web-scrapers",
    title: "Web Scrapers",
    subtitle: "Extract High-Value Data at Scale",
    description: "We build robust, anti-detect web scrapers and crawlers that navigate complex websites, bypass captchas, and extract precise data. Whether you need competitor pricing, lead generation, or LLM training data, our scrapers deliver clean, structured datasets in real-time.",
    image: serviceScraper,
    howWeHelp: [
      {
        title: "Anti-Detect & Proxy Rotation",
        desc: "We utilize advanced fingerprint spoofing and premium proxy networks to scrape at scale without getting blocked."
      },
      {
        title: "Dynamic Content Extraction",
        desc: "Our systems handle heavily JavaScript-rendered sites and SPAs, mimicking human behavior to access hidden data."
      },
      {
        title: "Data Cleaning & Structuring",
        desc: "Raw HTML is transformed into pristine JSON, CSV, or directly piped into your database or RAG pipeline."
      }
    ],
    bg: "from-purple-900/40 to-purple-950/20"
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    subtitle: "Scalable Infrastructure for Your Apps",
    description: "We engineer high-performance, secure, and scalable backend systems to power your digital products. From microservices architecture and API development to database optimization, we ensure your technical foundation can handle extreme loads without breaking a sweat.",
    image: serviceBackend,
    howWeHelp: [
      {
        title: "Custom API Architecture",
        desc: "We build RESTful and GraphQL APIs that act as the perfect glue between your frontend and complex data layers."
      },
      {
        title: "Database Optimization",
        desc: "We design optimized schemas and caching layers using PostgreSQL, Redis, and Vector DBs to guarantee sub-second responses."
      },
      {
        title: "Cloud Infrastructure",
        desc: "We deploy using modern DevOps practices on AWS or GCP, ensuring high availability and secure auto-scaling."
      }
    ],
    bg: "from-indigo-900/40 to-indigo-950/20"
  },
  {
    slug: "business-audit",
    title: "Business Audit",
    subtitle: "Identify Bottlenecks. Unlock Growth.",
    description: "Before automating, we diagnose. Our comprehensive business and technical audits dive deep into your operations, software stack, and workflows to identify inefficiencies, cost drains, and opportunities for massive AI-driven ROI.",
    image: serviceAudit,
    howWeHelp: [
      {
        title: "Process Deep-Dive",
        desc: "We shadow your team and map out every operational step to find the hidden 'time taxes' destroying your margins."
      },
      {
        title: "Tech Stack Review",
        desc: "We analyze your current software usage, identifying redundant tools, missing integrations, and expensive legacy systems."
      },
      {
        title: "AI Opportunity Roadmap",
        desc: "We deliver a prioritized, actionable blueprint detailing exactly which processes to automate first for maximum financial impact."
      }
    ],
    bg: "from-emerald-900/40 to-teal-950/20"
  }
];
