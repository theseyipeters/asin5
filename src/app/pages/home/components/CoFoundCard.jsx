import React from "react";

const CoFoundCard = ({ bgColor, title, desc, index }) => {
	return (
		<div className="w-[30%] bg-white-1 p-5 h-full flex flex-col gap-6 rounded-xl">
			<span
				className={`${bgColor} w-[60px] h-[60px] text-white-1 rounded-full flex items-center justify-center`}>
				{index}
			</span>

			<div className="flex flex-col gap-4">
				<h3 className="text-xl font-normal">{title}</h3>

				<p className="text-justify font-light">{desc}</p>
			</div>
		</div>
	);
};

export default CoFoundCard;
