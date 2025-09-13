# Decentralized AI C-Suite - Frontend

This project is the frontend interface for the Decentralized AI C-Suite, a platform for orchestrating and visualizing the work of autonomous AI agents powered by the 371 OS and QuestFlow backend.

## Overview

This is a Next.js application designed for managing and automating AI development workflows. It features a real-time, data-driven architecture to monitor and interact with various backend services, including task management, C-Suite coordination, resource optimization, and automated deployment.

The application is built to be a highly responsive and intuitive interface, providing a live, at-a-glance overview of a complex system of AI agents.

## Features

-   **Live Dashboard:** A real-time dashboard that provides a high-level overview of the system's operational status, including:
    -   `WorkflowStatusCard`: Live status of all QuestFlow agents and their tasks.
    -   `CSuiteStatusCard`: Online status and tasks of C-Suite agents (CEO, CTO, CFO).
    -   `ResourceMonitor`: Real-time monitoring of CPU, memory, and disk usage.
    -   `CostMonitor`: Tracks current and optimized spending with savings opportunities.
    -   `IntegrationStatus`: Health checks for key system integrations.
    -   `AkashDeployment`: Interface for deploying to the Akash Network.
-   **Research & Analysis:** A dedicated page for conducting research, analyzing its impact, and automatically triggering workflows.
-   **Advanced Automation:** Smart automation rules trigger actions based on UI interactions and data changes (e.g., scaling resources when CPU usage is high).
-   **Modern & Responsive Design:** A dark-themed, component-based UI built with modern design principles for a polished and accessible user experience.

## Architecture

The application is built on a dynamic, real-time architecture that leverages client-side data fetching to provide live updates.

-   **`QuestFlowBridge`:** The core of the frontend-backend communication is the `QuestFlowBridge` class (`/src/lib/questflow-bridge.ts`). This API integration layer centralizes all communication with the QuestFlow backend. **(Note: Currently uses mocked data).**
-   **Client-Side Data Fetching:** The dashboard and research pages are Client Components (`"use client"`) that use `useEffect` hooks to fetch data from the `QuestFlowBridge` at regular intervals.
-   **Component-Based Structure:** The UI is composed of modular React components, primarily located in the `/src/components` directory.
-   **Real-time Synchronization:** The `RealtimeSync` class (`/src/lib/realtime.ts`) is designed to establish a WebSocket connection for live data updates across the application.

## Tech Stack

-   **Framework:** Next.js 14 (with App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** `shadcn/ui`

## Getting Started

This project is set up to run within the Firebase Studio IDE.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Application:**
    The development server is managed by the Firebase Studio environment and runs automatically. You do not need to run `npm run dev`.
3.  **View the Preview:**
    Open the preview panel in the IDE to see the live application. The output of the running dev server can be monitored for real-time feedback and error logs.

## Project Structure

```
/
├── app/                # Next.js App Router: pages and layouts
├── components/         # Reusable UI components
│   ├── dashboard/
│   ├── deployment/
│   ├── optimization/
│   └── research/
├── lib/                # Core application logic
│   ├── automation.ts   # Smart automation rules
│   ├── questflow-bridge.ts # API communication layer (CURRENTLY MOCKED)
│   └── realtime.ts     # WebSocket connection handler
├── public/             # Static assets
└── types/              # TypeScript type definitions
    └── questflow.ts
```
