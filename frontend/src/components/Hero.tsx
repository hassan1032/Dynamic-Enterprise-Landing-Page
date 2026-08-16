import Link from "next/link";

interface HeroProps {
  headline: string;
  subtitle: string;
  ctaText: string;
  secondaryCta?: string;
}

export default function Hero({ headline, subtitle, ctaText, secondaryCta }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Next-Gen Enterprise Platform</span>
        </div>

        {/* Cvent-Style High Impact Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
          {headline || "Transforming Global Enterprises with Next-Gen Digital Solutions"}
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          {subtitle || "Eminenture delivers tech-driven business process management, data analytics, and automation to power Fortune 500 growth."}
        </p>

        {/* Dynamic Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#services"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>{ctaText || "Explore Enterprise Solutions"}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/#services"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 bg-slate-800/80 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <span>{secondaryCta || "Schedule Consultation"}</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Empowering Operations For Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-slate-400 font-bold text-lg tracking-wider">MICROSOFT</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">INFOSYS</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">ACCENTURE</span>
            <span className="text-slate-400 font-bold text-lg tracking-wider">CONCENTRIX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
