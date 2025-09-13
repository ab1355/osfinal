'use client';

import { CheckCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

// Dummy data for agent, replace with actual data prop
const agent = {
  name: 'Nexus-7',
  role: 'Lead Analyst',
  status: 'Active',
  tasksCompleted: 128,
  avatar: '/placeholder-avatar.png', // Replace with actual avatar path
};

export default function AgentCard() {
  return (
    <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass text-white transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img src={agent.avatar} alt={agent.name} className="w-20 h-20 rounded-full border-2 border-purple-500" />
          <span className={`absolute bottom-0 right-0 block h-5 w-5 rounded-full ${agent.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'} border-2 border-glass`}></span>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{agent.name}</h3>
          <p className="text-purple-300">{agent.role}</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-6 w-6 text-green-400" />
            <span className="font-semibold">Tasks Completed</span>
          </div>
          <span className="text-xl font-bold">{agent.tasksCompleted}</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300">
          <RocketLaunchIcon className="h-5 w-5" />
          <span>Assign Task</span>
        </button>
      </div>
    </div>
  );
}
