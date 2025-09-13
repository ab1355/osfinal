'use client';

import { useEffect } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { RealtimeSync } from '@/lib/realtime';

const inter = Inter({ subsets: ["latin"] });

// Metadata can not be exported from a client component. 
// We can keep it here, but it will be ignored.
// export const metadata: Metadata = {
// 	title: "Decentralized AI C-Suite",
// 	description:
// 		"Orchestrating and visualizing the work of autonomous AI agents.",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

  useEffect(() => {
    // Initialize the WebSocket connection for real-time updates
    const realtime = new RealtimeSync();
    // The connection is managed within the RealtimeSync class
  }, []);

	return (
		<html lang="en">
			<body className={`${inter.className} bg-primary text-white`}>
				<div className="flex">
					<Sidebar />
					<main className="flex-1 p-6">{children}</main>
				</div>
			</body>
		</html>
	);
}
