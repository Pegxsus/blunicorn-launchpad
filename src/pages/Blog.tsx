import { useState } from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blog";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CursorGlow from "@/components/landing/CursorGlow";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCallDialog from "@/components/landing/BookCallDialog";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const categories = ["All", "BUSINESS AUTOMATION", "ENGINEERING", "AI AGENTS"];

  const filteredArticles = selectedCategory === "All"
    ? blogArticles
    : blogArticles.filter((a) => a.category === selectedCategory);

  const featuredArticle = blogArticles[0];

  return (
    <div className="min-h-screen bg-[#030308] text-foreground overflow-x-hidden">
      <SEO
        title="Blukaze Insights | AI Automation & Business Process Engineering"
        description="Perspectives and technical guides on business automation, n8n architecture, AI agents, RAG, and workflow systems."
      />
      <CursorGlow />
      <Navbar />

      <main className="pt-28 pb-24 md:pt-36">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-black uppercase tracking-[0.25em] text-blue-400 mb-4">
              <Sparkles size={12} />
              <span>BLUKAZE PUBLICATION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Thinking on AI Automation &amp; Workflow Systems.
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              In-depth essays, architectural breakdowns, and strategic guides on turning manual operations into reliable software systems.
            </p>
          </div>

          {/* Featured Hero Article */}
          {featuredArticle && (
            <div className="mb-20">
              <Link
                to={`/blog/${featuredArticle.slug}`}
                className="group relative block rounded-3xl bg-gradient-to-br from-white/[0.03] via-blue-950/20 to-white/[0.01] border border-white/10 hover:border-blue-500/40 p-8 sm:p-12 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        FEATURED ARTICLE • {featuredArticle.category}
                      </span>
                      <span className="text-xs text-white/40">{featuredArticle.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors leading-tight tracking-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl">
                      {featuredArticle.subtitle}
                    </p>

                    <div className="flex items-center gap-3 pt-4 text-xs text-white/50">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 p-0.5 flex items-center justify-center overflow-hidden">
                        <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-full h-full object-contain brightness-0 invert" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">{featuredArticle.author.name}</span>
                        <span className="text-[11px]">{featuredArticle.publishedAt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors px-6 py-3.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <span>Read Article</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/[0.03] text-white/50 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-white/40">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3 leading-snug tracking-tight">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed line-clamp-3 mb-6">
                    {article.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                  <span>{article.publishedAt}</span>
                  <div className="flex items-center gap-1 font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Audit Banner */}
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-[#050510] border border-blue-500/20 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Want to see where your team is wasting time?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto mb-6">
              Get a free 30-minute operational audit with a Blukaze automation engineer. We'll identify your highest-leverage workflows.
            </p>
            <Button
              onClick={() => setIsBookCallOpen(true)}
              className="rounded-full px-8 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
            >
              <span>Get Free Automation Audit</span>
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>

        </div>
      </main>

      <Footer />
      <BookCallDialog open={isBookCallOpen} onOpenChange={setIsBookCallOpen} />
    </div>
  );
};

export default Blog;
