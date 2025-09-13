import RoadmapTimeline from "@/components/roadmap/RoadmapTimeline";

export default function RoadmapPage() {
	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<h1 className="text-3xl font-bold mb-6">Product Roadmap</h1>
			<RoadmapTimeline />
		</div>
	);
}
