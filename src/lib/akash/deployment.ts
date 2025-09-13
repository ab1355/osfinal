'use client';

import { AkashDeployment } from "../../types/deployment";
import { sleep } from "../../utils/sleep";

class AkashDeploymentManager {
	private deployments: Map<string, AkashDeployment> = new Map();

	async deployPrototype(config: Record<string, unknown>): Promise<AkashDeployment> {
		console.log("Deploying prototype with config:", config);

		const deploymentId = `dep-${Math.random().toString(36).substring(2, 9)}`;
		const newDeployment: AkashDeployment = {
			id: deploymentId,
      name: 'My App',
			status: 'pending',
			cpu: 1,
      memory: 1,
      storage: 1,
			cost: 0,
		};

		this.deployments.set(deploymentId, newDeployment);

		// Simulate the deployment process
		this.simulateDeployment(deploymentId);

		return newDeployment;
	}

	async monitorDeployment(): Promise<Map<string, AkashDeployment>> {
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
			deployment.status = 'active';
			this.deployments.set(deploymentId, deployment);

			await sleep(5000);
			deployment.status = 'inactive';
			deployment.cost = Math.random() * 10; // Simulate initial cost
			this.deployments.set(deploymentId, deployment);
		}
	}
}

export const deploymentManager = new AkashDeploymentManager();
