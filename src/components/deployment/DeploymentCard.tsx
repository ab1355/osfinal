
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AkashDeployment } from "@/types/deployment";

interface DeploymentCardProps {
    deployment: AkashDeployment;
}

export function DeploymentCard({ deployment }: DeploymentCardProps) {
    return (
        <Card>
            <CardHeader>
                <h3>{deployment.name}</h3>
            </CardHeader>
            <CardContent>
                <p>Status: {deployment.status}</p>
                <p>CPU: {deployment.cpu} vCPUs</p>
                <p>Memory: {deployment.memory} GB</p>
                <p>Storage: {deployment.storage} GB</p>
                <p>Cost: ${deployment.cost}/month</p>
            </CardContent>
        </Card>
    );
}
