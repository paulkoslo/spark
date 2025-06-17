import Section from "./Section";
import {
  CalendarDaysIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: CalendarDaysIcon,
    title: "Upload Your Data Mess",
    desc: "CSV, Excel, PDF - just drop it in. We love chaos.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Get Instant Suggestions",
    desc: "See what’s possible: dashboards, automations, and more - in just a few seconds!",
  },
  {
    icon: RocketLaunchIcon,
    title: "Meet Your Data’s Potential",
    desc: "We build it, you win. Fast, practical, and zero corporate fluff.",
  },
];

export default function CtaBanner({ circleOpacity = 1 }: { circleOpacity?: number }) {
  return (
    <Section className="text-center pt-20 md:pt-28">
      <h2 className="text-3xl font-extrabold tracking-tight mb-10">
        Ready to turn numbers into growth?
      </h2>
      <div className="relative flex items-stretch max-w-md mx-auto mb-12">
        {/* Vertical line centered and behind icons, easily adaptable positioning */}
        <div
          className="absolute z-0"
          style={{
            left: 30, // Stick to the left edge
            top: "0",
            bottom: "0",
            width: "4px",
            background: "rgba(0, 226, 255, 0.3)",
            // Removed transform to keep line flush left
          }}
        />
        <ol className="relative z-10 flex-1 space-y-14 md:space-y-16">
          {steps.map((step, idx) => (
            <li key={step.title} className="relative flex items-center ml-0 md:ml-2">
              <span
                className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-accent/40 shadow-lg mx-auto"
                style={{ background: `rgba(0,226,255,${circleOpacity})` }}
              >
                <step.icon className="h-7 w-7 text-[#0a3a5d] drop-shadow-[0_0_4px_#00E2FF]" />
              </span>
              <div className="flex-1 text-left pl-6 md:pl-8">
                <h3 className="font-semibold text-white text-lg md:text-xl mb-2 mt-1 text-center md:text-left">{step.title}</h3>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed text-center md:text-left">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <a
        href="mailto:team@dataspark.ai"
        className="mt-10 inline-block bg-gradient-to-r from-accent to-blue-400 text-slate-900 font-extrabold py-4 px-14 rounded-full shadow-lg hover:scale-105 hover:from-blue-400 hover:to-accent transition-all text-xl tracking-wide border-2 border-accent/40 mb-8"
        style={{ letterSpacing: '0.05em' }}
      >
        MEET US
      </a>
      <p className="mt-12 text-base text-slate-300">
        team@dataspark.ai ｜ +49 30 5557 8900
      </p>
    </Section>
  );
}
