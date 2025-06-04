import GlassCard from "./GlassCard";
import Section from "./Section";
import StatCounter from "./StatCounter";

const stats = [
  { prefix: "↑", value: 35, suffix: "% Average ROI" },
  { prefix: "", value: 12, suffix: " Weeks to First Insights" },
  { prefix: "+", value: 20, suffix: " Happy Clients" },
];

export default function StatsBar() {
  return (
    <Section>
      <GlassCard className="p-6 flex flex-col sm:flex-row justify-around text-center">
        {stats.map((s) => (
          <div key={s.suffix} className="py-2">
            <span className="text-3xl font-bold tracking-tight">
              {s.prefix}
              <StatCounter to={s.value} />
              {s.suffix}
            </span>
          </div>
        ))}
      </GlassCard>
    </Section>
  );
}
