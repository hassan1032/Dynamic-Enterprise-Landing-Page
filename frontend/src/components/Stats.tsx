interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  const displayStats = stats && stats.length > 0 ? stats : [
    {
      id: "1",
      value: "500+",
      label: "Global Enterprise Clients",
      description: "Trusted by Fortune 500 leaders worldwide"
    },
    {
      id: "2",
      value: "99.8%",
      label: "SLA Accuracy Rate",
      description: "Delivering unmatched process reliability"
    },
    {
      id: "3",
      value: "15M+",
      label: "Transactions Processed Daily",
      description: "Scalable cloud & AI infrastructure"
    },
    {
      id: "4",
      value: "24/7",
      label: "Global Operations Center",
      description: "Continuous support across timezones"
    }
  ];

  return (
    <section id="stats" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
            Real-Time Enterprise Impact
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Scale & Operational Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => (
            <div
              key={stat.id || index}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between relative group"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl group-hover:bg-emerald-500/25 transition-all"></div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mb-3 tracking-tight">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
                  {stat.label}
                </h3>
              </div>

              {stat.description && (
                <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800/80">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
