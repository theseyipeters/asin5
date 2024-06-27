import Polygon from "@/svgs/Polygon";
import React from "react";

export default function HypothesisCard({ icon, desc }) {
	return (
		<div className="w-full md:w-[500px] lg:w-[30%] bg-white-1 p-5 h-[220px] md:h-[180px] lg:h-[220px] flex flex-col gap-4 justify-between lg:justify-normal text-gray-1 font-normal rounded-2xl">
			{icon}
			<p className="text-justify font-light leading-[22.1px] w-full text-sm md:text-base lg:text-base">
				{desc}
			</p>
		</div>
	);
}
