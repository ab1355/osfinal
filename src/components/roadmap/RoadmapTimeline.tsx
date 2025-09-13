'use client';

import { useState, useEffect } from 'react';

interface RoadmapItem {
  quarter: string;
  theme: string;
  features: string[];
}

// Mock function to get roadmap data
const getRoadmap = async (): Promise<RoadmapItem[]> => {
  console.log("Fetching roadmap data...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      quarter: "Q3 2024",
      theme: "Core Platform Stability",
      features: ["Enhanced Monitoring", "Automated E2E Testing", "Performance Optimization"]
    },
    {
      quarter: "Q4 2024",
      theme: "Decentralized Identity",
      features: ["DID Integration", "Verifiable Credentials", "Secure Data Storage"]
    },
    {
      quarter: "Q1 2025",
      theme: "AI Agent Marketplace",
      features: ["Agent Discovery", "Reputation System", "Monetization Tools"]
    },
  ];
};

const updateRoadmap = async (newItem: RoadmapItem): Promise<RoadmapItem[]> => {
  console.log("Updating roadmap with:", newItem);
  const currentRoadmap = await getRoadmap();
  // In a real implementation, this would update a database or a file
  const updatedRoadmap = [...currentRoadmap, newItem];
  console.log("Roadmap updated successfully.");
  return updatedRoadmap;
};

export default function RoadmapTimeline() {
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmap = async () => {
      setIsLoading(true);
      const result = await getRoadmap();
      setRoadmap(result);
      setIsLoading(false);
    };
    fetchRoadmap();
  }, []);

  // This is a mock of how the roadmap might be auto-updated based on research
  useEffect(() => {
    const handleNewResearch = async () => {
      // In a real app, this would be triggered by a more sophisticated event system
      const newRoadmapItem: RoadmapItem = {
        quarter: "Q2 2025",
        theme: "Advanced AI Capabilities",
        features: ["Federated Learning", "Multi-Agent Collaboration", "Explainable AI (XAI)"],
      };
      // Note: In a real app, you wouldn't call this directly in a useEffect like this
      // without a proper trigger, as it would cause an infinite loop.
      // This is for demonstration purposes only.
      // const updatedRoadmap = await updateRoadmap(newRoadmapItem);
      // setRoadmap(updatedRoadmap);
    };

    // handleNewResearch();
  }, []);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Product Roadmap</h2>
      {isLoading ? (
        <p className="text-gray-400">Loading roadmap...</p>
      ) : (
        <div className="space-y-6">
          {roadmap.map((item, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-lg text-indigo-400">{item.quarter} - {item.theme}</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
