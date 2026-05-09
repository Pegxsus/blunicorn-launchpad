import { Workflow, Search, Database, Share2, MessageSquare, Zap } from "lucide-react";

export const projects = [
  {
    slug: "crm-intelligence-engine",
    title: "CRM Intelligence Engine",
    description: "An end-to-end AI pipeline that auto-qualifies leads, writes personalised outreach, and books meetings — saving 40 hrs/week.",
    category: "AI Automation",
    roi: "40 hrs/week saved",
    icon: Workflow,
    bg: "from-blue-600/20 to-indigo-900/40 border-blue-500/20",
    iconColor: "text-blue-400",
    metrics: [
      { label: "Time Saved", value: "40+ hours/week" },
      { label: "Lead Response Time", value: "< 5 minutes" },
      { label: "Meeting Bookings", value: "+300% YoY" },
      { label: "Cost Reduction", value: "$60K+ annually" }
    ],
    problemStatement: {
      title: "The 40-Hour Weekly Tax on Sales Teams Managing Manual Outreach",
      paragraphs: [
        "Sales teams frequently struggle with balancing deep relationship-building and the mechanical tasks of lead qualification, initial outreach, and meeting scheduling. The problem is that CRMs don't natively converse with prospects — which means a human has to review lead data, draft an email, and handle back-and-forth scheduling.",
        "At 10 minutes per lead and hundreds of inbound leads per week, that's 40 hours of repetitive administrative work. Furthermore, the delay in response times significantly drops conversion rates. Without systematic and instant engagement, hot leads go cold, and the sales team misses out on high-value opportunities."
      ]
    },
    solution: {
      title: "Building the Intelligence Engine: Autonomous Lead Qualification and Engagement",
      paragraphs: [
        "We engineered a custom AI pipeline built around the specific failure modes of manual sales outreach — the delayed responses, the generic emails, and the scheduling friction. The core architectural innovation is an autonomous agent that monitors the CRM for new leads, enriches their data, and drafts hyper-personalized outreach based on their specific context.",
        "The system orchestrates the complete workflow — lead enrichment, AI personalization, initial outreach, objection handling, and meeting booking — continuously and without any human intervention required until the meeting is set."
      ]
    },
    steps: [
      { title: "Lead Ingestion", description: "The workflow triggers in real-time when a new lead enters the CRM via web form or integration." },
      { title: "Data Enrichment", description: "An AI agent automatically searches LinkedIn and company websites to gather deep context on the prospect." },
      { title: "Personalized Drafting", description: "Using an LLM, the system drafts a highly contextual outreach email addressing the prospect's specific pain points." },
      { title: "Autonomous Dispatch", description: "The email is sent through the sales rep's inbox, appearing entirely organic and human." },
      { title: "Intelligent Follow-up", description: "If the prospect replies, the AI classifies the intent. If positive, it suggests meeting times. If an objection is raised, it drafts a counter-response." },
      { title: "Meeting Booking", description: "The AI handles the calendar negotiation and automatically schedules the call, updating the CRM status to 'Meeting Booked'." }
    ],
    features: [
      { title: "Real-Time Engagement", description: "Responds to inbound leads within 5 minutes, maximizing conversion rates." },
      { title: "Hyper-Personalization", description: "Uses external data enrichment to craft emails that prove you've done your homework." },
      { title: "Automated Intent Classification", description: "Reads incoming replies and routes only the qualified, interested prospects to the human sales team." }
    ],
    beforeVsAfter: {
      before: "Sales reps spent 40 hours weekly manually reviewing leads, writing generic emails, and playing calendar ping-pong. Leads often waited 24-48 hours for a response, causing a massive drop in conversion rates.",
      after: "Every inbound lead is instantly enriched and engaged with a highly personalized email. The AI handles the back-and-forth scheduling, and sales reps simply wake up to a calendar full of qualified meetings. 40 hours saved per week."
    },
    implementation: {
      title: "Implementation: Live in 4 Weeks",
      steps: [
        "CRM & Email Provider Integration (OAuth setup)",
        "Data Enrichment API configurations (Clearbit/LinkedIn)",
        "LLM Prompt Engineering & Personalization Logic",
        "Intent Classification & Routing Setup",
        "End-to-End Testing & Deployment"
      ]
    }
  },
  {
    slug: "research-analysis-agent",
    title: "Research & Analysis Agent",
    description: "A multi-step autonomous agent that conducts competitive research, summarises data, and delivers boardroom-ready reports.",
    category: "Custom Agents",
    roi: "20x faster research",
    icon: Search,
    bg: "from-purple-600/20 to-purple-900/40 border-purple-500/20",
    iconColor: "text-purple-400",
    metrics: [
      { label: "Research Speed", value: "20x Faster" },
      { label: "Data Sources", value: "100+ Simultaneous" },
      { label: "Manual Effort", value: "-95%" },
      { label: "Report Quality", value: "Boardroom-Ready" }
    ],
    problemStatement: {
      title: "The Exhausting Tax of Manual Market Research and Competitive Intelligence",
      paragraphs: [
        "Strategic decisions require deep, comprehensive market research. However, analysts spend countless hours scraping through competitor websites, financial reports, news articles, and social sentiment just to gather raw data.",
        "This manual aggregation leaves little time for actual synthesis and strategic thinking. By the time a report is finalized, the data is often stale, and the analyst is burned out from simple data collection."
      ]
    },
    solution: {
      title: "Deploying an Autonomous Multi-Step Research Agent",
      paragraphs: [
        "We developed a multi-step autonomous agent designed specifically for deep-dive research. The agent takes a single user prompt (e.g., 'Analyze the competitive landscape for AI in healthcare') and spawns multiple sub-agents to scour the web, parse PDFs, and aggregate financial data.",
        "These sub-agents synthesize their findings into a cohesive, structured, boardroom-ready report, complete with citations and executive summaries, transforming weeks of work into minutes."
      ]
    },
    steps: [
      { title: "Prompt Analysis", description: "The system breaks down the user's research request into specific, searchable objectives." },
      { title: "Parallel Web Scraping", description: "Sub-agents concurrently search the web, reading articles, competitor sites, and industry reports." },
      { title: "Data Extraction", description: "Relevant data points, statistics, and strategic shifts are extracted from unstructured text." },
      { title: "Cross-Referencing", description: "The agent cross-references claims across multiple sources to ensure factual accuracy and eliminate hallucinations." },
      { title: "Report Synthesis", description: "An advanced LLM synthesizes the verified data into a structured markdown or PDF report." },
      { title: "Delivery", description: "The final report is delivered to the user via email or Slack, complete with executive summaries and source citations." }
    ],
    features: [
      { title: "Autonomous Web Browsing", description: "Capable of navigating complex websites and extracting data without pre-defined scrapers." },
      { title: "Multi-Agent Collaboration", description: "Uses specialized agents for data gathering, fact-checking, and writing." },
      { title: "Structured Outputs", description: "Delivers clean, formatted reports tailored to specific corporate templates." }
    ],
    beforeVsAfter: {
      before: "Analysts spent 2-3 weeks manually gathering data, reading reports, and formatting documents before any strategic decisions could be made.",
      after: "Comprehensive, accurate, and structured research reports are generated in under 15 minutes, allowing analysts to focus entirely on strategy rather than data collection."
    },
    implementation: {
      title: "Implementation: Live in 6 Weeks",
      steps: [
        "Search API & Browser Automation Setup",
        "Multi-Agent Orchestration Logic (LangChain/AutoGen)",
        "Fact-Checking & Hallucination Prevention Constraints",
        "Report Formatting & Output Generation",
        "User Interface & Slack Integration"
      ]
    }
  },
  {
    slug: "enterprise-knowledge-base",
    title: "Enterprise Knowledge Base",
    description: "A RAG-powered internal assistant trained on 50k+ docs that answers complex policy and product questions instantly.",
    category: "RAG Systems",
    roi: "90% resolution rate",
    icon: Database,
    bg: "from-emerald-600/20 to-teal-900/40 border-emerald-500/20",
    iconColor: "text-emerald-400",
    metrics: [
      { label: "Resolution Rate", value: "90% First-Contact" },
      { label: "Search Time", value: "Instant" },
      { label: "Docs Processed", value: "50,000+" },
      { label: "Support Tickets", value: "Reduced by 60%" }
    ],
    problemStatement: {
      title: "The Friction of Information Silos and Fragmented Documentation",
      paragraphs: [
        "As enterprises scale, knowledge becomes fragmented across Google Drive, Notion, Confluence, and Slack. When employees need an answer to a complex policy or product question, they spend hours searching or interrupting colleagues.",
        "This friction slows down onboarding, frustrates employees, and leads to inconsistent answers being given to customers. The internal support team gets bogged down answering the same questions repeatedly."
      ]
    },
    solution: {
      title: "Building a Unified RAG-Powered Knowledge Assistant",
      paragraphs: [
        "We engineered an Enterprise Knowledge Base using Retrieval-Augmented Generation (RAG). This system ingests, chunks, and vectorizes over 50,000 internal documents, creating a unified semantic search engine.",
        "When an employee asks a question, the assistant retrieves the most relevant paragraphs from across all company silos and generates a precise, natural-language answer with exact citations to the source documents."
      ]
    },
    steps: [
      { title: "Document Ingestion", description: "Automated pipelines continuously sync data from Confluence, Google Drive, and Zendesk." },
      { title: "Semantic Chunking", description: "Documents are broken down into logical chunks and converted into dense vector embeddings." },
      { title: "Vector Storage", description: "Embeddings are stored in a high-performance vector database (e.g., Pinecone or Weaviate)." },
      { title: "Query Processing", description: "User questions are vectorized and semantically matched against the corporate knowledge base." },
      { title: "Contextual Generation", description: "An LLM generates an answer using only the retrieved context to ensure zero hallucinations." },
      { title: "Citation & Delivery", description: "The answer is delivered in Slack or a web portal, complete with links to the original source documents." }
    ],
    features: [
      { title: "Zero Hallucinations", description: "Strict prompting ensures the AI only answers based on provided corporate documentation." },
      { title: "Granular Access Control", description: "Respects document permissions, ensuring employees only retrieve information they are authorized to see." },
      { title: "Real-Time Sync", description: "The vector database updates automatically when source documents are modified." }
    ],
    beforeVsAfter: {
      before: "Employees wasted an average of 1.5 hours daily searching for information, and internal support teams were overwhelmed with repetitive queries.",
      after: "Employees get instant, accurate answers with direct links to source material. Internal support tickets dropped by 60%, and onboarding time was cut in half."
    },
    implementation: {
      title: "Implementation: Live in 5 Weeks",
      steps: [
        "Data Connector Setup (Confluence, Drive, Slack)",
        "Vector Database Provisioning & Embedding Pipeline",
        "RAG Architecture & LLM Integration",
        "Access Control & Security Auditing",
        "Slack Bot Deployment & User Onboarding"
      ]
    }
  },
  {
    slug: "bigcommerce-airtable-sync",
    title: "BigCommerce Airtable Data Sync",
    description: "Automatically sync products, orders, and customer data between BigCommerce and Airtable in real-time.",
    category: "Enterprise",
    roi: "$400K+/yr saved",
    icon: Share2,
    bg: "from-blue-500/20 to-blue-800/40 border-blue-400/20",
    iconColor: "text-blue-300",
    metrics: [
      { label: "Data Accuracy", value: "100%" },
      { label: "Time Saved", value: "12.5 hrs/week" },
      { label: "Sync Speed", value: "Real-time" },
      { label: "Cost Savings", value: "$400K+ annually" }
    ],
    problemStatement: {
      title: "The Massive Cost of Disconnected E-commerce and Operations Data",
      paragraphs: [
        "Managing thousands of SKUs, orders, and customer records across a BigCommerce storefront and an operational Airtable base is a logistical nightmare when the systems don't natively sync. Operations teams are forced to manually export CSVs and update records.",
        "This manual process leads to inventory discrepancies, delayed order fulfillment, and corrupted database integrity. The error cost compounds the time cost, resulting in oversold items and angry customers."
      ]
    },
    solution: {
      title: "Intelligent Routing That Knows Whether to Update or Create",
      paragraphs: [
        "We engineered a real-time data synchronization system built around the specific failure modes of e-commerce — duplicate entries, stale inventory, and order linkage errors. The core architectural innovation is an intelligent router module that queries Airtable before every sync operation.",
        "It determines whether a record already exists, then routes to either update the existing entry with fresh BigCommerce data or create a brand new record. This guarantees zero duplicates and perfect data integrity."
      ]
    },
    steps: [
      { title: "Webhook Extraction", description: "BigCommerce webhooks trigger the workflow the exact second an order is placed or a product is updated." },
      { title: "Airtable Duplicate Check", description: "The system queries the Airtable base using the Order ID or SKU as the unique lookup key." },
      { title: "Intelligent Routing", description: "The workflow evaluates the query result and branches into an 'Update' or 'Create' path." },
      { title: "Record Creation", description: "If new, a complete Airtable record is generated with perfect field mapping (currency, dates, line items)." },
      { title: "Record Update", description: "If existing, the record is refreshed with the latest data (e.g., status changed from Pending to Shipped)." },
      { title: "Relational Linking", description: "Line items are automatically linked to their parent orders and corresponding customer records." }
    ],
    features: [
      { title: "Intelligent Duplicate Detection", description: "Queries Airtable using unique IDs before writing, preventing the duplicate entries that corrupt databases." },
      { title: "Real-Time Synchronisation", description: "Continuous monitoring transfers changes instantly, eliminating stale data." },
      { title: "Perfect Field Mapping", description: "Ensures currency fields, dates, and relations are perfectly formatted in Airtable." }
    ],
    beforeVsAfter: {
      before: "Operations manually transferred 500+ orders weekly from BigCommerce to Airtable, taking 12.5 hours and resulting in frequent data entry errors and inventory mismatches.",
      after: "Every order, product update, and customer record is synchronized continuously. 100% field mapping accuracy, zero duplicates, and real-time operational dashboards."
    },
    implementation: {
      title: "Implementation: Live in 8 Weeks",
      steps: [
        "BigCommerce API & Webhook Configuration",
        "Airtable Database Schema Design",
        "Duplicate Detection & Routing Logic (Make.com/n8n)",
        "End-to-End Edge Case Testing (Refunds, Partial Fulfillments)",
        "Production Deployment & Monitoring Setup"
      ]
    }
  },
  {
    slug: "ai-whatsapp-support-bot",
    title: "AI WhatsApp Support Bot",
    description: "Automate customer service with intelligent ChatGPT-powered WhatsApp bot providing instant personalized responses 24/7.",
    category: "Enterprise",
    roi: "$400K+/yr saved",
    icon: MessageSquare,
    bg: "from-green-500/20 to-emerald-800/40 border-green-500/20",
    iconColor: "text-green-400",
    metrics: [
      { label: "Response Time", value: "< 2 seconds" },
      { label: "Ticket Deflection", value: "75%" },
      { label: "Availability", value: "24/7/365" },
      { label: "Customer Satisfaction", value: "+40%" }
    ],
    problemStatement: {
      title: "The Overwhelming Volume of Repetitive Customer Queries on WhatsApp",
      paragraphs: [
        "For businesses relying on WhatsApp for customer engagement, the volume of inbound messages can quickly overwhelm human support agents. Customers expect instant replies, but human teams are limited by working hours and bandwidth.",
        "When agents spend all their time answering 'Where is my order?' or 'What are your store hours?', response times for complex, high-value issues suffer, leading to poor customer satisfaction."
      ]
    },
    solution: {
      title: "Deploying a Context-Aware Conversational AI on WhatsApp",
      paragraphs: [
        "We deployed an intelligent, ChatGPT-powered WhatsApp bot integrated directly with the company's CRM and knowledge base. This isn't a rigid menu-based bot; it's a fluid conversational agent that understands natural language, context, and intent.",
        "The bot can check order statuses, process returns, and answer complex product questions autonomously, escalating to a human only when necessary."
      ]
    },
    steps: [
      { title: "Message Ingestion", description: "Inbound WhatsApp messages are routed through the WhatsApp Business API." },
      { title: "Intent Classification", description: "An AI model classifies the intent of the message (e.g., support, sales, refund)." },
      { title: "System Query", description: "For transactional queries, the bot securely queries the backend database (e.g., Shopify/Stripe) for the user's data." },
      { title: "Response Generation", description: "A highly contextual, empathetic response is generated based on the retrieved data and company policies." },
      { title: "Human Handoff", description: "If the AI detects frustration or a complex edge case, it seamlessly routes the chat to a live human agent." },
      { title: "Analytics Logging", description: "The conversation is logged in the CRM for future context and analytics." }
    ],
    features: [
      { title: "Natural Language Processing", description: "Understands typos, slang, and multiple languages natively." },
      { title: "Backend Integrations", description: "Connects to e-commerce platforms to provide real, account-specific answers, not generic FAQs." },
      { title: "Seamless Human Escalation", description: "Transfers the full chat history to a human agent when necessary, ensuring the customer never has to repeat themselves." }
    ],
    beforeVsAfter: {
      before: "Support agents struggled to handle thousands of WhatsApp messages daily, leading to 6+ hour response times and high burnout rates.",
      after: "75% of queries are resolved instantly by the AI. Human agents now only handle complex issues, and average response times dropped to under 2 seconds."
    },
    implementation: {
      title: "Implementation: Live in 4 Weeks",
      steps: [
        "WhatsApp Business API Verification & Setup",
        "System Integration (CRM, Shopify, Knowledge Base)",
        "LLM Prompt Engineering & Personality Design",
        "Human Handoff Logic Configuration",
        "Beta Testing & Phased Rollout"
      ]
    }
  },
  {
    slug: "lead-sync-email-automation",
    title: "Lead Sync & Email Automation",
    description: "Automatically sync leads between Airtable and Close CRM, prevent duplicates, and enroll in Mailchimp campaigns.",
    category: "Real Estate",
    roi: "3x conversion rate",
    icon: Zap,
    bg: "from-orange-500/20 to-red-800/40 border-orange-500/20",
    iconColor: "text-orange-400",
    metrics: [
      { label: "Conversion Rate", value: "3x Increase" },
      { label: "Manual Entry", value: "Eliminated" },
      { label: "Follow-up Delay", value: "Zero" },
      { label: "Data Consistency", value: "100%" }
    ],
    problemStatement: {
      title: "The Silent Killer of Lead Conversion: Manual Handoffs and Data Silos",
      paragraphs: [
        "In fast-paced sales environments like Real Estate, speed to lead is everything. When marketing captures leads in Airtable, but sales operates in Close CRM, the manual transfer process creates a critical bottleneck.",
        "Leads sit untouched for hours, duplicates pollute the CRM, and marketing struggles to attribute closed deals back to specific campaigns. Furthermore, failing to instantly enroll new leads into nurture sequences results in massive drop-off."
      ]
    },
    solution: {
      title: "The Tri-Platform Synchronization Engine",
      paragraphs: [
        "We built a robust automation engine that connects Airtable, Close CRM, and Mailchimp into a single unified pipeline. When a lead enters the system, the automation instantly checks for duplicates across all platforms.",
        "It then creates or updates the lead in the CRM, alerts the assigned sales rep, and simultaneously enrolls the prospect into the correct highly-targeted email sequence in Mailchimp based on their specific lead source and profile."
      ]
    },
    steps: [
      { title: "Lead Capture", description: "New leads are captured in Airtable via webhooks from landing pages or ad campaigns." },
      { title: "De-duplication Check", description: "The system queries Close CRM via API to see if the phone number or email already exists." },
      { title: "CRM Operations", description: "If new, a lead is created. If existing, the record is updated and a new note/opportunity is appended." },
      { title: "Rep Assignment", description: "Leads are assigned to sales reps via a round-robin algorithm, sending an instant Slack notification." },
      { title: "Marketing Enrollment", description: "The lead is pushed to Mailchimp and tagged appropriately to trigger specific drip campaigns." },
      { title: "Status Syncing", description: "When a deal is closed in the CRM, the status syncs back to Airtable to calculate marketing ROI." }
    ],
    features: [
      { title: "Tri-Directional Sync", description: "Ensures data remains consistent across the database, the CRM, and the marketing platform." },
      { title: "Instant Routing", description: "Reduces 'speed to lead' from hours to milliseconds." },
      { title: "Closed-Loop Analytics", description: "Automatically maps closed revenue back to the original Airtable marketing source." }
    ],
    beforeVsAfter: {
      before: "Leads were manually exported from Airtable and imported to Close CRM twice a day. Reps were slow to respond, and marketing campaigns were disconnected from sales outcomes.",
      after: "Every lead is instantly routed to a rep and enrolled in nurture sequences. Zero data entry is required, and conversion rates have tripled due to immediate engagement."
    },
    implementation: {
      title: "Implementation: Live in 3 Weeks",
      steps: [
        "API Authentication across Airtable, Close CRM, and Mailchimp",
        "De-duplication & Routing Logic Setup",
        "Round-Robin Assignment Configuration",
        "Mailchimp Tagging & Journey Triggers",
        "Live Testing & Sales Team Onboarding"
      ]
    }
  }
];
