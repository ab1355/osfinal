import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgentFeed() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Agent Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">A feed of agent activities and trend monitoring will be displayed here.</p>
      </CardContent>
    </Card>
  );
}
