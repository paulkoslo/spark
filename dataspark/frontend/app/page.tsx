import Challenge from "../components/Challenge";
import ServicesGrid from "../components/ServicesGrid";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-8 mt-8 text-center drop-shadow">Tame Your Data Chaos</h2>
      <Challenge />
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 mt-16 text-center">What We Do Best</h2>
      <ServicesGrid />
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-8 mt-16 text-center">Why Teams Choose Us</h2>
      <StatsBar />
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 mt-16 text-center">Get Started in Seconds</h2>
      <CtaBanner />
      <footer className="mt-auto p-4 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} DolphinData
        <br />
        <a href="mailto:team@dolphindata.io" className="underline hover:text-accent">team@dolphindata.io</a>
        <span className="mx-2">|</span>
        +49 30 5557 8900
      </footer>
    </main>
  );
}
