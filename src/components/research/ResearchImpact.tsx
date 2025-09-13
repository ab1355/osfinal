'use client';

import { useState, useEffect } from 'react';
import { ChartBarIcon, DocumentTextIcon, LightBulbIcon } from '@heroicons/react/24/solid';

interface ResearchImpactAnalysis {
  paper: string;
  impactScore: number;
  summary: string;
}

// Mock function to get research impact analysis
const analyzeResearch = async (): Promise<ResearchImpactAnalysis[]> => {
  console.log("Analyzing research papers...");
  await new Promise(resolve => setTimeout(resolve, 1500));
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

  const getImpactColor = (score: number) => {
    if (score > 90) return 'text-green-400';
    if (score > 85) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Research Impact Analysis</h2>
        <LightBulbIcon className="h-8 w-8 text-yellow-300" />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
            <p className="text-white/70">Analyzing research papers...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {analysis.map((item, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                    <DocumentTextIcon className="h-6 w-6 text-purple-400" />
                    <h3 className="font-bold text-lg">{item.paper}</h3>
                </div>
                <div className={`flex items-center space-x-2 font-bold text-xl ${getImpactColor(item.impactScore)}`}>
                    <ChartBarIcon className="h-5 w-5" />
                    <span>{item.impactScore}</span>
                </div>
              </div>
              <p className="text-white/80 mt-3 pl-9">{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
