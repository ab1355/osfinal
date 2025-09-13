'use client';
import { BytebotTask } from "@/types/automation";

interface TaskQueueProps {
  tasks: BytebotTask[];
}

export function TaskQueue({ tasks }: TaskQueueProps) {
  return (
    <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass">
      <h2 className="text-xl font-bold mb-4">Task Queue</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white/10 p-4 rounded-lg">
            <p className="font-semibold">{task.description}</p>
            <div className="text-sm text-white/70 flex justify-between mt-2">
              <span>{task.category}</span>
              <span>{task.status}</span>
            </div>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-white/50">No tasks in the queue.</p>
        )}
      </div>
    </div>
  );
}
