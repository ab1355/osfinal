import type { BytebotTask } from "../types/automation";

export const automationTasks: BytebotTask[] = [
	{
		id: "perplexityResearch",
		description:
			"Use Perplexity to research latest QuestFlow capabilities and Circle USDC integration patterns. Save findings to research dashboard.",
		priority: "HIGH",
		category: "RESEARCH",
		type: "SCHEDULED",
		status: "CREATED",
	},
	{
		id: "trendMonitoring",
		description:
			"Monitor GitHub trending repositories related to AI agents, autonomous systems, and Web3 integration. Update roadmap with relevant discoveries.",
		priority: "MEDIUM",
		category: "RESEARCH",
		type: "SCHEDULED",
		status: "CREATED",
	},
	{
		id: "akashDeploy",
		description:
			"Deploy 371 OS prototype to Akash Network using SDL configuration. Monitor deployment status and update dashboard with cost savings metrics.",
		priority: "HIGH",
		category: "DEPLOYMENT",
		type: "SCHEDULED",
		status: "CREATED",
	},
	{
		id: "performanceCheck",
		description:
			"Monitor Akash deployment performance metrics. Alert if response times exceed thresholds or costs increase beyond 97.6% savings target.",
		priority: "MEDIUM",
		category: "MONITORING",
		type: "SCHEDULED",
		status: "CREATED",
	},
	{
		id: "csuiteMeeting",
		description:
			"Coordinate daily C-Suite agent status meeting. Collect updates from CEO Mimi, CTO Zara, CFO Maya, and CLO Alex. Generate summary report.",
		priority: "HIGH",
		category: "INTEGRATION",
		agent: "COORDINATOR",
		type: "SCHEDULED",
		status: "CREATED",
	},
];
