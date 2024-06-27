import ArrowRight from "@/svgs/ArrowRight";
import React from "react";

const NetworkCard = ({ heading, comment1, comment2 }) => {
	return (
		<div className="w-full bg-white-1 h-auto p-6 flex flex-col gap-5 rounded-xl">
			<h2 className="text-2xl leading-[28.8px] font-medium w-[90%]">
				{heading}
			</h2>

			<div className="text-gray-1 flex flex-col gap-2">
				<p className="font-light">{comment1}</p>

				<p className="font-semibold">{comment2}</p>
			</div>

			<button className="flex flex-row gap-1 items-center font-medium mt-auto">
				<span className="underline underline-offset-4">Learn More</span>{" "}
				<ArrowRight />
			</button>
		</div>
	);
};

export default NetworkCard;
