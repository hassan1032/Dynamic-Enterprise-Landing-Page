import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const FALLBACK_CONTENT = {
  hero: {
    headline: "Transforming Global Enterprises with Next-Gen Digital Solutions",
    subtitle: "Eminenture delivers tech-driven business process management, data analytics, and automation to power Fortune 500 growth.",
    primaryCta: "Explore Enterprise Solutions",
    secondaryCta: "Schedule Consultation"
  },
  stats: [
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
  ]
};

async function getLandingContent() {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || "https://eminenture-backend-db4y.onrender.com";
  const apiUrl = rawApiUrl.replace(/\/+$/, "");

  try {
    const res = await fetch(`${apiUrl}/api/content`, {
      cache: "no-store"
    });

    if (!res.ok) {
      console.warn(`[Next.js Server Component] Fetch failed with status ${res.status}`);
      return FALLBACK_CONTENT;
    }

    const data = await res.json();
    if (data && data.success && data.data) {
      return data.data;
    }

    return FALLBACK_CONTENT;
  } catch (error) {
    console.error("[Next.js Server Component] API connection error (using fallback):", error);
    return FALLBACK_CONTENT;
  }
}

export default async function HomePage() {
  const content = await getLandingContent();

  const hero = content.hero || {};
  const headline = hero.headline || content.heroHeadline || FALLBACK_CONTENT.hero.headline;
  const subtitle = hero.subtitle || content.heroSubtitle || FALLBACK_CONTENT.hero.subtitle;
  const primaryCta = hero.primaryCta || content.heroCtaText || FALLBACK_CONTENT.hero.primaryCta;
  const secondaryCta = hero.secondaryCta || content.heroSecondaryCta || FALLBACK_CONTENT.hero.secondaryCta;
  const stats = content.stats || FALLBACK_CONTENT.stats;

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero
        headline={headline}
        subtitle={subtitle}
        ctaText={primaryCta}
        secondaryCta={secondaryCta}
      />
      <Stats stats={stats} />
      <Capabilities />
      <Footer />
    </main>
  );
}
