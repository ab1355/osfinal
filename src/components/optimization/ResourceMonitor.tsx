'use client';

import { useState, useEffect } from 'react';

interface ResourceUsage {
  cpu: number;
  memory: number;
  network: number;
}

// Mock function to get resource usage
const getResourceUsage = (): ResourceUsage => ({
  cpu: Math.random() * 100,
  memory: Math.random() * 100,
  network: Math.random() * 100,
});

const ProgressBar = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-white">{label}</span>
      <span className="text-sm font-medium text-white">{value.toFixed(2)}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default function ResourceMonitor() {
  const [usage, setUsage] = useState<ResourceUsage>(getResourceUsage());

  useEffect(() => {
    const interval = setInterval(() => {
      setUsage(getResourceUsage());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resource Monitor</h2>
      <div className="space-y-4">
        <ProgressBar value={usage.cpu} label="CPU Usage" color="bg-blue-600" />
        <ProgressBar value={usage.memory} label="Memory Usage" color="bg-green-600" />
        <ProgressBar value={usage.network} label="Network Usage" color="bg-purple-600" />
      </div>
    </div>
  );
}
