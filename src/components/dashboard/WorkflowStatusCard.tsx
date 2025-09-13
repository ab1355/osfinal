import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowStatus } from "@/types/questflow";

interface WorkflowStatusCardProps {
  workflows: WorkflowStatus[];
}

export default function WorkflowStatusCard({ workflows }: WorkflowStatusCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Live QuestFlow Status</CardTitle>
      </CardHeader>
      <CardContent>
        {workflows.length > 0 ? (
          <ul className="space-y-2">
            {workflows.map((flow, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{flow.agent}: {flow.task?.name || 'Idle'}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  flow.status === 'Working' ? 'bg-green-600/50 text-green-300' : 'bg-gray-600/50 text-gray-300'
                }`}>
                  {flow.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Loading workflows...</p>
        )}
      </CardContent>
    </Card>
  );
}
