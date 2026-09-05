import { Sparkles, Lightbulb, AlertCircle } from "lucide-react";

interface ArticleCalloutProps {
  type?: "important" | "tip" | "insight";
  title?: string;
  text: string;
}

export const ArticleCallout = ({ type = "insight", title, text }: ArticleCalloutProps) => {
  const icons = {
    insight: Sparkles,
    tip: Lightbulb,
    important: AlertCircle,
  };

  const Icon = icons[type] || Sparkles;

  return (
    <aside className="my-10 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
        <Icon size={20} />
      </div>
      <div>
        {title && (
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
            {title}
          </h4>
        )}
        <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium">
          {text}
        </p>
      </div>
    </aside>
  );
};

export default ArticleCallout;
