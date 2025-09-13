import AkashDeployment from "@/components/deployment/AkashDeployment";

export default function DeployPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Akash Network Deployment</h1>
      <AkashDeployment />
    </div>
  );
}
