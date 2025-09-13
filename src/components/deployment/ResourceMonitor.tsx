
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ResourceMonitor() {
    return (
        <Card>
            <CardHeader>
                <h3>Resource Monitor</h3>
            </CardHeader>
            <CardContent>
                <p>CPU Usage: 50%</p>
                <p>Memory Usage: 60%</p>
                <p>Storage Usage: 70%</p>
            </CardContent>
        </Card>
    );
}
