import AgentCard from "../components/agents/AgentCard";
import CSuiteStatus from "../components/c-suite/CSuiteStatus";
import RoadmapVisualization from "../components/roadmap/RoadmapVisualization";

export default function DashboardPage() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-8">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<RoadmapVisualization />
				<CSuiteStatus />
				<AgentCard />
			</div>
		</div>
	);
}
