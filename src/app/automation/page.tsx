import { TaskManager } from '@/components/automation/TaskManager';

export default function AutomationPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Bytebot Task Manager</h1>
      <TaskManager />
    </div>
  );
}
