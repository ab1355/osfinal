import AkashDeployment from "@/components/deployment/AkashDeployment";

export default function DeployPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Akash Network Deployment</h1>
      <div className="bg-glass border border-glass rounded-lg shadow-lg p-6 backdrop-blur-glass">
        <AkashDeployment />
      </div>
    </div>
  );
}
