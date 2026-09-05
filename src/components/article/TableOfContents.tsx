import { useState, useEffect } from "react";
import { ArticleSection } from "@/data/blog";
import { List } from "lucide-react";

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="hidden lg:block sticky top-32 self-start w-64 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs">
      <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 mb-4 pb-3 border-b border-white/10">
        <List size={13} className="text-blue-400" />
        <span>ARTICLE OUTLINE</span>
      </div>

      <ul className="space-y-3">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`flex items-start gap-2 transition-colors leading-normal ${
                  isActive ? "text-blue-400 font-bold" : "text-white/50 hover:text-white/90 font-medium"
                }`}
              >
                <span className="font-mono text-[10px] opacity-60 mt-0.5">{sec.number}</span>
                <span className="line-clamp-2">{sec.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
