import React from "react";
import ConceptCard from "../components/ConceptCard";

export default function Concept() {
	const conceptArray = [
		{
			concept: "Service Incubator",
			desc: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
		},
		{
			concept: "Virtualting",
			desc: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
		},
		{
			concept: "Diiming",
			desc: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ",
		},
	];
	return (
		<section className="px-[30px] md:px-[50px] lg:px-[120px] w-full h-fit flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[60%] flex flex-col gap-4 lg:gap-8 items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Our Concept Innovations
					</h1>
					<p className="text-center font-light w-[80%]">
						We have proprietary concept innovations that will support the
						startup ecosystem, support solution-providers/entrepreneurs and
						ultimately help democratize success;
					</p>
				</div>

				<div className="w-full flex flex-col lg:flex-row items-center gap-y-6 justify-between h-full mt-[64px]">
					{conceptArray.map((concept, index) => (
						<ConceptCard
							key={index}
							concept={concept.concept}
							desc={concept.desc}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
