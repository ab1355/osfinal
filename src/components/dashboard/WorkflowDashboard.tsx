import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkflowDashboard() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Workflow Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">Status Monitoring, Task Creation, and Progress Tracking for QuestFlow workflows will be displayed here.</p>
      </CardContent>
    </Card>
  );
}
