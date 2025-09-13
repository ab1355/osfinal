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
        <div className="w-64 p-6 bg-glass border-r border-glass backdrop-blur-glass">
			<h2 className="text-2xl font-bold mb-6 text-foreground">Menu</h2>
			<nav>
				<ul>
					{links.map((link) => (
						<li key={link.href} className="mb-4">
							<Link
								href={link.href}
                                className={`hover:text-primary ${pathname === link.href ? "text-primary" : "text-foreground/80"}`}>
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
