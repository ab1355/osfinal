"use client";

import { useState } from "react";

export default function QueryGenerator() {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle query submission logic here
		console.log(query);
	};

	return (
		<div className="bg-secondary p-4 rounded-lg">
			<h2 className="text-xl font-bold mb-4 font-serif">Query Generator</h2>
			<form onSubmit={handleSubmit}>
				<textarea
					className="w-full bg-accent p-2 rounded-lg mb-4 text-white font-sans"
					rows={5}
					placeholder="Enter your research query..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					type="submit"
					className="w-full bg-accent hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-lg font-sans"
				>
					Generate
				</button>
			</form>
		</div>
	);
}
