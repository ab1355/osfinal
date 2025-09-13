'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StatusIndicator from './StatusIndicator';

export function IntegrationStatus() {
  const [status, setStatus] = useState({
    questflowConnection: 'healthy',
    workflowSync: 'active', 
    csuiteCoordination: 'operational',
    deploymentPipeline: 'ready'
  });
  
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <h3>371 OS Integration Status</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(status).map(([key, value]) => (
            <StatusIndicator key={key} name={key} status={value} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
