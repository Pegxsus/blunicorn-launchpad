import { Bot, ShoppingBag, Zap, Hash, Cloud, Database, Mail, Facebook, Server, Calendar, Table, GitMerge, Settings, Code, Layers, FileJson, MessageSquare, BarChart, Smartphone, Globe } from "lucide-react";

const toolsRow1 = [
  { name: "OpenAI", icon: Bot, color: "text-emerald-400" },
  { name: "Shopify", icon: ShoppingBag, color: "text-green-400" },
  { name: "Google Workspace", icon: Globe, color: "text-blue-600" },
  { name: "Power Automate", icon: Settings, color: "text-blue-600" },
  { name: "Make.com", icon: GitMerge, color: "text-purple-400" },
  { name: "Zapier", icon: Zap, color: "text-orange-400" },
  { name: "Slack", icon: Hash, color: "text-rose-400" },
  { name: "HubSpot", icon: Layers, color: "text-orange-500" },
  { name: "Salesforce", icon: Cloud, color: "text-blue-600" },
  { name: "Airtable", icon: Database, color: "text-yellow-400" },
  { name: "n8n", icon: Code, color: "text-red-400" },
];

const toolsRow2 = [
  { name: "Calendly", icon: Calendar, color: "text-blue-600" },
  { name: "Twilio", icon: MessageSquare, color: "text-red-400" },
  { name: "Meta", icon: Facebook, color: "text-blue-600" },
  { name: "Discord", icon: MessageSquare, color: "text-indigo-400" },
  { name: "Power BI", icon: BarChart, color: "text-yellow-500" },
  { name: "QuickBooks", icon: FileJson, color: "text-green-500" },
  { name: "AWS", icon: Server, color: "text-orange-400" },
  { name: "Jira", icon: Layers, color: "text-blue-600" },
  { name: "Mailchimp", icon: Mail, color: "text-yellow-400" },
  { name: "Google Sheets", icon: Table, color: "text-green-400" },
  { name: "PowerApps", icon: Smartphone, color: "text-purple-500" },
];

const ToolBadge = ({ name, icon: Icon, color }: { name: string, icon: any, color: string }) => (
  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors whitespace-nowrap mx-3 flex-shrink-0">
    <Icon className={`w-4 h-4 ${color}`} />
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
