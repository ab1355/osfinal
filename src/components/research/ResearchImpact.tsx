'use client';

import { useState, useEffect } from 'react';

interface ResearchImpactAnalysis {
  paper: string;
  impactScore: number;
  summary: string;
}

// Mock function to get research impact analysis
const analyzeResearch = async (): Promise<ResearchImpactAnalysis[]> => {
  console.log("Analyzing research papers...");
  // In a real implementation, this would use a language model to analyze papers
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate async operation
  console.log("Research analysis complete.");
  return [
    {
      paper: "Scaling Transformers to 1 Trillion Parameters",
      impactScore: 95,
      summary: "This paper explores the challenges and breakthroughs in training large-scale language models, providing a roadmap for future development."
    },
    {
      paper: "Decentralized AI: A New Frontier",
      impactScore: 88,
      summary: "Explores the potential of decentralized technologies like blockchain to create more robust and transparent AI systems."
    },
    {
      paper: "The Ethics of Autonomous Agents",
      impactScore: 92,
      summary: "A critical examination of the ethical considerations surrounding the development and deployment of autonomous AI agents."
    }
  ];
};

export default function ResearchImpact() {
  const [analysis, setAnalysis] = useState<ResearchImpactAnalysis[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setIsLoading(true);
      const result = await analyzeResearch();
      setAnalysis(result);
      setIsLoading(false);
    };
    fetchAnalysis();
  }, []);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Research Impact Analysis</h2>
      {isLoading ? (
        <p className="text-gray-400">Analyzing research papers...</p>
      ) : (
        <div className="space-y-4">
          {analysis.map((item, index) => (
            <div key={index} className="bg-gray-700/50 p-4 rounded-md">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{item.paper}</h3>
                <span className={`font-bold text-lg ${item.impactScore > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {item.impactScore}
                </span>
              </div>
              <p className="text-gray-400 mt-2">{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
