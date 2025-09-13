import { BytebotTask } from "@/types/automation";

export type CSuiteAgent = "CEO" | "CTO" | "CFO" | "CMO" | "COO";

export interface AgentStatus {
  agent: CSuiteAgent;
  task: BytebotTask | null;
  status: "Idle" | "Working" | "Needs Assistance";
}

// Mock QuestFlow Client
export class QuestFlowClient {
  private agentStatuses: Record<CSuiteAgent, AgentStatus> = {
    CEO: { agent: "CEO", task: null, status: "Idle" },
    CTO: { agent: "CTO", task: null, status: "Idle" },
    CFO: { agent: "CFO", task: null, status: "Idle" },
    CMO: { agent: "CMO", task: null, status: "Idle" },
    COO: { agent: "COO", task: null, status: "Idle" },
  };

  async assignTask(task: BytebotTask, agent: CSuiteAgent): Promise<AgentStatus> {
    console.log(`Assigning task ${task.id} to ${agent}...`);
    // In a real implementation, this would make an API call to QuestFlow
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate async operation
    this.agentStatuses[agent] = {
      ...this.agentStatuses[agent],
      task,
      status: "Working",
    };
    console.log(`Task ${task.id} assigned to ${agent}.`);
    return this.agentStatuses[agent];
  }

  async getAgentStatus(agent: CSuiteAgent): Promise<AgentStatus> {
    return this.agentStatuses[agent];
  }

  async getAllAgentStatuses(): Promise<AgentStatus[]> {
    return Object.values(this.agentStatuses);
  }
}
