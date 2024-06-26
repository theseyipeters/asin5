import React from "react";
import DealListItem from "./DealListItem";

const DealCard = ({ dealList, dealNumber }) => {
	return (
		<div className="w-[25%] h-[272px] bg-transparent p-5 border-t border-r border-b border-gray-1/30 flex flex-col gap-3">
			<h3 className="text-lg font-medium">Deal {dealNumber}</h3>

			<ul className="flex flex-col gap-1">
				{/* <li>
					✓ <span className="font-light">Idea Stage:</span> $5k for 5% Equity
				</li>
				<li>✓ Expected Revenue at This Stage: $0/mth</li>
				<li>✓ Duration of Raise: 1mth</li>
				<li>✓ Who Can Invest: People with Domain Expertise and Advisors </li> */}

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
