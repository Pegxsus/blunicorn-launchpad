const toolsRow1 = [
  { name: "n8n", slug: "n8n", cdn: "simpleicons" },
  { name: "OpenAI", slug: "openai" },
  { name: "Supabase", slug: "supabase" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Shopify", slug: "shopify" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Airtable", slug: "airtable" },
];

const toolsRow2 = [
  { name: "Slack", slug: "slack" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Notion", slug: "notion" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Twilio", slug: "twilio" },
  { name: "Jira", slug: "jira" },
];

const getLogoUrl = (slug: string, cdn?: string) => {
  if (cdn === "simpleicons") {
    return `https://cdn.simpleicons.org/${slug}/white`;
  }
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
};

const ToolBadge = ({ name, slug, cdn }: { name: string; slug: string; cdn?: string }) => (
  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] transition-colors whitespace-nowrap mx-3 flex-shrink-0">
    <img
      src={getLogoUrl(slug, cdn)}
      alt={name}
      className="w-5 h-5 brightness-0 invert opacity-80"
      loading="lazy"
    />
    <span className="text-sm font-semibold text-white/80">{name}</span>
  </div>
);

const ToolsMarqueeSection = () => {
  return (
    <section className="py-24 bg-[#030308] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
          Technology Infrastructure
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-2 tracking-tight">
          Built with the tools businesses already use.
        </h2>
        <p className="text-sm text-white/50 max-w-lg mx-auto">
          We work across your existing stack to turn legacy tools into automated systems.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-5">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-ticker flex items-center">
            {[...toolsRow1, ...toolsRow1].map((tool, i) => (
              <ToolBadge key={`row1-${i}`} {...tool} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
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
