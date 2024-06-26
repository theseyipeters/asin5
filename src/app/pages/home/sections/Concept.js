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
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="border w-full flex flex-col items-center justify-center">
				<div className="w-[60%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Our Concept Innovations
					</h1>
					<p className="text-center font-light">
						We have proprietary concept innovations that will support the
						startup ecosystem, support solution-providers/entrepreneurs and
						ultimately help democratize success;
					</p>
				</div>

				<div className="w-full flex flex-row items-center justify-between h-full mt-[64px]">
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
