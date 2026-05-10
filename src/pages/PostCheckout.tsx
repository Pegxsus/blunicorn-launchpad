import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, AlertTriangle, ArrowRight, ExternalLink, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

/* ─── Template Catalog for Upsell ─── */
const templates = [
  {
    slug: "zentrade",
    name: "ZenTrade",
    tagline: "AI-Powered Stock Trading Journal & Analytics",
    description:
      "Automate your trading journal with real-time market data enrichment, AI sentiment analysis, and performance dashboards. Track every trade, learn from patterns, and grow your portfolio.",
    image: "/templates/zentrade.png",
    color: "from-yellow-500/20 to-amber-600/20",
    border: "border-yellow-500/20 hover:border-yellow-400/40",
    badge: "Trading & Finance",
    buyLink: "https://rzp.io/rzp/zenTrade",
  },
  {
    slug: "kodoflow",
    name: "KodoFlow",
    tagline: "Automated Candlestick Pattern Detection Engine",
    description:
      "An intelligent n8n workflow that monitors markets, detects candlestick chart patterns, and sends real-time alerts. Built for traders who want automation with precision.",
    image: "/templates/kodoflow.png",
    color: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/20 hover:border-blue-400/40",
    badge: "Market Intelligence",
    buyLink: "https://rzp.io/rzp/kodoFlow",
  },
  {
    slug: "kaizencrypto",
    name: "KaizenCrypto",
    tagline: "Crypto Portfolio Tracker & Automated Alerts",
    description:
      "Track your cryptocurrency holdings, automate buy/sell alerts, and generate weekly performance reports. Powered by CoinGecko & AI insights delivered straight to your inbox.",
    image: "/templates/kaizencrypto.png",
    color: "from-amber-500/20 to-yellow-700/20",
    border: "border-amber-500/20 hover:border-amber-400/40",
    badge: "Crypto & DeFi",
    buyLink: "https://rzp.io/rzp/kaizenCrypto",
  },
  {
    slug: "tensairesume",
    name: "TensaiResume",
    tagline: "ATS-Optimized Resume Builder & Scorer",
    description:
      "AI-powered resume analyzer that scores your resume against ATS filters, suggests keyword optimizations, and generates tailored cover letters for every application.",
    image: "/templates/tensairesume.png",
    color: "from-purple-600/20 to-violet-600/20",
    border: "border-purple-500/20 hover:border-purple-400/40",
    badge: "Career & Hiring",
    buyLink: "https://rzp.io/rzp/tensaiResume",
  },
  {
    slug: "creator-sponsorship",
    name: "Creator Sponsorship",
    tagline: "Brand Deal Finder & Outreach Automation",
    description:
      "Discover sponsorship opportunities, auto-generate personalized pitch decks, and manage brand deal pipelines. Built for YouTube, Instagram & TikTok creators looking to monetize.",
    image: "/templates/creator-sponsorship.png",
    color: "from-red-600/20 to-rose-600/20",
    border: "border-red-500/20 hover:border-red-400/40",
    badge: "Creator Economy",
    buyLink: "https://rzp.io/rzp/creatorSponsorship",
  },
];

/* ─── Confetti Particle ─── */
const ConfettiParticle = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    initial={{ y: -20, x, opacity: 0, rotate: 0 }}
    animate={{
      y: [0, 300, 600],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
      x: [x, x + (Math.random() - 0.5) * 200],
    }}
    transition={{ duration: 3 + Math.random() * 2, delay, ease: "easeOut", repeat: Infinity, repeatDelay: 5 }}
    className="absolute top-0 w-2 h-2 rounded-sm"
    style={{
      background: ["#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#f472b6"][Math.floor(Math.random() * 5)],
    }}
  />
);

