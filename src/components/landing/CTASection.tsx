import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Join our newsletter
              </h2>
              <p className="text-muted-foreground">
                Stay updated with the latest innovations from Blunicorn
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-auto">
              <div className="flex gap-3 mb-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-[240px] bg-background border-border"
                />
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing you agree with our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;