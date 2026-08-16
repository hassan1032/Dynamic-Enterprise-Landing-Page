export default function Capabilities() {
  const capabilities = [
    {
      id: "bpm",
      title: "Business Process Management (BPM)",
      category: "Operations",
      description: "End-to-end workflow automation, back-office optimization, and high-precision data processing designed for Fortune 500 enterprises.",
      icon: "⚡"
    },
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics & BI",
      category: "Intelligence",
      description: "Transform raw data into actionable decision intelligence using modern machine learning models and predictive operational dashboards.",
      icon: "🧠"
    },
    {
      id: "cx",
      title: "Omnichannel Customer Experience (CX)",
      category: "Engagement",
      description: "Elevate customer delight with seamless, round-the-clock multi-channel support services powered by AI assistants and human experts.",
      icon: "🌐"
    },
    {
      id: "cloud-digital",
      title: "Digital Transformation & Cloud",
      category: "Engineering",
      description: "Modernize legacy enterprise systems into resilient microservice architectures on AWS, Azure, and Google Cloud Platform.",
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0f172a] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
              Capabilities & Solutions
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Capability Matrix
            </p>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Architected to drive operational agility, data security, and sustainable business transformation at global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              id={cap.id}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800/80 group flex flex-col justify-between scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 shadow-inner">
                    {cap.icon}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                    {cap.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                <span>Learn More About Capability</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
