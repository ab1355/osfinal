export const componentMapping = {
  // QuestFlow Workflows → UI Dashboard
  'questflow/workflows': {
    uiComponent: 'WorkflowDashboard',
    features: ['status_monitoring', 'task_creation', 'progress_tracking']
  },
  
  // ElizaOS Plugins → Agent Management
  'packages/plugin-business-intelligence': {
    uiComponent: 'CSuiteStatus', 
    features: ['agent_coordination', 'decision_making', 'performance_metrics']
  },
  
  // Research Automation → Research Assistant  
  'research/automation': {
    uiComponent: 'QueryGenerator + AgentFeed',
    features: ['perplexity_integration', 'impact_analysis', 'trend_monitoring']
  }
};