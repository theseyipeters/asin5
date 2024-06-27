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
		<section className="px-[30px] md:px-[50px] lg:px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-1/2 flex flex-col  gap-4 lg:gap-8  items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Our Area of Focus
					</h1>

					<p className="text-center font-light">
						In our quest to help make success available to everyone, we have
						initial strategic direction to focus on these five (5) key areas at
						the lab
					</p>
				</div>

				<div className="w-full flex flex-col lg:flex-row mt-[64px]">
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
