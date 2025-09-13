# Project Blueprint

## Overview

This project is a Next.js application designed for managing and automating AI development workflows. It features a real-time, data-driven architecture to monitor and interact with various backend services, including task management, C-Suite coordination, resource optimization, and automated deployment.

## Architecture

The application is built on a dynamic, real-time architecture that leverages client-side data fetching to provide live updates.

*   **`QuestFlowBridge`:** The core of the frontend-backend communication is the `QuestFlowBridge` class (`/src/lib/questflow-bridge.ts`). This API integration layer centralizes all communication with the QuestFlow backend, handling data fetching for workflow status, C-Suite agent status, and triggering actions like deployments or meetings.
*   **Client-Side Data Fetching:** The dashboard and research pages are now Client Components (`"use client"`) that use `useEffect` hooks to fetch data from the `QuestFlowBridge` at regular intervals, providing a live view of the system's status.
*   **Component-Based Structure:** The UI is composed of modular React components, primarily located in the `/src/components` directory, separated by feature (e.g., `dashboard`, `deployment`, `research`).

## Implemented Features

### Core

*   Next.js 14 with App Router
*   TypeScript
*   Tailwind CSS for styling
*   `shadcn/ui` for UI components

### Live Dashboard (`/dashboard`)

A real-time dashboard that provides a high-level overview of the system's operational status.

*   **`WorkflowStatusCard`:** Displays the live status of all QuestFlow agents and their current tasks, updating every 5 seconds.
*   **`CSuiteStatusCard`:** Shows the online status and current tasks of the C-Suite agents (CEO, CTO, CFO).
*   **`ResourceMonitor`:** A component for monitoring resource usage.
*   **`AkashDeployment`:** A component for deploying the application to the Akash Network. It is now refactored to use an `onDeploy` prop provided by the parent page, decoupling it from a specific `QuestFlowBridge` instance.
*   **`CostMonitor`:** A component that simulates fetching and displaying cost analysis data.
*   **`IntegrationStatus`:** A dashboard widget that displays the health of key system integrations, such as the connection to the QuestFlow backend, workflow synchronization, C-Suite coordination, and the deployment pipeline. This provides an at-a-glance view of the system's overall health.

### Research & Analysis (`/research`)

A dedicated page for conducting research, analyzing its impact, and automatically triggering workflows.

*   **`QueryGenerator`:** Allows users to input research queries. Upon completion, it uses a (mocked) `PerplexityClient` to analyze the query's potential impact.
*   **Automated Workflow Integration:** Based on the research findings' `impactScore`, the page automatically communicates with the `QuestFlowBridge` to:
    *   Update relevant 371 OS workflows (`updateWorkflowsFromResearch`).
    *   Trigger a C-Suite meeting if the impact is significant (`triggerCSuiteMeeting`).
*   **`AgentFeed`:** Displays a feed of agent activities.
*   **`ResearchImpact`:** A component for analyzing and displaying the impact of research findings.

### Advanced Integrations

*   **Real-time Synchronization (`/src/lib/realtime.ts`):** The `RealtimeSync` class establishes a WebSocket connection to the QuestFlow backend, allowing for real-time data updates across the application. This is initialized in the root layout.
*   **Smart Workflow Automation (`/src/lib/automation.ts`):** A set of automation rules are defined to trigger specific actions based on UI interactions and data changes:
    *   **`onResearchFindings`:** Triggers a tech stack update if the research findings mention "QuestFlow".
    *   **`onResourceThreshold`:** Scales up resources if CPU usage exceeds 80%.
    *   **`onCostAlert`:** Triggers deployment optimization if the cost savings opportunity is greater than 20%.
*   **New Types (`/src/types/questflow.ts`):** The `ResourceUsage` and `CostAnalysis` types have been added to support the new automation features.

### Style and Design

*   **Dark Mode:** The application uses a consistent dark theme for a modern, developer-friendly look.
*   **Sidebar Navigation:** A clear and intuitive sidebar allows for easy navigation between the main pages of the application.
*   **Modern Components:** The UI is built with modern design principles, utilizing `shadcn/ui` for polished and accessible components.

## Current Plan

The integration of the Integration Health Dashboard is complete.

## Summary of Work Done

This session focused on adding an Integration Health Dashboard to the application.

*   **`StatusIndicator` Component:** Created a reusable component to display the status of each integration.
*   **`IntegrationStatus` Component:** Created the main component to display the integration health dashboard.
*   **Dashboard Integration:** Added the `IntegrationStatus` component to the dashboard page.
*   **Blueprint Update:** Updated this `blueprint.md` file to reflect the new feature.
