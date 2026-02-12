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
      "We take the manual, repetitive stuff off your plate. Think lead routing, report generation, data syncing between tools, smart notifications, and AI-powered analysis. Basically, if your team is doing it over and over, we can probably automate it.",
  },
  {
    question: "Why do you use n8n instead of custom code?",
    answer:
      "n8n gives us the best of both worlds: speed and flexibility. You get visual workflows that are easy to understand, maintain, and modify. No vendor lock-in, no black boxes. And when custom logic is needed, n8n supports that too.",
  },
  {
    question: "Can you handle complex business logic and AI workflows?",
    answer:
      "That's actually where we do our best work. We build automations with branching logic, conditional steps, retries, approval flows, and AI agents. Everything is designed with guardrails so outputs stay reliable and predictable.",
  },
  {
    question: "Is my data secure?",
    answer:
      "100%. We use secure credential management, limit data access to only what's needed, and can set up self-hosted n8n instances if you want full control over where your data lives.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Fast. Most projects go live within days. We'll hop on a quick call, understand your workflow, and deliver a working automation you can see and manage yourself.",
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
