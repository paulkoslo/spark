import Challenge from "../components/Challenge";
import ServicesGrid from "../components/ServicesGrid";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";
import DecryptedText from "../components/DecryptedText";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div id="tame-your-data-chaos" className="scroll-mt-56"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 mt-8 text-center drop-shadow">
        <DecryptedText text="Tame Your Data Chaos" animateOn="view" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow" />
      </h2>
      <Challenge />
      <div id="what-we-do-best" className="scroll-mt-56"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 mt-12 text-center">
        <DecryptedText text="What We Do Best" animateOn="view" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow" />
      </h2>
      <ServicesGrid />
      <div id="why-teams-choose-us" className="scroll-mt-56"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 mt-12 text-center">
        <DecryptedText text="Why Teams Choose Us" animateOn="view" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow" />
      </h2>
      <StatsBar />
      <div id="get-started-in-seconds" className="scroll-mt-32"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 mt-12 text-center">
        <DecryptedText text="Get Started in Seconds" animateOn="view" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow" />
      </h2>
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
