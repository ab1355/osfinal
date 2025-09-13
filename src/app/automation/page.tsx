import { TaskManager } from '@/components/automation/TaskManager';

export default function AutomationPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Task Automation</h1>
      <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass">
        <h2 className="text-2xl font-bold mb-4">Bytebot Task Manager</h2>
        <TaskManager />
      </div>
    </div>
  );
}
