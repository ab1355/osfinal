# Handoff: Integrating the 371 OS QuestFlow Backend

## 1. Objective

The primary goal for the next development step is to transition the frontend application from using mocked, static data to a fully integrated system connected to the live 371 OS QuestFlow backend. This will involve replacing all mock data implementations with real API calls and a live WebSocket connection.

## 2. Backend Resources

Before you begin, familiarize yourself with the QuestFlow backend architecture and documentation:

-   **QuestFlow Source Code:** [https://github.com/371-Minds/os/tree/main/questflow](https://github.com/371-Minds/os/tree/main/questflow)
-   **QuestFlow README:** [https://github.com/371-Minds/os/blob/main/questflow/README.md](https://github.com/371-Minds/os/blob/main/questflow/README.md)

Assume the backend is running and the API is accessible at a base URL (e.g., `http://localhost:8000`).

## 3. Core Task: Implement `QuestFlowBridge`

The most critical file for this task is `/src/lib/questflow-bridge.ts`. Currently, all methods in this class return hardcoded, mock data. Your task is to implement the body of each method to make `fetch` requests to the corresponding live API endpoints.

**Action Items for `questflow-bridge.ts`:**

-   **Environment Variables:** Do not hardcode the API base URL. Add a new environment variable `NEXT_PUBLIC_QUESTFLOW_API_URL` to a `.env.local` file and use it to construct the request URLs.
-   **Implement Methods:** Update the following methods with `async/await` and `fetch`:

    -   `getWorkflowStatus()`: Should make a **GET** request to an endpoint like `/api/v1/workflows/status`.
    -   `getCSuiteStatus()`: Should make a **GET** request to an endpoint like `/api/v1/csuite/status`.
    -   `deployToAkash(config)`: Should make a **POST** request to an endpoint like `/api/v1/deploy/akash`, sending the `config` object in the request body.
    -   `updateWorkflowsFromResearch(findings)`: Should make a **POST** request to an endpoint like `/api/v1/research/update`, sending the `findings`.
    -   `triggerCSuiteMeeting(topic)`: Should make a **POST** request to an endpoint like `/api/v1/csuite/meet`, sending the `topic`.
    -   `updateTechStack(payload)`: Should make a **POST** request to an endpoint like `/api/v1/automation/tech-stack`.
    -   `scaleResources(payload)`: Should make a **POST** request to an endpoint like `/api/v1/automation/scale`.
    -   `optimizeDeployment(payload)`: Should make a **POST** request to an endpoint like `/api/v1/automation/optimize`.

-   **Error Handling:** Implement robust error handling for all API requests. Catch potential network errors and non-2xx response codes.
-   **Endpoint Verification:** The endpoints listed above are suggestions based on standard REST practices. **You must verify the exact endpoint paths and request/response schemas** by inspecting the QuestFlow backend source code in the `api/` directory.

## 4. Implement Real-time WebSocket Connection

The file `/src/lib/realtime.ts` contains a `RealtimeSync` class that is currently a placeholder. You need to implement it to connect to the QuestFlow WebSocket server for live data updates.

**Action Items for `realtime.ts`:**

1.  **WebSocket URL:** Use an environment variable, `NEXT_PUBLIC_QUESTFLOW_WS_URL`, for the WebSocket endpoint (e.g., `ws://localhost:8000/ws`).
2.  **Establish Connection:** In the constructor, create a new `WebSocket` instance and establish a connection.
3.  **Event Handlers:** Implement `onopen`, `onmessage`, `onclose`, and `onerror` handlers to manage the connection lifecycle and process incoming data.
4.  **Data Broadcasting:** When a message is received, you need to parse the data and broadcast it to the relevant components. You can use a custom event system or a state management library for this.

## 5. Verification and Cleanup

-   **Verify Integration:** Once implemented, run the application and confirm that the dashboard displays live data from the backend. Use the browser's developer tools (Network tab) to ensure API requests are being sent correctly and responses are as expected.
-   **Remove Mock Data:** After confirming the live integration works, remove all mock data, including the placeholder timeout functions and static JSON objects from `questflow-bridge.ts` and other files.

By following these steps, you will successfully connect the frontend to the live backend, making the application fully operational.
