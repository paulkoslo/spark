import Hero from "../components/Hero";
import Challenge from "../components/Challenge";
import ServicesGrid from "../components/ServicesGrid";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Challenge />
      <ServicesGrid />
      <StatsBar />
      <CtaBanner />
      <footer className="mt-auto p-4 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Dataspark
      </footer>
    </main>
  );
}
