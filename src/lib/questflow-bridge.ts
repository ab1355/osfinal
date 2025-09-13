import { DeploymentConfig, DeploymentResult, MeetingResult, WorkflowStatus, ResearchFindings, CSuiteStatus, TechStackPayload, ScalePayload, OptimizePayload } from "@/types/questflow";

export class QuestFlowBridge {
  private baseUrl = process.env.NEXT_PUBLIC_QUESTFLOW_API_URL || 'http://localhost:8000/api/v1';

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API request failed with status ${response.status}: ${errorText}`);
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json() as Promise<T>;
  }

  private async performFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Network or fetch error for endpoint ${endpoint}:`, error);
      throw error;
    }
  }

  async getWorkflowStatus(): Promise<WorkflowStatus[]> {
    console.log("Fetching workflow statuses...");
    return this.performFetch<WorkflowStatus[]>('/workflows/status');
  }

  async getCSuiteStatus(): Promise<CSuiteStatus> {
    console.log("Fetching C-Suite status...");
    return this.performFetch<CSuiteStatus>('/csuite/status');
  }

  async triggerCSuiteMeeting(topic: string): Promise<MeetingResult> {
    console.log("Triggering C-Suite meeting with topic:", topic);
    return this.performFetch<MeetingResult>('/csuite/meet', {
      method: 'POST',
      body: JSON.stringify({ topic }),
    });
  }

  async deployToAkash(config: DeploymentConfig): Promise<DeploymentResult> {
    console.log("Deploying to Akash with config:", config);
    return this.performFetch<DeploymentResult>('/deploy/akash', {
      method: 'POST',
      body: JSON.stringify(config),
    });
  }

  async updateWorkflowsFromResearch(findings: ResearchFindings): Promise<void> {
    console.log("Updating workflows from research findings:", findings);
    return this.performFetch<void>('/research/update', {
      method: 'POST',
      body: JSON.stringify(findings),
    });
  }

  async updateTechStack(payload: TechStackPayload): Promise<void> {
    console.log("Updating tech stack with recommendations:", payload);
     return this.performFetch<void>('/automation/tech-stack', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async scaleResources(payload: ScalePayload): Promise<void> {
    console.log(`Scaling resources with payload:`, payload);
    return this.performFetch<void>('/automation/scale', {
        method: 'POST',
        body: JSON.stringify(payload),
    });
  }

  async optimizeDeployment(payload: OptimizePayload): Promise<void> {
    console.log("Optimizing deployment with payload:", payload);
    return this.performFetch<void>('/automation/optimize', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
  }
}
