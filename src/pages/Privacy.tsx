import { Mail } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: 23rd December 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-foreground/90 leading-relaxed">
                Blunicorn ("we", "our", or "us") operates the website{" "}
                <a href="https://blunicorn.org" className="text-primary hover:underline">
                  https://blunicorn.org
                </a>
                . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
                  <p className="text-foreground/80">
                    We may collect personal information you voluntarily provide, including:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Company name</li>
                    <li>Contact details</li>
                    <li>Any information shared during discovery calls, forms, or emails</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Technical & Usage Data</h3>
                  <p className="text-foreground/80">
                    We may automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring URLs</li>
                  </ul>
                  <p className="text-foreground/80">
                    This data helps us understand how visitors use our website and improve performance.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                <p className="text-foreground/80">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Respond to inquiries and discovery calls</li>
                  <li>Provide and improve our automation services</li>
                  <li>Communicate project updates or support information</li>
                  <li>Improve website experience and performance</li>
                  <li>Maintain security and prevent misuse</li>
                </ul>
                <p className="text-foreground/80 font-medium">
                  We do not sell or rent your personal data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. AI & Automation Data</h2>
                <p className="text-foreground/80">
                  When providing automation services:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>We may temporarily access data required to build or test workflows</li>
                  <li>Client data is used only for the agreed scope of work</li>
                  <li>We do not retain client data beyond what is necessary</li>
                </ul>
                <p className="text-foreground/80">
                  Clients are responsible for ensuring they have the rights to share data used in automations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
                <p className="text-foreground/80">
                  We may use third-party tools such as:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Scheduling tools (e.g., Calendly)</li>
                  <li>Analytics platforms</li>
                  <li>AI model providers</li>
                  <li>Hosting and infrastructure providers</li>
                </ul>
                <p className="text-foreground/80">
                  These services have their own privacy policies. Blunicorn is not responsible for third-party data handling practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Cookies</h2>
                <p className="text-foreground/80">
                  We may use cookies or similar technologies to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Improve website functionality</li>
                  <li>Analyze traffic and usage patterns</li>
                </ul>
                <p className="text-foreground/80">
                  You can choose to disable cookies through your browser settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Data Security</h2>
                <p className="text-foreground/80">
                  We take reasonable measures to protect your information, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Secure credential handling</li>
                  <li>Limited access to sensitive data</li>
                  <li>Best practices for API and workflow security</li>
                </ul>
                <p className="text-foreground/80">
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
                <p className="text-foreground/80">
                  We retain personal information only as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Provide services</li>
                  <li>Meet legal or operational requirements</li>
                </ul>
                <p className="text-foreground/80">
                  Once no longer needed, data is securely deleted or anonymized.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Your Rights</h2>
                <p className="text-foreground/80">
                  Depending on applicable laws, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 ml-4">
                  <li>Request access to your data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent for communications</li>
                </ul>
                <p className="text-foreground/80">
                  You can exercise these rights by contacting us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
                <p className="text-foreground/80">
                  Blunicorn does not knowingly collect data from individuals under the age of 13. If you believe such data has been collected, please contact us for removal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Policy</h2>
                <p className="text-foreground/80">
                  We may update this Privacy Policy at any time. Updates will be posted on this page with a revised date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
                <p className="text-foreground/80">
                  If you have any questions about this Privacy Policy or how your data is handled, contact us at:
                </p>
                <a
                  href="mailto:hello@blunicorn.org"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  hello@blunicorn.org
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
