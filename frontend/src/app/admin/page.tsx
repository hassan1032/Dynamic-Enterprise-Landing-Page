"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface ContentState {
  heroHeadline: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryCta?: string;
  stats: StatItem[];
}

const PRESET_TEMPLATES = [
  {
    name: "Eminenture Core",
    headline: "Transforming Global Enterprises with Next-Gen Digital Solutions",
    subtitle: "Eminenture delivers tech-driven business process management, data analytics, and automation to power Fortune 500 growth.",
    ctaText: "Explore Enterprise Solutions",
    secondaryCta: "Schedule Consultation",
    stats: [
      { id: "1", value: "500+", label: "Global Enterprise Clients", description: "Trusted by Fortune 500 leaders worldwide" },
      { id: "2", value: "99.8%", label: "SLA Accuracy Rate", description: "Delivering unmatched process reliability" },
      { id: "3", value: "15M+", label: "Transactions Processed Daily", description: "Scalable cloud & AI infrastructure" },
      { id: "4", value: "24/7", label: "Global Operations Center", description: "Continuous support across timezones" }
    ]
  },
  {
    name: "Cvent-Style High Impact",
    headline: "Powering Event Technology & Operational Intelligence At Scale",
    subtitle: "Deliver extraordinary experiences with dynamic cloud infrastructure, real-time analytics, and automated workflow orchestrations.",
    ctaText: "Schedule Live Demonstration",
    secondaryCta: "Contact Sales Team",
    stats: [
      { id: "1", value: "2.5M+", label: "Annual Events Managed", description: "High-volume transactional capability" },
      { id: "2", value: "99.99%", label: "Uptime Guaranteed", description: "Enterprise grade reliability SLA" },
      { id: "3", value: "120+", label: "Countries Served", description: "Global compliance and localization" },
      { id: "4", value: "4.9/5", label: "Client Satisfaction", description: "Voted top B2B operational vendor" }
    ]
  },
  {
    name: "Infosys-Inspired AI Tech",
    headline: "Accelerating Enterprise AI & Digital Business Operations",
    subtitle: "Partner with Eminenture to build resilient AI workflows, automate complex back-office functions, and optimize enterprise agility.",
    ctaText: "Discover AI Solutions",
    secondaryCta: "Explore Case Studies",
    stats: [
      { id: "1", value: "$4.2B", label: "Client Value Generated", description: "Measurable ROI from AI automation" },
      { id: "2", value: "10x", label: "Faster Deployment", description: "Pre-built enterprise connectors" },
      { id: "3", value: "850+", label: "AI Models Deployed", description: "Tailored to finance, healthcare & retail" },
      { id: "4", value: "100%", label: "Data Encryption", description: "Zero-trust SOC 2 security framework" }
    ]
  }
];

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const [formData, setFormData] = useState<ContentState>({
    heroHeadline: "",
    heroSubtitle: "",
    heroCtaText: "",
    heroSecondaryCta: "",
    stats: []
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://eminenture-backend-db4y.onrender.com";

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/content`, { cache: "no-store" });
      const json = await res.json();
      if (json.success && json.data) {
        const data = json.data;
        const hero = data.hero || {};
        setFormData({
          heroHeadline: hero.headline || data.heroHeadline || "",
          heroSubtitle: hero.subtitle || data.heroSubtitle || "",
          heroCtaText: hero.primaryCta || data.heroCtaText || "",
          heroSecondaryCta: hero.secondaryCta || data.heroSecondaryCta || "Schedule Consultation",
          stats: data.stats || []
        });
      }
    } catch (err) {
      console.error("Failed to load content from API:", err);
      showToast("Error connecting to backend API", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      hero: {
        headline: formData.heroHeadline,
        subtitle: formData.heroSubtitle,
        primaryCta: formData.heroCtaText,
        secondaryCta: formData.heroSecondaryCta || "Schedule Consultation"
      },
      stats: formData.stats
    };

    try {
      const res = await fetch(`${apiUrl}/api/content`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      if (json.success) {
        showToast("✅ Landing page content updated in MongoDB successfully!");
        router.refresh();
      } else {
        showToast(`❌ Update failed: ${json.message}`, "error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      showToast("❌ Server connection error while saving content.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleStatChange = (index: number, field: keyof StatItem, value: string) => {
    const updatedStats = [...formData.stats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setFormData({ ...formData, stats: updatedStats });
  };

  const addStatItem = () => {
    const newId = (formData.stats.length + 1).toString();
    setFormData({
      ...formData,
      stats: [
        ...formData.stats,
        { id: newId, value: "100%", label: "New Enterprise Metric", description: "Metric description" }
      ]
    });
  };

  const removeStatItem = (index: number) => {
    const updatedStats = formData.stats.filter((_, i) => i !== index);
    setFormData({ ...formData, stats: updatedStats });
  };

  const applyPreset = (preset: typeof PRESET_TEMPLATES[0]) => {
    setFormData({
      heroHeadline: preset.headline,
      heroSubtitle: preset.subtitle,
      heroCtaText: preset.ctaText,
      heroSecondaryCta: preset.secondaryCta,
      stats: preset.stats
    });
    showToast(`Applied "${preset.name}" preset! Click "Save & Sync Real-Time" to persist.`, "success");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {toastMessage && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-2xl border text-sm font-semibold flex items-center gap-2 backdrop-blur-md transition-all ${
            toastType === "success"
              ? "bg-emerald-950/90 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20"
              : "bg-rose-950/90 border-rose-500/50 text-rose-300 shadow-rose-500/20"
          }`}
        >
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
              <span>Admin Panel</span>
              <span>•</span>
              <span>Real-Time Sync</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Landing Page Content Manager
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Changes updated here update the Next.js landing page (/) via MongoDB in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Live Landing Page (/)
            </Link>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            ⚡ Quick Preset Templates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRESET_TEMPLATES.map((preset, i) => (
              <button
                key={i}
                type="button"
                onClick={() => applyPreset(preset)}
                className="text-left p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800 text-xs font-medium text-slate-200 transition-all flex items-center justify-between group"
              >
                <span>{preset.name}</span>
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">Apply →</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
            <div className="inline-block w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-semibold">Loading content from Express API (GET /api/content)...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  Hero Section Configuration
                </h2>
                <span className="text-xs text-slate-500">Express API Target: PUT /api/content</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Hero Headline (Cvent-Style Typography)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.heroHeadline}
                    onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    placeholder="Enter main headline..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Hero Subtitle
                  </label>
                  <textarea
                    rows={3}
                    value={formData.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
                    placeholder="Enter subtitle text..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Primary CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.heroCtaText}
                      onChange={(e) => setFormData({ ...formData, heroCtaText: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                      placeholder="e.g. Explore Enterprise Solutions"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Secondary CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.heroSecondaryCta || ""}
                      onChange={(e) => setFormData({ ...formData, heroSecondaryCta: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                      placeholder="e.g. Schedule Consultation"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    Stats & Metrics Items
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage key metric numbers and descriptions displayed on the homepage stats section.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addStatItem}
                  className="px-3 py-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all flex items-center gap-1"
                >
                  + Add Metric
                </button>
              </div>

              <div className="space-y-4">
                {formData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Metric #{idx + 1}
                      </span>
                      {formData.stats.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStatItem(idx)}
                          className="text-xs font-semibold text-rose-400 hover:text-rose-300"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Value (Number/Stat)
                        </label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => handleStatChange(idx, "value", e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-emerald-400 font-bold focus:outline-none focus:border-emerald-400"
                          placeholder="e.g. 500+"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Label Title
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatChange(idx, "label", e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                          placeholder="e.g. Global Enterprise Clients"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Sub-description
                        </label>
                        <input
                          type="text"
                          value={stat.description || ""}
                          onChange={(e) => handleStatChange(idx, "description", e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-emerald-400"
                          placeholder="e.g. Trusted by Fortune 500 leaders worldwide"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={fetchContent}
                className="px-6 py-3 text-sm font-semibold text-slate-400 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl transition-all"
              >
                Discard Changes
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-8 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-90 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50 flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>Saving to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Save & Sync Real-Time</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
