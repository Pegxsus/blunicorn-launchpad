import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    document.title = title.includes("Blukaze") 
      ? title 
      : `${title} | Blukaze | AI Automation & Business Process Automation`;
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }
  }, [title, description, keywords]);

  return null;
};

export default SEO;
