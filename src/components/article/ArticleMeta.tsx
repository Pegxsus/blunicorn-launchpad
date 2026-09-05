import { useState } from "react";
import { BlogArticle } from "@/data/blog";
import { Share2, Check, Linkedin, Twitter } from "lucide-react";

interface ArticleMetaProps {
  article: BlogArticle;
}

export const ArticleMeta = ({ article }: ArticleMetaProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://blukaze.com/blog/${article.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-white/10 my-8 text-xs font-medium text-white/60">
      {/* Author Name */}
      <p className="text-xs sm:text-sm font-medium text-white/70">
        By <span className="font-bold text-white">{article.author.name}</span>
      </p>

      {/* Date, Read time, Share buttons */}
      <div className="flex items-center gap-6 text-white/50 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-3 text-[11px] sm:text-xs">
          <span>{article.publishedAt}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>{article.readTime}</span>
        </div>

        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Share Icons */}
        <div className="flex items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            title="Share on X / Twitter"
          >
            <Twitter size={14} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            title="Share on LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            title="Copy Article Link"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleMeta;
