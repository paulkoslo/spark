import Image from "next/image";
import GlassCard from "./GlassCard";
import Section from "./Section";

const challenges = [
	{
		title: "Drowning in Data, Starving for Insight",
		copy: "You’ve got spreadsheets, exports, and dashboards—but no real answers. Most teams use less than 10% of their data’s potential.",
	},
	{
		title: "Manual Mayhem",
		copy: "Still stitching together CSVs? Still waiting days for a report? Your team’s time is too valuable for copy-paste chaos.",
	},
	{
		title: "Big Promises, Bigger Invoices",
		copy: "Old-school consultancies charge a fortune and move at glacial speed. You need results, not endless meetings.",
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
				<div className="relative h-64 md:h-80 flex flex-col items-center justify-center">
					<div className="bg-white/5 border border-accent/30 rounded-2xl p-6 w-full max-w-md mx-auto flex flex-col items-center gap-4 shadow-lg">
						<span className="text-accent font-bold text-lg">
							What can we do with your data?
						</span>
						<div className="w-full flex flex-col gap-2">
							<label className="block text-sm text-slate-200 font-medium">
								Upload a file (CSV, Excel, PDF, max 2MB)
							</label>
							<input
								type="file"
								className="block w-full text-sm text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/20 file:text-accent hover:file:bg-accent/40"
							/>
						</div>
						<button className="mt-2 bg-accent/80 hover:bg-accent text-slate-900 font-bold py-2 px-6 rounded-full transition">
							Get Instant Suggestions
						</button>
						<div className="w-full mt-4 bg-slate-900/60 rounded-lg p-3 text-slate-200 text-sm text-center border border-accent/20">
							<span className="font-semibold text-accent">Demo:</span> Instantly
							see analytics & automations we’d build for you—powered by AI.
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
