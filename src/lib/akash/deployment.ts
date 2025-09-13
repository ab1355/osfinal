"use client";

import { type Deployment, DeploymentStatus } from "../../types/deployment";
import { sleep } from "../../utils/sleep";

class AkashDeploymentManager {
	private deployments: Map<string, Deployment> = new Map();

	async deployPrototype(config: Record<string, unknown>): Promise<Deployment> {
		console.log("Deploying prototype with config:", config);

		const deploymentId = `dep-${Math.random().toString(36).substring(2, 9)}`;
		const newDeployment: Deployment = {
			id: deploymentId,
			status: DeploymentStatus.Pending,
			createdAt: new Date(),
			config: config,
			cost: 0,
			projections: [],
		};

		this.deployments.set(deploymentId, newDeployment);

		// Simulate the deployment process
		this.simulateDeployment(deploymentId);

		return newDeployment;
	}

	async monitorDeployment(): Promise<Map<string, Deployment>> {
		return this.deployments;
	}

	async scaleResources(
		deploymentId: string,
		scaleFactor: number,
	): Promise<void> {
		const deployment = this.deployments.get(deploymentId);

		if (deployment) {
			console.log(
				`Scaling resources for deployment ${deploymentId} by a factor of ${scaleFactor}`,
			);
			// Simulate resource scaling
			deployment.cost *= scaleFactor;
			await sleep(2000);
			console.log(`Resources scaled for deployment ${deploymentId}`);
		}
	}

	private async simulateDeployment(deploymentId: string) {
		const deployment = this.deployments.get(deploymentId);

		if (deployment) {
			await sleep(3000);
			deployment.status = DeploymentStatus.Building;
			this.deployments.set(deploymentId, deployment);

			await sleep(5000);
			deployment.status = DeploymentStatus.Running;
			deployment.cost = Math.random() * 10; // Simulate initial cost
			this.deployments.set(deploymentId, deployment);

			// Simulate cost reduction projections
			this.generateCostProjections(deploymentId);
		}
	}

	private generateCostProjections(deploymentId: string) {
		const deployment = this.deployments.get(deploymentId);

		if (deployment) {
			const projections = [
				{
					time: "1h",
					cost: deployment.cost * 0.9,
					reduction: 0.1,
				},
				{
					time: "24h",
					cost: deployment.cost * 0.7,
					reduction: 0.3,
				},
				{
					time: "7d",
					cost: deployment.cost * 0.3,
					reduction: 0.7,
				},
			];

			deployment.projections = projections;
			this.deployments.set(deploymentId, deployment);
		}
	}
}

export const deploymentManager = new AkashDeploymentManager();
