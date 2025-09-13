import { automationTasks } from "../../lib/tasks";
import type { BytebotTask } from "../../types/automation";

const TaskCard = ({ task }: { task: BytebotTask }) => (
	<div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
		<div className="flex justify-between items-center">
			<h3 className="text-lg font-bold">{task.description}</h3>
			<span
				className={`px-2 py-1 text-sm font-semibold rounded-full ${
					task.priority === "HIGH" ? "bg-red-500" : "bg-yellow-500"
				}`}
			>
				{task.priority}
			</span>
		</div>
		<p className="text-gray-400">Category: {task.category}</p>
		<p className="text-gray-400">Status: {task.status}</p>
		{task.agent && <p className="text-gray-400">Agent: {task.agent}</p>}
	</div>
);

export default function DashboardPage() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Automation Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{automationTasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
}
