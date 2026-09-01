import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollReveal from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What problems can Blukaze automate?",
    answer: "We turn repetitive business operations into automated systems — including lead qualification, lead enrichment, CRM syncing, document parsing, customer support, email outreach, ETL pipelines, and internal knowledge retrieval.",
  },
  {
    question: "Do I need to replace my existing software?",
    answer: "No. We build directly around your existing software stack (HubSpot, Salesforce, Airtable, Shopify, Slack, PostgreSQL, etc.) using APIs, webhooks, and n8n without forcing unnecessary tool replacements.",
  },
  {
    question: "Why use n8n?",
    answer: "n8n provides the ideal balance of visual workflow clarity, high performance, and total flexibility. You get readable, maintainable execution flows without vendor lock-in, plus full support for custom JavaScript/Python code and self-hosting.",
  },
  {
    question: "Can you build custom AI agents?",
    answer: "Yes. We build multi-step autonomous agents and tool-calling systems using frameworks like LangChain, AutoGen, and OpenAI APIs that can reason over your data, call APIs, and execute complex multi-step workflows.",
  },
  {
    question: "Can you integrate with our CRM?",
    answer: "Absolutely. We routinely build custom integrations for HubSpot, Salesforce, Close, Pipedrive, Zoho, and Airtable for real-time contact creation, deal stage updates, and automated rep assignment.",
  },
  {
    question: "How long does an automation take to build?",
    answer: "Most production automation systems go live within 2 to 4 weeks, depending on the complexity of your stack and workflow edge cases.",
  },
  {
    question: "How much does an automation cost?",
    answer: "Pricing is transparent and project-based depending on scope, integrations, and agent complexity. Every project begins with a Free Automation Audit where we detail expected ROI before any financial commitment.",
  },
  {
    question: "Is my business data secure?",
    answer: "100%. We enforce strict credential encryption, role-based API permissions, self-hosted deployment options, and zero data retention models for AI processing.",
  },
  {
    question: "Who owns the workflows?",
    answer: "You do. 100% of the workflow blueprints, code, credentials, and infrastructure configurations belong entirely to your company upon project completion.",
  },
  {
    question: "Can Blukaze maintain the system after launch?",
    answer: "Yes. We offer ongoing monitoring, error alerts, API maintenance, and feature iterations to guarantee your systems remain 99.99% reliable as your business scales.",
  },
  {
    question: "What happens if an AI model fails?",
    answer: "We engineer all systems with production safeguards: automatic retries, fallback logic, structured Zod validation, and human-in-the-loop escalation paths whenever unexpected outputs occur.",
  },
];

const FAQSection = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section id="faq" className="py-24 md:py-36 px-6 relative bg-[#030308] border-b border-white/5">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Left: Heading */}
          <div className="lg:w-1/3 shrink-0">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">
              Clear Answers
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-sm text-white/50">
              Everything you need to know about partnering with Blukaze.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/10 rounded-none px-0 bg-transparent"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-white hover:no-underline hover:text-blue-400 transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-sm leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
