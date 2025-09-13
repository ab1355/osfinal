import { v4 as uuidv4 } from 'uuid';

// A mock of the Google Cloud Tasks client
// In a real application, this would be the @google-cloud/tasks client
const functions = {
  https: {
    onRequest: (handler: (req: any, res: any) => Promise<void>) => {
      // This is a mock of the Firebase Functions https.onRequest trigger
      // It immediately invokes the handler for demonstration purposes
      const req = {};
      const res = {
        sendStatus: (status: number) => console.log(`[Mock] HTTP Response Status: ${status}`),
      };
      handler(req, res);
    },
  },
  runWith: (options: any) => {
    // This is a mock of the Firebase Functions runWith method
    // It returns an object with a tasks property that has a taskQueue method
    return {
      tasks: {
        taskQueue: (queueName: string, ..._rest: any[]) => {
          console.log(`[Mock] Task queue '${queueName}' configured with options:`, options);
          return {
            onDispatch: (handler: (data: any) => Promise<void>) => {
              // This is a mock of the onDispatch trigger
              // It immediately invokes the handler for demonstration purposes
              const data = { id: 'mock-task-id' }; // Mock task data
              console.log('[Mock] Dispatching task with data:', data);
              handler(data);
            },
          };
        },
      },
    };
  },
};

// A mock of the getFunctions utility from firebase-functions/v2
const getFunctions = () => {
  return {
    taskQueue: (queueName: string) => {
      return {
        enqueue: async (data: any, options?: any) => {
          console.log(`[Mock] Enqueuing task to '${queueName}' with data:`, data, 'and options:', options);
          // In a real scenario, this would make an API call to Google Cloud Tasks
          // For this mock, we'll just log the action and return a resolved promise
          await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation
          return { id: uuidv4(), ...data };
        },
      };
    },
  };
};

// This mock simulates the behavior of a Firebase Function that enqueues tasks.
export const enqueueBackupTasks = functions.https.onRequest(
  async (_request, response) => {
    const queue = getFunctions().taskQueue("backupApod");
    const enqueues = [];
    for (let i = 0; i <= 10; i += 1) {
      const scheduleDelaySeconds = i * 60;
      enqueues.push(
        queue.enqueue(
          { id: `task-${i}` },
          {
            scheduleDelaySeconds,
            dispatchDeadlineSeconds: 60 * 5, // 5 minutes
          },
        ),
      );
    }
    await Promise.all(enqueues);
    response.sendStatus(200);
  });

// This mock simulates a task queue function with retry and rate limit configurations.
export const backupApod = functions
  .runWith({ secrets: ["NASA_API_KEY"] })
  .tasks.taskQueue("backupApod", {
    retryConfig: {
      maxAttempts: 5,
      minBackoffSeconds: 60,
    },
    rateLimits: {
      maxConcurrentDispatches: 6,
    },
  }).onDispatch(async (data) => {
    console.log('[Mock] Processing task:', data);
    // In a real function, you would have your task processing logic here.
    // For example, calling the NASA APOD API and storing the result.
  });
