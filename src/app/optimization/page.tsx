'use client';

import { useState } from 'react';
import ResourceMonitor from '@/components/optimization/ResourceMonitor';
import { scaleUp, scaleDown } from '@/lib/optimization';

export default function OptimizationPage() {
  const [isScaling, setIsScaling] = useState(false);
  const [scaleStatus, setScaleStatus] = useState("");

  const handleScaleUp = async () => {
    setIsScaling(true);
    setScaleStatus("Scaling up...");
    const result = await scaleUp();
    setScaleStatus(result.message);
    setIsScaling(false);
  };

  const handleScaleDown = async () => {
    setIsScaling(true);
    setScaleStatus("Scaling down...");
    const result = await scaleDown();
    setScaleStatus(result.message);
    setIsScaling(false);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Resource Optimization</h1>
      <div className="space-y-8">
        <ResourceMonitor />
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Scaling Actions</h2>
          <div className="flex gap-4">
            <button 
              onClick={handleScaleUp} 
              disabled={isScaling}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
            >
              {isScaling ? 'Scaling...' : 'Scale Up'}
            </button>
            <button 
              onClick={handleScaleDown} 
              disabled={isScaling}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
            >
              {isScaling ? 'Scaling...' : 'Scale Down'}
            </button>
          </div>
          {scaleStatus && <p className="mt-4 text-gray-400">{scaleStatus}</p>}
        </div>
      </div>
    </div>
  );
}
