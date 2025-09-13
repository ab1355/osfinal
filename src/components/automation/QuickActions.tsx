'use client';

import { BytebotTask } from "@/types/automation";
import { useState } from "react";

type TaskCategory = BytebotTask["category"];

interface QuickActionsProps {
  onCreateTask: (description: string, category: TaskCategory) => void;
}

export function QuickActions({ onCreateTask }: QuickActionsProps) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>("RESEARCH");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;
    onCreateTask(description, category);
    setDescription("");
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description..."
          className="w-full p-2 rounded bg-gray-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select 
          value={category} 
          onChange={e => setCategory(e.target.value as TaskCategory)}
          className="w-full p-2 rounded bg-gray-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="RESEARCH">Research</option>
          <option value="DEPLOYMENT">Deployment</option>
          <option value="TESTING">Testing</option>
          <option value="MONITORING">Monitoring</option>
          <option value="INTEGRATION">Integration</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Task
        </button>
      </form>
    </div>
  );
}
