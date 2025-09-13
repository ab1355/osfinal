'use client';

const StatusIndicator = ({ name, status }: { name: string, status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'healthy':
      case 'active':
      case 'operational':
      case 'ready':
        return 'bg-green-600/50 text-green-300';
      default:
        return 'bg-red-600/50 text-red-300';
    }
  };

  return (
    <div className="flex justify-between items-center">
      <span>{name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</span>
      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor()}`}>
        {status}
      </span>
    </div>
  );
};

export default StatusIndicator;
