import { BlogArticle } from "@/data/blog";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import ArticleMeta from "./ArticleMeta";

interface ArticleHeaderProps {
  article: BlogArticle;
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <header className="pt-28 pb-6 md:pt-36 md:pb-10 max-w-4xl mx-auto px-5 sm:px-6">
      {/* Back to Blog link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-blue-400 mb-8 transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Insights & Articles</span>
      </Link>

      {/* Category Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-black uppercase tracking-[0.25em] text-blue-400 mb-6 block w-fit">
        <Sparkles size={12} />
        <span>{article.category}</span>
      </div>

      {/* Massive Editorial Headline */}
      <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-black tracking-tight leading-[1.05] text-white mb-6">
        {article.title}
      </h1>

      {/* Deck / Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-normal leading-relaxed mb-8 max-w-3xl">
        {article.subtitle}
      </p>

      {/* Meta Bar */}
      <ArticleMeta article={article} />
    </header>
  );
};

export default ArticleHeader;
