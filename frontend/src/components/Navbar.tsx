"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                EMINENTURE <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
                Enterprise BPM & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link
              href="/"
              className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 hover:after:w-full after:transition-all"
            >
              Overview
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative cursor-pointer py-1">
              <span className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                Solutions ▾
              </span>
              <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-2">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-2xl space-y-1 text-xs">
                  <Link
                    href="/#bpm"
                    className="block p-2 hover:bg-slate-800/80 rounded-lg text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                  >
                    Business Process Management
                  </Link>
                  <Link
                    href="/#ai-analytics"
                    className="block p-2 hover:bg-slate-800/80 rounded-lg text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                  >
                    AI Data & Analytics
                  </Link>
                  <Link
                    href="/#cx"
                    className="block p-2 hover:bg-slate-800/80 rounded-lg text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                  >
                    Customer Experience (CX)
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/#stats"
              className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 hover:after:w-full after:transition-all"
            >
              Enterprise Metrics
            </Link>
            <Link
              href="/#services"
              className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 hover:after:w-full after:transition-all"
            >
              Capabilities
            </Link>
          </nav>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-emerald-400 font-medium py-1"
          >
            Overview
          </Link>
          
          <div className="pl-2 border-l-2 border-slate-800 space-y-2 py-1">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Solutions</span>
            <Link
              href="/#bpm"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-emerald-400"
            >
              Business Process Management
            </Link>
            <Link
              href="/#ai-analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-emerald-400"
            >
              AI Data & Analytics
            </Link>
            <Link
              href="/#cx"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-emerald-400"
            >
              Customer Experience (CX)
            </Link>
          </div>

          <Link
            href="/#stats"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-emerald-400 font-medium py-1"
          >
            Enterprise Metrics
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-emerald-400 font-medium py-1"
          >
            Capabilities
          </Link>
        </div>
      )}
    </header>
  );
}
