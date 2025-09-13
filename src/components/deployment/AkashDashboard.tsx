"use client";
import { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DeploymentCard } from "./DeploymentCard";
import { ResourceMonitor } from "./ResourceMonitor";
import { AkashDeployment } from "@/types/deployment";

export function AkashDashboard() {
  const [deployments, setDeployments] = useState<AkashDeployment[]>([]);
  const [costSavings, setCostSavings] = useState<number>(97.6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Active Deployments */}
      <Card>
        <CardHeader>
          <h3>Active Deployments</h3>
        </CardHeader>
        <CardContent>
          {deployments.map(deployment => (
            <DeploymentCard key={deployment.id} deployment={deployment} />
          ))}
        </CardContent>
      </Card>

      {/* Cost Savings Metrics */}
      <Card>
        <CardHeader>
          <h3>Cost Optimization</h3>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-500">
            {costSavings}% Savings
          </div>
          <p className="text-sm text-muted-foreground">
            vs Traditional Cloud Providers
          </p>
        </CardContent>
      </Card>

      {/* Resource Usage */}
      <ResourceMonitor />
    </div>
  );
}
