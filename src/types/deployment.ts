
export interface AkashDeployment {
    id: string;
    name: string;
    status: 'active' | 'pending' | 'error' | 'inactive';
    cpu: number; // vCPUs
    memory: number; // GB
    storage: number; // GB
    cost: number; // USD per month
  }
  