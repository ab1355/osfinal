"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
	const pathname = usePathname();

	const links = [
		{ href: "/dashboard", label: "Dashboard" },
		{ href: "/agents", label: "Agents" },
		{ href: "/automation", label: "Automation" },
		{ href: "/optimization", label: "Optimization" },
		{ href: "/research", label: "Research" },
		{ href: "/roadmap", label: "Roadmap" },
		{ href: "/deploy", label: "Deploy" },
	];

	return (
		<div className="bg-gray-900 text-white w-64 p-6">
			<h2 className="text-2xl font-bold mb-6">Menu</h2>
			<nav>
				<ul>
					{links.map((link) => (
						<li key={link.href} className="mb-4">
							<Link
								href={link.href}
								className={`hover:text-indigo-400 ${pathname === link.href ? "text-indigo-400" : ""}`}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
