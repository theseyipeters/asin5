import React from "react";

const ConceptCard = ({ concept, desc }) => {
	return (
		<div className="w-[30%] h-[220px] p-5 flex flex-col gap-8 text-center bg-white-1 rounded-xl">
			<h3 className="font-medium text-[22px]">{concept}</h3>

			<p className="font-light">{desc}</p>
		</div>
	);
};

export default ConceptCard;
