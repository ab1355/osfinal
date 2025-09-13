'use client';

import { ArrowPathIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

// Mock data for the matrix
const agents = ['CEO', 'CTO', 'CFO', 'CMO'];
const matrixData = [
  [1, 0.8, 0.5, 0.6],
  [0.8, 1, 0.7, 0.4],
  [0.5, 0.7, 1, 0.9],
  [0.6, 0.4, 0.9, 1],
];

export default function CoordinationMatrix() {
  const getCellColor = (value: number) => {
    if (value >= 0.8) return 'bg-green-500/40';
    if (value >= 0.6) return 'bg-yellow-500/40';
    return 'bg-red-500/40';
  };

  return (
    <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Coordination Matrix</h2>
        <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <ArrowPathIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20">
                <span>Last 24h</span>
                <ChevronDownIcon className="h-4 w-4" />
            </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-3 bg-white/5 border-b border-white/10"></th>
              {agents.map((agent) => (
                <th key={agent} className="p-3 bg-white/5 border-b border-white/10 text-center font-semibold">
                  {agent}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, rowIndex) => (
              <tr key={agent}>
                <th className="p-3 bg-white/5 border-b border-white/10 font-semibold">{agent}</th>
                {matrixData[rowIndex].map((value, colIndex) => (
                  <td key={colIndex} className={`p-3 border-b border-white/10 text-center ${getCellColor(value)}`}>
                    <span className="font-mono text-lg">{value.toFixed(2)}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
