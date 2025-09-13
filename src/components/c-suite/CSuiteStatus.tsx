'use client';

import { useState, useEffect } from 'react';
import { QuestFlowBridge } from '@/lib/questflow-bridge';
import { WorkflowStatus } from '@/types/questflow';

const questflow = new QuestFlowBridge();

export default function CSuiteStatus() {
  const [statuses, setStatuses] = useState<WorkflowStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatuses = async () => {
      setIsLoading(true);
      const result = await questflow.getWorkflowStatus();
      setStatuses(result);
      setIsLoading(false);
    };
    fetchStatuses();
  }, []);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">C-Suite Agent Status</h2>
      {isLoading ? (
        <p className="text-gray-400">Loading agent statuses...</p>
      ) : (
        <div className="space-y-4">
          {statuses.map((agent, index) => (
            <div key={index} className="bg-gray-700/50 p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">{agent.agent}</p>
                <p className="text-gray-400">{agent.task ? agent.task.name : "Idle"}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm font-semibold ${agent.status === 'Working' ? 'bg-yellow-500 text-yellow-900' : 'bg-green-500 text-green-900'}`}>
                {agent.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
