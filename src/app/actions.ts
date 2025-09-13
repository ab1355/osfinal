"use server";

import { revalidatePath } from "next/cache";
import { deploymentManager } from "@/lib/akash/deployment";

export async function deployPrototype(formData: FormData) {
	const config = {
		image: formData.get("image"),
		cpu: formData.get("cpu"),
		memory: formData.get("memory"),
		storage: formData.get("storage"),
	};

	await deploymentManager.deployPrototype(config);

	revalidatePath("/deploy");
}

export async function scaleResources(formData: FormData) {
	const deploymentId = formData.get("deploymentId") as string;
	const scaleFactor = formData.get("scaleFactor") as string;

	await deploymentManager.scaleResources(deploymentId, parseFloat(scaleFactor));

	revalidatePath("/deploy");
}
