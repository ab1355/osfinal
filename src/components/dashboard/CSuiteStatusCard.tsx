import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CSuiteStatusCardProps {
  status: { [key: string]: any }; // Using any for now, will be defined later
}

export default function CSuiteStatusCard({ status }: CSuiteStatusCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>C-Suite Agent Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.keys(status).length > 0 ? (
          <ul className="space-y-2">
            {Object.entries(status).map(([agent, agentStatus]: [string, any]) => (
              <li key={agent} className="flex justify-between items-center">
                <span>{agent}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  agentStatus.online ? 'bg-green-600/50 text-green-300' : 'bg-red-600/50 text-red-300'
                }`}>
                  {agentStatus.online ? 'Online' : 'Offline'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Loading C-Suite status...</p>
        )}
      </CardContent>
    </Card>
  );
}
