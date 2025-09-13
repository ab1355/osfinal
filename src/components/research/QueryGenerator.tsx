'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PerplexityClient } from '@/lib/perplexity';
import { automationRules } from '@/lib/automation';
import { ResearchFindings } from '@/types/questflow';

interface QueryGeneratorProps {
  onComplete: (findings: ResearchFindings) => void;
}

export default function QueryGenerator({ onComplete }: QueryGeneratorProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const perplexity = new PerplexityClient();

  const handleSearch = async () => {
    if (!query) return;
    setIsLoading(true);
    try {
      const findings = await perplexity.analyze(query);
      onComplete(findings);
      automationRules.onResearchFindings(findings);
    } catch (error) {
      console.error("Error analyzing query:", error);
    }
    setIsLoading(false);
    setQuery('');
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Research Query</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input 
            type="text" 
            placeholder="Enter your research query..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-gray-700 border-gray-600 text-white"
          />
          <Button onClick={handleSearch} disabled={isLoading}>
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
