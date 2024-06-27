import React from "react";
import DealListItem from "./DealListItem";

const DealCard = ({ dealList, dealNumber }) => {
	return (
		<div className="w-full md:w-[500px] lg:w-[25%] h-fit md:h-fit lg:min-h-fit lg:max-h-auto bg-transparent p-5 border-t border-r-0 lg:border-r border-b border-gray-1/30 flex flex-col gap-3 flex-shrink-0">
			<h3 className="text-lg font-medium">Deal {dealNumber}</h3>

			<ul className="flex flex-col gap-1">
				{dealList.map((item, index) => (
					<DealListItem
						key={index}
						title={item.title}
						content={item.content}
					/>
				))}
			</ul>
		</div>
	);
};

export default DealCard;
