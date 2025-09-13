export interface WorkflowStatus {
  agent: string;
  task: { id: string; name: string } | null;
  status: string;
}

export interface MeetingResult {
  meetingId: string;
  status: string;
}

export interface DeploymentConfig {
  cpu: string;
  memory: string;
  storage: string;
}

export interface DeploymentResult {
  deploymentId: string;
  status: string;
}

export interface ResearchFindings {
  impactScore: number;
  summary: string;
  technologies: string[];
  recommendations: string[];
}

export interface ResourceUsage {
  cpu: number;
  memory: number;
  disk: number;
}

export interface CostAnalysis {
  currentSpend: number;
  optimizedSpend: number;
  savingsOpportunity: number;
}
