import Section from "./Section";
import {
  CalendarDaysIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: CalendarDaysIcon,
    title: "Book a Discovery Call",
    desc: "30-min, zero-cost scoping.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Get Custom Proposal",
    desc: "Clear deliverables & timeline.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Start Seeing Results",
    desc: "Impact in weeks, not months.",
  },
];

export default function CtaBanner() {
  return (
    <Section className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight mb-10">
        Ready to turn numbers into growth?
      </h2>
      <ol className="relative max-w-md mx-auto border-l border-accent/50 space-y-8">
        {steps.map((step) => (
          <li key={step.title} className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
              <step.icon className="h-4 w-4 text-accent drop-shadow-[0_0_4px_#00E2FF]" />
            </span>
            <h3 className="font-semibold text-white">{step.title}</h3>
            <p className="text-sm text-slate-300">{step.desc}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-slate-300">
        team@dataspark.ai ｜ +49 30 5557 8900
      </p>
    </Section>
  );
}
