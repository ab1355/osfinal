'use client';

import { useState } from 'react';
import { DeploymentConfig } from '@/types/questflow';

interface AkashDeploymentProps {
  onDeploy: (config: DeploymentConfig) => Promise<{ status: string; deploymentId: string; }>;
}

export default function AkashDeployment({ onDeploy }: AkashDeploymentProps) {
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
      setDeploymentStatus("Deployment failed: " + (error as Error).message);
    }
    setIsDeploying(false);
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Akash Network Deployment</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="cpu" className="block text-sm font-medium text-gray-300">CPU</label>
          <input
            type="text"
            id="cpu"
            value={config.cpu}
            onChange={(e) => setConfig({ ...config, cpu: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
        <div>
          <label htmlFor="memory" className="block text-sm font-medium text-gray-300">Memory</label>
          <input
            type="text"
            id="memory"
            value={config.memory}
            onChange={(e) => setConfig({ ...config, memory: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
        <div>
          <label htmlFor="storage" className="block text-sm font-medium text-gray-300">Storage</label>
          <input
            type="text"
            id="storage"
            value={config.storage}
            onChange={(e) => setConfig({ ...config, storage: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
      </div>
      
      <button 
        onClick={handleDeploy} 
        disabled={isDeploying}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
      >
        {isDeploying ? 'Deploying...' : 'Deploy to Akash'}
      </button>
      {deploymentStatus && <p className="mt-4 text-gray-400">{deploymentStatus}</p>}
    </div>
  );
}
