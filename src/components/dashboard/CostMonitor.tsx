'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { automationRules } from '@/lib/automation';
import { CostAnalysis } from '@/types/questflow';

export default function CostMonitor() {
  const [costData, setCostData] = useState<CostAnalysis | null>(null);

  useEffect(() => {
    // Simulate fetching cost data
    const interval = setInterval(() => {
      const simulatedCostData: CostAnalysis = {
        currentSpend: Math.random() * 1000,
        optimizedSpend: Math.random() * 800,
        get savingsOpportunity() { // Use a getter to ensure this is always calculated correctly
          return ((this.currentSpend - this.optimizedSpend) / this.currentSpend) * 100;
        }
      };
      setCostData(simulatedCostData);
      automationRules.onCostAlert(simulatedCostData);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Cost Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        {costData ? (
          <div>
            <p>Current Spend: ${costData.currentSpend.toFixed(2)}</p>
            <p>Optimized Spend: ${costData.optimizedSpend.toFixed(2)}</p>
            <p className={costData.savingsOpportunity > 20 ? 'text-green-400' : ''}>
              Savings Opportunity: {costData.savingsOpportunity.toFixed(2)}%
            </p>
          </div>
        ) : (
          <p>Loading cost data...</p>
        )}
      </CardContent>
    </Card>
  );
}
