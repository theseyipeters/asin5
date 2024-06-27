import React from "react";

const ConceptCard = ({ concept, desc }) => {
	return (
		<div className="w-full lg:w-[30%] h-full lg:h-[220px] p-5 flex flex-col gap-8 text-center bg-white-1 rounded-xl">
			<h3 className="font-medium text-[22px]">{concept}</h3>

			<p className="font-light w-[80%] lg:w-full flex mx-auto text-sm md:text-base lg:text-base">
				{desc}
			</p>
		</div>
	);
};

export default ConceptCard;
