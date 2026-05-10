const toolsRow1 = [
  { name: "Salesforce", slug: "salesforce" },
  { name: "Airtable", slug: "airtable" },
  { name: "n8n", slug: "n8n", cdn: "simpleicons" },
  { name: "OpenAI", slug: "openai" },
  { name: "Shopify", slug: "shopify" },
  { name: "Google", slug: "google" },
  { name: "Power Automate", slug: "powerautomate" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Slack", slug: "slack" },
  { name: "HubSpot", slug: "hubspot" },
];

const toolsRow2 = [
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "PowerApps", slug: "powerapps" },
  { name: "Calendly", slug: "calendly" },
  { name: "Twilio", slug: "twilio" },
  { name: "Meta", slug: "meta" },
  { name: "Discord", slug: "discord" },
  { name: "Power BI", slug: "powerbi" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Jira", slug: "jira" },
  { name: "Notion", slug: "notion" },
];

const getLogoUrl = (slug: string, cdn?: string) => {
  if (cdn === "simpleicons") {
    return `https://cdn.simpleicons.org/${slug}/white`;
  }
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
};

const ToolBadge = ({ name, slug, cdn }: { name: string; slug: string; cdn?: string }) => (
  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors whitespace-nowrap mx-3 flex-shrink-0">
    <img
      src={getLogoUrl(slug, cdn)}
      alt={name}
      className="w-5 h-5 brightness-0 invert opacity-70"
      loading="lazy"
    />
    <span className="text-sm font-semibold text-white/70">{name}</span>
  </div>
);

const ToolsMarqueeSection = () => {
  return (
    <section className="py-20 bg-[#030308] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
          We integrate with 500+ platforms seamlessly
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-6">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Left to Right) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-ticker flex items-center">
            {[...toolsRow1, ...toolsRow1].map((tool, i) => (
              <ToolBadge key={`row1-${i}`} {...tool} />
            ))}
          </div>
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-ticker-reverse flex items-center">
            {[...toolsRow2, ...toolsRow2].map((tool, i) => (
              <ToolBadge key={`row2-${i}`} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsMarqueeSection;
