interface ArticleQuoteProps {
  quote: string;
  author?: string;
}

export const ArticleQuote = ({ quote, author }: ArticleQuoteProps) => {
  return (
    <blockquote className="my-10 pl-6 sm:pl-8 border-l-2 border-blue-500 py-2">
      <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/90 leading-snug tracking-tight">
        "{quote}"
      </p>
      {author && (
        <cite className="block text-xs font-mono uppercase tracking-widest text-white/40 mt-3 not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
};

export default ArticleQuote;
