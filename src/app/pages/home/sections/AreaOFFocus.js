import React from "react";
import AreaCard from "../components/AreaCard";

export default function AreaOFFocus() {
	const areas = [
		{
			index: "01",
			description: "Business Support & Incubation",
			bgColor: "bg-black-2",
		},
		{
			index: "02",
			description: "On-Demand & As-A-Service",
			bgColor: "bg-orange-1",
		},
		{
			index: "03",
			description: "Marketplace & Crowdsourcing",
			bgColor: "bg-pink-1",
		},
		{
			index: "04",
			description: "Aggregation & Shared Economy",
			bgColor: "bg-teal-1",
		},
		{
			index: "05",
			description: "Decentralized Economy & Digital Assets",
			bgColor: "bg-pink-2",
		},
	];
	return (
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="border w-full flex flex-col items-center justify-center">
				<div className="w-1/2 flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Our Area of Focus
					</h1>
					<p className="text-center font-light">
						In our quest to help make success available to everyone, we have
						initial strategic direction to focus on these five (5) key areas at
						the lab
					</p>
				</div>

				<div className="w-full flex flex-row mt-[64px]">
					{areas.map((area, index) => (
						<AreaCard
							key={index}
							index={area.index}
							description={area.description}
							bgColor={area.bgColor}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
