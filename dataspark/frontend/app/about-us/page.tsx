import Section from "../../components/Section";
import GlassCard from "../../components/GlassCard";
import AboutUsHeader from "../../components/AboutUsHeader";

export default function AboutUs() {
  return (
    <>
      <AboutUsHeader />
      <Section>
        <div className="max-w-3xl mx-auto py-8 px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
          <p className="text-lg text-slate-200 mb-10">
            We help teams unlock the full potential of their data—fast, practical, and powered by AI. No more drowning in spreadsheets, manual chaos, or endless meetings. Just clear answers, instant dashboards, and automations that work for you.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-1">Data Rescue & Cleanup</h3>
              <p className="text-slate-300 text-sm">We turn your messy exports into clean, usable gold—fast. No more data headaches.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-1">Plug & Play Dashboards</h3>
              <p className="text-slate-300 text-sm">Instant, interactive dashboards. See your business pulse in real time—no code, no waiting.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-1">Automation & AI Boosts</h3>
              <p className="text-slate-300 text-sm">Let bots do the boring stuff. From auto-reports to smart predictions, we build what you actually need.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-1">Quick-Start Data Audits</h3>
              <p className="text-slate-300 text-sm">Send us your mess. We’ll show you what’s possible—no jargon, just clear wins.</p>
            </GlassCard>
          </div>
        </div>
      </Section>
    </>
  );
}
