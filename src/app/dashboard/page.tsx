'use client';

import { useState, useEffect, useMemo } from 'react';
import { QuestFlowBridge } from '@/lib/questflow-bridge';
import WorkflowStatusCard from '@/components/dashboard/WorkflowStatusCard';
import CSuiteStatusCard from '@/components/dashboard/CSuiteStatusCard';
import ResourceMonitor from '@/components/optimization/ResourceMonitor';
import AkashDeployment from '@/components/deployment/AkashDeployment';
import CostMonitor from '@/components/dashboard/CostMonitor';
import { IntegrationStatus } from '@/components/dashboard/IntegrationStatus';
import { WorkflowStatus } from '@/types/questflow';

export default function Dashboard() {
  const [workflows, setWorkflows] = useState<WorkflowStatus[]>([]);
  const [csuiteStatus, setCSuiteStatus] = useState<{ [key: string]: any }>({});
  const questflow = useMemo(() => new QuestFlowBridge(), []);

  useEffect(() => {
    const loadData = async () => {
      const workflowData = await questflow.getWorkflowStatus();
      setWorkflows(workflowData);
      const csuiteData = await questflow.getCSuiteStatus();
      setCSuiteStatus(csuiteData);
    };

    loadData();
    const interval = setInterval(loadData, 5000); // 5s updates

    return () => clearInterval(interval);
  }, [questflow]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-6">Live Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkflowStatusCard workflows={workflows} />
          <CSuiteStatusCard status={csuiteStatus} />
          <ResourceMonitor />
          <AkashDeployment onDeploy={questflow.deployToAkash} />
          <CostMonitor />
          <IntegrationStatus />
        </div>
    </div>
  );
}
