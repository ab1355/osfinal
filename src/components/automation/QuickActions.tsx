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
    <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description..."
          className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <select 
          value={category} 
          onChange={e => setCategory(e.target.value as TaskCategory)}
          className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="RESEARCH">Research</option>
          <option value="DEPLOYMENT">Deployment</option>
          <option value="TESTING">Testing</option>
          <option value="MONITORING">Monitoring</option>
          <option value="INTEGRATION">Integration</option>
        </select>
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Create Task
        </button>
      </form>
    </div>
  );
}
