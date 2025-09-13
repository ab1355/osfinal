'use client';

import { useState } from 'react';

// Define a placeholder for DeploymentConfig if it's not available in this context
// In a real scenario, you would import this from '@/types/questflow' or a similar path.
interface DeploymentConfig {
  cpu: string;
  memory: string;
  storage: string;
}

// Mock onDeploy function for standalone component functionality
const mockOnDeploy = async (config: DeploymentConfig): Promise<{ status: string; deploymentId: string; }> => {
  console.log("Deploying with config:", config);
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate a successful deployment
  return {
    status: "succeeded",
    deploymentId: `d-${Math.random().toString(36).substr(2, 9)}`,
  };
};


interface AkashDeploymentProps {
  // Make onDeploy optional for easier testing and storybooking
  onDeploy?: (config: DeploymentConfig) => Promise<{ status: string; deploymentId: string; }>;
}

export default function AkashDeployment({ onDeploy = mockOnDeploy }: AkashDeploymentProps) {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState("");
  const [config, setConfig] = useState<DeploymentConfig>({
    cpu: '1',
    memory: '2Gi',
    storage: '10Gi',
  });

  const handleDeploy = async () => {
    setIsDeploying(true);
    setDeploymentStatus("Deployment in progress...");
    try {
      const result = await onDeploy(config);
      setDeploymentStatus(`Deployment ${result.status}: ${result.deploymentId}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      setDeploymentStatus(`Deployment failed: ${errorMessage}`);
    }
    setIsDeploying(false);
  };

  return (
    <div className="bg-glass border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass text-white">
      <h2 className="text-2xl font-bold mb-6">Configure Your Deployment</h2>
      
      <div className="space-y-6 mb-8">
        <div>
          <label htmlFor="cpu" className="block text-sm font-medium text-white/80 mb-2">CPU</label>
          <input
            type="text"
            id="cpu"
            value={config.cpu}
            onChange={(e) => setConfig({ ...config, cpu: e.target.value })}
            className="w-full p-3 bg-white/10 rounded-lg border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="memory" className="block text-sm font-medium text-white/80 mb-2">Memory</label>
          <input
            type="text"
            id="memory"
            value={config.memory}
            onChange={(e) => setConfig({ ...config, memory: e.target.value })}
            className="w-full p-3 bg-white/10 rounded-lg border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="storage" className="block text-sm font-medium text-white/80 mb-2">Storage</label>
          <input
            type="text"
            id="storage"
            value={config.storage}
            onChange={(e) => setConfig({ ...config, storage: e.target.value })}
            className="w-full p-3 bg-white/10 rounded-lg border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <button 
        onClick={handleDeploy} 
        disabled={isDeploying}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isDeploying ? 'Deploying...' : 'Deploy to Akash'}
      </button>
      {deploymentStatus && <p className="mt-6 text-center text-white/70">{deploymentStatus}</p>}
    </div>
  );
}
