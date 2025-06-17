import Challenge from "../components/Challenge";
import ServicesGrid from "../components/ServicesGrid";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Challenge />
      <ServicesGrid />
      <StatsBar />
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
