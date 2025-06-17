import Image from "next/image";
import GlassCard from "./GlassCard";
import Section from "./Section";
import {
  ChartBarIcon,
  ChartPieIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: ChartBarIcon,
    title: "Data Rescue & Cleanup",
    desc: "We turn your messy exports into clean, usable gold—fast. No more data headaches.",
  },
  {
    icon: ChartPieIcon,
    title: "Plug & Play Dashboards",
    desc: "Instant, interactive dashboards. See your business pulse in real time—no code, no waiting.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Automation & AI Boosts",
    desc: "Let bots do the boring stuff. From auto-reports to smart predictions, we build what you actually need.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Quick-Start Data Audits",
    desc: "Send us your mess. We’ll show you what’s possible—no jargon, just clear wins.",
  },
];

export default function ServicesGrid() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="grid sm:grid-cols-2 gap-6 order-2 md:order-1">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-6 space-y-2">
              <service.icon className="h-8 w-8 text-accent drop-shadow-[0_0_4px_#00E2FF]" />
              <h3 className="font-semibold text-white">{service.title}</h3>
              <p className="text-slate-300 text-sm">{service.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="relative h-64 md:h-80 order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1665686306089-3d2845cffb32?auto=format&fit=crop&w=800&q=80"
            alt="Engineer at big monitor"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
