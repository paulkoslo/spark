import Image from "next/image";
import GlassCard from "./GlassCard";
import Section from "./Section";

const challenges = [
  {
    title: "Untapped Potential",
    copy: "99 % of mid-market firms sit on dormant data gold—unused, unseen.",
  },
  {
    title: "Decision Bottlenecks",
    copy: "Manual reporting slows decision speed. Teams lose hours stitching CSVs.",
  },
  {
    title: "Competitive Disadvantage",
    copy: "While you wrestle with basics, rivals deploy advanced analytics to win market share.",
  },
];

export default function Challenge() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {challenges.map((ch) => (
            <GlassCard key={ch.title} className="p-6">
              <h3 className="font-semibold text-white mb-1">{ch.title}</h3>
              <p className="text-slate-300 text-sm">{ch.copy}</p>
            </GlassCard>
          ))}
        </div>
        <div className="relative h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
            alt="Overworked analyst"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
