import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What problems can your automations solve?",
    answer:
      "We automate repetitive, error-prone, and time-consuming workflows—like lead handling, reporting, data syncing, AI analysis, notifications, and decision support—so your team can focus on high-value work.",
  },
  {
    question: "Why do you use n8n instead of custom code?",
    answer:
      "n8n lets us build production-grade, scalable automations faster and more transparently. You get visual workflows, easier maintenance, no vendor lock-in, and the ability to extend or modify logic anytime.",
  },
  {
    question: "Can you handle complex business logic and AI workflows?",
    answer:
      "Yes. We specialize in logic-heavy automations with conditions, branching, retries, approvals, and AI agents—designed with safeguards so AI outputs are reliable and controllable.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We follow secure credential handling, minimal data access, and optional self-hosted n8n deployments so your data stays fully under your control.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most automations go live in days, not months. After understanding your use case, we share a clear scope, timeline, and deliver a working automation you can see and control.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative section-fade-top section-fade-bottom">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our automation services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50 py-2"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
