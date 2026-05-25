import serviceAi from "@/assets/service-ai.png";
import serviceScraper from "@/assets/service-scraper.png";
import serviceBackend from "@/assets/service-backend.png";
import serviceAudit from "@/assets/service-audit.png";

export const services = [
  {
    slug: "ai-automation",
    title: "Agentic Workflow Engineering",
    subtitle: "Turn Manual Chaos Into Intelligent Workflows",
    description: "Developing self-hosted, headless workflow environments that act as customized, deployable tools and sub-agents for your core LLM architecture.",
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
    title: "Agent Data Pipelines & RAG",
    subtitle: "Extract High-Value Data at Scale",
    description: "Building low-latency data retrieval systems and vector architectures to give your agents real-time, accurate context from the open web and proprietary sources.",
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
    title: "Machine-Readable APIs & MCPs",
    subtitle: "Scalable Infrastructure for Your Apps",
    description: "Translating legacy, human-first software into strictly typed, fully documented REST/GraphQL APIs and Model Context Protocols for instant agent integration.",
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
    title: "Agent-Ready Architecture Audit",
    subtitle: "Identify Bottlenecks. Unlock Growth.",
    description: "A technical teardown of your current software stack to identify UI bottlenecks and blueprint the necessary machine-to-machine infrastructure required for autonomous agent deployment.",
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
