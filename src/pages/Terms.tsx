import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 opacity-0 animate-[fade-in_0.6s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">Last updated: 23rd December 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-8 opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing this website, accessible from{" "}
                <a href="https://blukaze.com" className="text-primary hover:underline">
                  https://blukaze.com
                </a>
                , you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Blukaze is an independent, unregistered startup offering AI automation and workflow development services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blukaze provides AI-powered automation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>n8n workflow design and implementation</li>
                <li>AI agent development</li>
                <li>System and API integrations</li>
                <li>Automation consulting and optimization</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All services are delivered based on the agreed scope, requirements, and limitations discussed with the client.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise stated in a written agreement:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Clients are granted a non-exclusive, non-transferable license to use the delivered n8n workflows and automations for their internal business operations.</li>
                <li>Ownership of custom workflows is transferred to the client only after full payment is received.</li>
                <li>Blukaze retains the right to reuse non-client-specific components, patterns, and learnings for future projects.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">You may not:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Resell, sublicense, or redistribute workflows without written permission</li>
                <li>Reverse engineer proprietary logic used for internal tooling or templates</li>
                <li>Claim Blukaze's work as your own for resale or public distribution</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. AI & Automation Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI-driven automations may produce probabilistic or non-deterministic outputs.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">Blukaze:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Does not guarantee 100% accuracy of AI-generated results</li>
                <li>Is not responsible for decisions made solely based on AI outputs</li>
                <li>Recommends human review for critical business, financial, or legal actions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You acknowledge that automation is implemented at your own discretion and risk.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payments & Refunds</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All payments must be made as agreed before or during service delivery.</li>
                <li>Due to the custom and digital nature of automation services, payments are non-refundable once work has commenced.</li>
                <li>Delays caused by missing inputs, approvals, or access from the client may affect delivery timelines.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitations of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Blukaze be liable for any damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Loss of data</li>
                <li>Loss of revenue or profits</li>
                <li>Business interruption</li>
                <li>Automation failures caused by third-party tools, APIs, or services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our total liability, if any, shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Revisions and Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blukaze may revise these Terms of Service at any time without prior notice. By continuing to use the website or services, you agree to be bound by the current version.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Tools</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our workflows may rely on third-party platforms (e.g., APIs, AI providers, SaaS tools).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">Blukaze is not responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Downtime or changes in third-party services</li>
                <li>Pricing changes imposed by third-party providers</li>
                <li>Data handling practices of external platforms</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All branding, content, and materials on this website are the intellectual property of Blukaze unless otherwise stated. Unauthorized use is prohibited.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we handle your data.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.
              </p>
            </section>

            {/* Questions */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <a 
                href="mailto:hello@blukaze.com" 
                className="inline-flex items-center gap-2 text-primary hover:underline mt-4 text-lg"
              >
                📧 hello@blukaze.com
              </a>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
