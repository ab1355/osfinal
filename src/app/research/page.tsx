'use client';

import { QuestFlowBridge } from '@/lib/questflow-bridge';
import { ResearchFindings } from '@/types/questflow';
import QueryGenerator from '@/components/research/QueryGenerator';
import AgentFeed from '@/components/dashboard/AgentFeed';
import ResearchImpact from '@/components/research/ResearchImpact';

export default function Research() {
  const questflow = new QuestFlowBridge();

  const handleResearchComplete = async (findings: ResearchFindings) => {
    // Auto-update 371 OS workflows based on research
    await questflow.updateWorkflowsFromResearch(findings);

    // Trigger C-Suite review if significant impact detected
    if (findings.impactScore > 0.8) {
      await questflow.triggerCSuiteMeeting();
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-6">Research & Analysis</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QueryGenerator onComplete={handleResearchComplete} />
          <AgentFeed />
          <ResearchImpact />
        </div>
    </div>
  );
}
