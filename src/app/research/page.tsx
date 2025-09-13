import ResearchImpact from "@/components/research/ResearchImpact";
import AgentFeed from "@/components/research/AgentFeed";
import QueryGenerator from "@/components/research/QueryGenerator";

export default function ResearchPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Research & Development</h1>
      <div className="space-y-8">
        <ResearchImpact />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QueryGenerator />
          <AgentFeed />
        </div>
      </div>
    </div>
  );
}
