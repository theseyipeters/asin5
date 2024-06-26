import React from "react";

const AreaCard = ({ index, description, bgColor }) => {
	return (
		<div
			className={`${bgColor} w-[20%] h-[160px]  text-white p-5 flex flex-col items-start justify-between text-white-1`}>
			<p className="text-xl font-light">{index}</p>

			<p className="text-xl w-[180px] font-light">{description}</p>
		</div>
	);
};

export default AreaCard;
