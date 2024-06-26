import Polygon from "@/svgs/Polygon";
import React from "react";

export default function HypothesisCard({ icon, desc }) {
	return (
		<div className="w-[30%] bg-white-1 p-5 h-[220px] flex flex-col gap-4">
			{icon}
			<p className="text-justify font-light">{desc}</p>
		</div>
	);
}
