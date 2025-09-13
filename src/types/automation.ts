export interface BytebotTask {
	id: string;
	description: string;
	priority: "URGENT" | "HIGH" | "MEDIUM" | "LOW";
	type: "IMMEDIATE" | "SCHEDULED";
	status:
		| "CREATED"
		| "QUEUED"
		| "RUNNING"
		| "NEEDS_HELP"
		| "COMPLETED"
		| "FAILED";
	category:
		| "RESEARCH"
		| "DEPLOYMENT"
		| "TESTING"
		| "MONITORING"
		| "INTEGRATION";
	files?: File[]; // Uploaded context files
	agent?: string; // Assigned C-Suite agent
	estimatedDuration?: number; // Minutes
}
