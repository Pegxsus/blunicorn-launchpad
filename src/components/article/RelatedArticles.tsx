import { BlogArticle, blogArticles } from "@/data/blog";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  relatedSlugs?: string[];
}

export const RelatedArticles = ({ currentSlug, relatedSlugs = [] }: RelatedArticlesProps) => {
  const articles = blogArticles
    .filter((a) => a.slug !== currentSlug)
    .filter((a) => relatedSlugs.length === 0 || relatedSlugs.includes(a.slug))
    .slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="my-20 pt-14 border-t border-white/10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-blue-400 block mb-1">
            CONTINUE READING
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Related Insights & Systems Articles
          </h3>
        </div>
        <Link
          to="/blog"
          className="text-xs font-bold text-blue-400 hover:text-blue-300 hidden sm:flex items-center gap-1 transition-colors"
        >
          <span>View All Articles</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.slug}`}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {article.category}
                </span>
                <span className="text-xs text-white/40">{article.readTime}</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3 leading-snug">
                {article.title}
              </h4>
              <p className="text-xs text-white/60 leading-relaxed line-clamp-2 mb-6">
                {article.subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 group-hover:text-blue-400 transition-colors pt-4 border-t border-white/5">
              <span>Read Article</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
