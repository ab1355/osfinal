export default function ProgressIndicator() {
	return (
		<div className="bg-gray-800 p-4 rounded-lg">
			<h2 className="text-xl font-bold mb-4">Progress Indicator</h2>
			<div className="w-full bg-gray-700 rounded-full h-4">
				<div
					className="bg-blue-500 h-4 rounded-full"
					style={{ width: "45%" }}
				></div>
			</div>
		</div>
	);
}
