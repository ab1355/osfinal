"use client";

import { useState } from "react";
import { BytebotTask } from "@/types/automation";
import { BytebotClient } from "@/lib/bytebot/client";
import { TaskQueue } from "./TaskQueue";
import { QuickActions } from "./QuickActions";
import { TaskHistory } from "./TaskHistory";

type TaskCategory = BytebotTask["category"];

export function TaskManager() {
  const [tasks, setTasks] = useState<BytebotTask[]>([]);
  const bytebotClient = new BytebotClient();

  const createAutomatedTask = async (description: string, category: TaskCategory) => {
    const task = await bytebotClient.createTask({
      description,
      priority: 'HIGH',
      type: 'IMMEDIATE',
      category
    });
    setTasks([...tasks, task]);
  };

  return (
    <div className="space-y-4">
      <TaskQueue tasks={tasks} />
      <QuickActions onCreateTask={createAutomatedTask} />
      <TaskHistory />
    </div>
  );
}
