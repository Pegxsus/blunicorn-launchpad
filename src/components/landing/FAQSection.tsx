import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollReveal from "@/hooks/useScrollReveal";

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
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section className="py-28 px-6 relative">

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Left: Heading */}
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Frequently asked
              <br />
              questions.
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/30 rounded-none px-0 bg-transparent"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
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
