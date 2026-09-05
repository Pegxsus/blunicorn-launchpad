import { useEffect } from "react";
import { BlogArticle } from "@/data/blog";

interface SEOArticleProps {
  article: BlogArticle;
}

export const SEOArticle = ({ article }: SEOArticleProps) => {
  useEffect(() => {
    const canonicalUrl = `https://blukaze.com/blog/${article.slug}`;
    const pageTitle = `${article.title} | Blukaze Insights`;

    // Title
    document.title = pageTitle;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", article.subtitle);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // OpenGraph Tags
    const ogTags = [
      { property: "og:type", content: "article" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: article.subtitle },
      { property: "og:image", content: "https://blukaze.com/og-image.png" },
      { property: "article:published_time", content: article.publishedAt },
      { property: "article:author", content: article.author.name },
      { property: "article:section", content: article.category },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter Tags
    const twitterTags = [
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: article.subtitle },
      { property: "twitter:image", content: "https://blukaze.com/og-image.png" },
    ];

    twitterTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // JSON-LD Structured Data for Article & Breadcrumbs
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${canonicalUrl}#article`,
          "isPartOf": {
            "@type": "WebPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": pageTitle,
          },
          "headline": article.title,
          "description": article.subtitle,
          "datePublished": article.publishedAt,
          "dateModified": article.updatedAt || article.publishedAt,
          "mainEntityOfPage": canonicalUrl,
          "author": {
            "@type": "Person",
            "name": article.author.name,
            "jobTitle": article.author.role,
          },
          "publisher": {
            "@type": "Organization",
            "name": "Blukaze",
            "url": "https://blukaze.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://blukaze.com/favicon.png",
            },
          },
          "articleSection": article.category,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://blukaze.com/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://blukaze.com/blog",
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": article.title,
              "item": canonicalUrl,
            },
          ],
        },
      ],
    };

    let scriptTag = document.getElementById("article-json-ld");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "article-json-ld";
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      // Clean up script tag on unmount
      const existingScript = document.getElementById("article-json-ld");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [article]);

  return null;
};

export default SEOArticle;
