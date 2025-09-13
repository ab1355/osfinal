#!/usr/bin/env bun
import { BytebotClient } from '../src/lib/bytebot/client';

async function automateResearch() {
  const client = new BytebotClient();

  try {
    console.log("Creating research task...");
    const task = await client.createTask({
      description: "Research latest developments in autonomous AI agents, focusing on QuestFlow updates and Circle USDC integration. Update the research dashboard with findings.",
      priority: "HIGH",
      category: "RESEARCH"
    });
    console.log("Research task created:", task);
  } catch (error) {
    console.error("Error creating research task:", error);
  }
}

automateResearch();
