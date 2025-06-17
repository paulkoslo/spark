import GlassCard from "./GlassCard";
import Section from "./Section";

const stats = [
  { prefix: "🐬", value: null, suffix: " No Data Left Behind" },
  { prefix: "⚡", value: null, suffix: " Fast, No-Nonsense Delivery" },
  { prefix: "💡", value: null, suffix: " Real Answers, Not Fluff" },
];

export default function StatsBar() {
  return (
    <Section>
      <GlassCard className="p-6 flex flex-col sm:flex-row justify-around text-center">
        {stats.map((s) => (
          <div key={s.suffix} className="py-2">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              {s.prefix} {s.suffix}
            </span>
          </div>
        ))}
      </GlassCard>
    </Section>
  );
}
