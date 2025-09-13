"use client";

import { useId } from "react";
import { deployPrototype } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function DeployForm() {
	const imageId = useId();
	const cpuId = useId();
	const memoryId = useId();
	const storageId = useId();

	return (
		<form action={deployPrototype}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label
						htmlFor={imageId}
						className="block text-sm font-medium text-gray-400"
					>
						Docker Image
					</label>
					<input
						type="text"
						name="image"
						id={imageId}
						className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor={cpuId}
						className="block text-sm font-medium text-gray-400"
					>
						CPU
					</label>
					<input
						type="text"
						name="cpu"
						id={cpuId}
						className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor={memoryId}
						className="block text-sm font-medium text-gray-400"
					>
						Memory
					</label>
					<input
						type="text"
						name="memory"
						id={memoryId}
						className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor={storageId}
						className="block text-sm font-medium text-gray-400"
					>
						Storage
					</label>
					<input
						type="text"
						name="storage"
						id={storageId}
						className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
			</div>
			<div className="mt-6">
				<Button type="submit">Deploy</Button>
			</div>
		</form>
	);
}
