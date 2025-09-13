
import AgentCard from "@/components/agents/AgentCard";
import CoordinationMatrix from "@/components/agents/CoordinationMatrix";

export default function AgentsPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Agent Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass">
          <h2 className="text-2xl font-bold mb-4">Agent Marketplace</h2>
          <p className="text-white/80">Discover and recruit specialized AI agents to expand your C-Suite&apos;s capabilities.</p>
        </div>
        <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Coordination Matrix</h2>
          <CoordinationMatrix />
        </div>
        <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass col-span-1 md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Active Agents</h2>
           <AgentCard />
        </div>
      </div>
    </div>
  );
}
