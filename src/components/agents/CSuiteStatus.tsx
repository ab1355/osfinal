'use client';

import { useEffect, useState } from 'react';
import { QuestFlowClient, AgentStatus } from '@/lib/questflow';

export default function CSuiteStatus() {
  const [statuses, setStatuses] = useState<AgentStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const questflowClient = new QuestFlowClient();

  const fetchStatuses = async () => {
    setIsLoading(true);
    const allStatuses = await questflowClient.getAllAgentStatuses();
    setStatuses(allStatuses);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStatuses();
    const intervalId = setInterval(fetchStatuses, 10000); // Refresh every 10 seconds
    return () => clearInterval(intervalId);
  }, []);

  const getStatusColor = (status: AgentStatus['status']) => {
    switch (status) {
      case 'Idle':
        return 'text-green-400';
      case 'Working':
        return 'text-yellow-400';
      case 'Needs Assistance':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">C-Suite Status</h2>
        <button 
          onClick={fetchStatuses} 
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
        >
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      {isLoading && statuses.length === 0 ? (
        <p className="text-gray-400">Loading agent statuses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statuses.map((status) => (
            <div key={status.agent} className="bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-bold text-lg">{status.agent}</h3>
              <p className={`font-semibold ${getStatusColor(status.status)}`}>
                {status.status}
              </p>
              {status.task && (
                <div className="mt-2 text-sm bg-gray-600/50 p-2 rounded">
                  <p className="font-medium truncate" title={status.task.description}>{status.task.description}</p>
                  <p className="text-gray-400">{status.task.category}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
