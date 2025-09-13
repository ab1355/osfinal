import type { BytebotTask } from "../types/automation";

export class BytebotClient {
	private baseUrl = "http://localhost:9991"; // Bytebot Agent API

	async createTask(task: Partial<BytebotTask>): Promise<BytebotTask> {
		// Create automated task for Bytebot execution
		const response = await fetch(`${this.baseUrl}/tasks`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		});
		return response.json();
	}

	async monitorTask(_taskId: string): Promise<BytebotTask> {
		// Real-time task monitoring with WebSocket
	}

	async uploadFiles(_taskId: string, _files: File[]): Promise<void> {
		// Upload context files for task execution
	}
}
