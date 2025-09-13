import CSuiteStatus from "@/components/c-suite/CSuiteStatus";
import AgentCard from "@/components/agents/AgentCard";
import CoordinationMatrix from "@/components/agents/CoordinationMatrix";

export default function AgentsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Agent Management</h1>
      <div className="space-y-8">
        <CSuiteStatus />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AgentCard />
          <CoordinationMatrix />
        </div>
      </div>
    </div>
  );
}
