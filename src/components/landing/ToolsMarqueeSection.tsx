const toolsRow1 = [
  { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
  { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Power Automate", logo: "https://cdn.simpleicons.org/powerautomate/0066FF" },
  { name: "Make", logo: "https://cdn.simpleicons.org/make/6D00CC" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
];

const toolsRow2 = [
  { name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { name: "PowerApps", logo: "https://cdn.simpleicons.org/powerapps/742774" },
  { name: "Calendly", logo: "https://cdn.simpleicons.org/calendly/006BFF" },
  { name: "Twilio", logo: "https://cdn.simpleicons.org/twilio/F22F46" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0081FB" },
  { name: "Discord", logo: "https://cdn.simpleicons.org/discord/5865F2" },
  { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811" },
  { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/ffffff" },
];

const ToolBadge = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors whitespace-nowrap mx-3 flex-shrink-0">
    <img src={logo} alt={name} className="w-5 h-5" loading="lazy" />
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
