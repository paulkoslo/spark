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
    title: "End-to-End Analytics",
    desc: "From data collection to actionable reports—complete solution, tailored.",
  },
  {
    icon: ChartPieIcon,
    title: "Interactive Dashboards",
    desc: "Real-time visualisation. See your business pulse at a glance.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Custom AI Tools",
    desc: "Machine-learning solutions that get smarter over time.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Data Strategy Audits",
    desc: "Uncover hidden opportunities; map your analytics journey.",
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
