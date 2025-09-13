import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QueryGenerator() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Query Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">This component will be used to generate research queries and integrate with Perplexity for impact analysis.</p>
      </CardContent>
    </Card>
  );
}
