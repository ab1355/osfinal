'use client';
import { BytebotTask } from "@/types/automation";

interface TaskQueueProps {
  tasks: BytebotTask[];
}

export function TaskQueue({ tasks }: TaskQueueProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Task Queue</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-700/50 p-3 rounded-md">
            <p className="font-medium">{task.description}</p>
            <div className="text-sm text-gray-400 flex justify-between">
              <span>{task.category}</span>
              <span>{task.status}</span>
            </div>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-gray-500">No tasks in the queue.</p>
        )}
      </div>
    </div>
  );
}
