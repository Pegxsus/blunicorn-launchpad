import { HelpCircle } from "lucide-react";
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
      <div className="section-fade-top" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <div className={`mb-14 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight">
            Frequently asked
            <br />
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our automation services
          </p>
        </div>

        <Accordion type="single" collapsible className={`w-full space-y-2 scroll-reveal delay-200 ${isRevealed ? 'revealed' : ''}`}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/40 rounded-xl px-6 bg-card/30 data-[state=open]:border-primary/25 data-[state=open]:bg-card/50 transition-all"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