const PostCheckout = () => {
  const upsellRef = useRef(null);
  const isUpsellInView = useInView(upsellRef, { once: true, margin: "-60px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Thank You for Your Purchase"
        description="Your template has been purchased successfully. Check your email for delivery. Explore more automation templates from Blukaze."
      />
      <Navbar />

      {/* ═══════════════════════════════════════════════ */}
      {/*  HERO — Thank You Section                       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#030308] pt-28 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#030308]" />

          {/* Celebration Gradient Orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-green-500/15 rounded-full blur-[140px] mix-blend-screen pointer-events-none"
          />
          <motion.div
            animate={{ x: ["-15%", "15%", "-15%"], y: ["5%", "-5%", "5%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[50%] left-[25%] w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
          />
          <motion.div
            animate={{ x: ["15%", "-15%", "15%"], y: ["-5%", "10%", "-5%"] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] right-[15%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
          />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

          {/* Confetti */}
          {Array.from({ length: 20 }).map((_, i) => (
            <ConfettiParticle key={i} delay={i * 0.3} x={Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1400)} />
          ))}

          {/* Fade Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030308] to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Animated Checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.2)]"
              >
                <CheckCircle2 className="w-14 h-14 text-green-400" strokeWidth={1.5} />
              </motion.div>
              {/* Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-green-500/30"
              />
            </div>
          </motion.div>

          {/* Thank You Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-green-400/70 mb-6">
              Purchase Successful
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-6">
              Thank You<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Your template has been purchased successfully and is on its way to your inbox.
            </p>
          </motion.div>

          {/* ─── Delivery Info Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 w-full max-w-2xl"
          >
            <div className="glass-card p-8 md:p-10 text-left space-y-6 border border-white/[0.08] bg-white/[0.02]">
              {/* Email Delivery Row */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Check Your Email</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Your template will be delivered via email from{" "}
                    <span className="text-blue-400 font-semibold">delivery@blukaze.com</span>.
                    Please allow up to 5 minutes for delivery.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Spam Warning */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Didn't Receive It?</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Please check your <span className="text-amber-400 font-semibold">Spam / Junk folder</span>.
                    Sometimes email providers route automated delivery emails there. If you still don't receive it after 15 minutes,
                    contact us at{" "}
                    <a href="mailto:support@blukaze.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                      support@blukaze.com
                    </a>.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Secure Purchase */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Secure Purchase</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Your payment was processed securely. A receipt has been sent to your email for your records.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/*  UPSELL — Browse More Templates                 */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden" ref={upsellRef}>
        {/* Section Background */}
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isUpsellInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-6">
              Explore Our Collection
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-white mb-6">
              Power Up With More{" "}
              <span className="magic-text">Templates</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
              Each template is a battle-tested n8n workflow, ready to deploy. Automate faster, ship smarter.
            </p>
          </motion.div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {templates.map((template, i) => (
              <motion.div
                key={template.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isUpsellInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`group relative h-full rounded-2xl border ${template.border} bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden`}
                >
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-white/[0.03] border border-white/[0.05]">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                          <Sparkles className="w-3 h-3" />
                          {template.badge}
                        </span>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-black text-white mb-1 tracking-tight">{template.name}</h3>
                      <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                        {template.tagline}
                      </p>
                      <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">
                        {template.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-end mt-auto pt-4 border-t border-white/5">
                        <a href={template.buyLink} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            className="rounded-full px-6 h-10 font-bold text-xs bg-blue-600 hover:bg-blue-500 hover:scale-[1.03] transition-all border-none shadow-lg shadow-blue-600/20 group/btn"
                          >
                            Get Template
                            <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isUpsellInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-16"
          >
            <div className="glass-card inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-white/[0.06]">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-sm text-white/50">
                <span className="text-white font-semibold">Need a custom template?</span>{" "}
                We build bespoke automation workflows tailored to your exact business needs.
              </p>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full px-6 h-9 font-bold text-xs border-white/20 text-white hover:bg-white/10 transition-all group flex-shrink-0"
                >
                  Let's Talk
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
};

export default PostCheckout;
