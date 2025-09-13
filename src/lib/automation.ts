import { QuestFlowBridge } from './questflow-bridge';
import { ResearchFindings, ResourceUsage, CostAnalysis } from '@/types/questflow';

const questflow = new QuestFlowBridge();

const onResearchFindings = (findings: ResearchFindings) => {
  console.log("Automation: Analyzing research findings...", findings);
  if (findings.recommendations.includes('QuestFlow')) {
    console.log("Automation: 'QuestFlow' mentioned. Updating tech stack...");
    questflow.updateTechStack(['QuestFlow']);
  }
};

const onResourceThreshold = (usage: ResourceUsage) => {
  console.log("Automation: Monitoring resource usage...", usage);
  if (usage.cpu > 80) {
    console.log("Automation: High CPU usage detected. Scaling up resources...");
    questflow.scaleResources('up', 1.5);
  }
};

const onCostAlert = (analysis: CostAnalysis) => {
  console.log("Automation: Analyzing cost data...", analysis);
  if (analysis.savingsOpportunity > 20) {
    console.log("Automation: High savings opportunity detected. Optimizing deployment...");
    questflow.optimizeDeployment();
  }
};

export const automationRules = {
  onResearchFindings,
  onResourceThreshold,
  onCostAlert,
};
