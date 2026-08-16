import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Left Column — Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-base">
                E
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                EMINENTURE
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Empowering enterprises through digital transformation, intelligent automation, and data-driven solutions.
            </p>
          </div>

          {/* Middle Column — Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#bpm" className="hover:text-emerald-400 transition-colors">
                  Business Process Management
                </Link>
              </li>
              <li>
                <Link href="/#ai-analytics" className="hover:text-emerald-400 transition-colors">
                  AI & Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/#cx" className="hover:text-emerald-400 transition-colors">
                  Customer Experience
                </Link>
              </li>
              <li>
                <Link href="/#cloud-digital" className="hover:text-emerald-400 transition-colors">
                  Cloud & Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column — Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#services" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-400 transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — Copyright & Legal Links */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Eminenture. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
