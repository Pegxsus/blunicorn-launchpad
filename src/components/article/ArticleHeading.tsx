import React from "react";
import { Link } from "lucide-react";

interface ArticleHeadingProps {
  id: string;
  number?: string;
  level?: 2 | 3;
  children: React.ReactNode;
}

export const ArticleHeading = ({ id, number, level = 2, children }: ArticleHeadingProps) => {
  const Tag = level === 2 ? "h2" : "h3";

  return (
    <Tag
      id={id}
      className={`group relative scroll-mt-28 font-black text-white tracking-tight flex items-baseline gap-3 ${
        level === 2 ? "text-2xl sm:text-3xl md:text-4xl mt-14 mb-6 pt-6 border-t border-white/10" : "text-xl sm:text-2xl mt-10 mb-4"
      }`}
    >
      {number && (
        <span className="text-blue-500 font-mono text-lg sm:text-xl font-bold">
          {number}
        </span>
      )}
      <span className="flex-1">{children}</span>
      <a
        href={`#${id}`}
        aria-label={`Link to section ${children}`}
        className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-blue-400 transition-opacity ml-2"
      >
        <Link size={18} />
      </a>
    </Tag>
  );
};

export default ArticleHeading;
