interface ArticleStatProps {
  value: string;
  label: string;
  description?: string;
}

export const ArticleStat = ({ value, label, description }: ArticleStatProps) => {
  return (
    <div className="my-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-[#050510] border border-blue-500/20 relative overflow-hidden group">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white tracking-tight mb-2">
          {value}
        </div>
        <div className="text-base sm:text-lg font-bold text-white mb-2">
          {label}
        </div>
        {description && (
          <p className="text-xs sm:text-sm text-white/50 max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticleStat;
