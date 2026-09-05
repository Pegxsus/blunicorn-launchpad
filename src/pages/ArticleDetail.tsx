import { useParams, Link } from "react-router-dom";
import { blogArticles } from "@/data/blog";
import SEOArticle from "@/components/SEOArticle";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CursorGlow from "@/components/landing/CursorGlow";
import ReadingProgress from "@/components/article/ReadingProgress";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleHeroVisual from "@/components/article/ArticleHeroVisual";
import ArticleHeading from "@/components/article/ArticleHeading";
import ArticleStat from "@/components/article/ArticleStat";
import ArticleQuote from "@/components/article/ArticleQuote";
import ArticleCallout from "@/components/article/ArticleCallout";
import ArticleTable from "@/components/article/ArticleTable";
import ArticleCTA from "@/components/article/ArticleCTA";
import AuthorCard from "@/components/article/AuthorCard";
import RelatedArticles from "@/components/article/RelatedArticles";
import TableOfContents from "@/components/article/TableOfContents";
import NotFound from "./NotFound";

export const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#030308] text-foreground overflow-x-hidden">
      {/* SEO & Structured Data */}
      <SEOArticle article={article} />

      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Cursor Glow & Minimal Header */}
      <CursorGlow />
      <Navbar />

      <main>
        {/* Editorial Article Header */}
        <ArticleHeader article={article} />

        {/* Hero Visual */}
        <ArticleHeroVisual caption={article.heroVisual.caption} />

        {/* Main Editorial Content Container */}
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl pt-6 pb-20">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
            
            {/* Left Sidebar: Sticky Table of Contents (Desktop Only) */}
            <TableOfContents sections={article.sections} />

            {/* Center Reading Column: Strictly constrained to ~720px for optimal line length */}
            <article className="w-full max-w-[720px] mx-auto text-white/80 font-normal leading-[1.8] text-base sm:text-lg">
              
              {article.sections.map((section, index) => {
                const showInArticleCTA = index === (article.inArticleCTA?.triggerIndex ?? 3);

                return (
                  <div key={section.id} className="mb-12">
                    {/* H2 Heading */}
                    <ArticleHeading id={section.id} number={section.number} level={2}>
                      {section.title}
                    </ArticleHeading>

                    {/* Content Paragraphs */}
                    {section.content.map((pText, pIdx) => (
                      <p key={pIdx} className="mb-6 leading-[1.8] text-white/80">
                        {pText}
                      </p>
                    ))}

                    {/* Stat Highlight Block */}
                    {section.stat && (
                      <ArticleStat
                        value={section.stat.value}
                        label={section.stat.label}
                        description={section.stat.description}
                      />
                    )}

                    {/* Pull-quote Block */}
                    {section.quote && (
                      <ArticleQuote quote={section.quote} author={article.author.name} />
                    )}

                    {/* Callout Box */}
                    {section.callout && (
                      <ArticleCallout
                        type={section.callout.type}
                        title={section.callout.title}
                        text={section.callout.text}
                      />
                    )}

                    {/* Responsive Table */}
                    {section.table && (
                      <ArticleTable
                        headers={section.table.headers}
                        rows={section.table.rows}
                      />
                    )}

                    {/* List Items */}
                    {section.list && (
                      <ul className="my-6 space-y-2 list-disc list-inside text-white/80">
                        {section.list.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Contextual In-Article CTA */}
                    {showInArticleCTA && (
                      <ArticleCTA
                        type="in-article"
                        headline={article.inArticleCTA.headline}
                        subtext={article.inArticleCTA.subtext}
                        primaryButtonText={article.inArticleCTA.buttonText}
                      />
                    )}
                  </div>
                );
              })}

              {/* End of Article Final Conversion Section */}
              <ArticleCTA
                type="final"
                headline={article.finalCTA.headline}
                subtext={article.finalCTA.subtext}
                primaryButtonText={article.finalCTA.primaryButtonText}
                secondaryButtonText={article.finalCTA.secondaryButtonText}
              />

              {/* Related Articles Discovery */}
              <RelatedArticles currentSlug={article.slug} relatedSlugs={article.relatedSlugs} />

            </article>

          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
};

export default ArticleDetail;
