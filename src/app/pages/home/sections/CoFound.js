import React from "react";
import CoFoundCard from "../components/CoFoundCard";
import ArrowRight from "@/svgs/ArrowRight";

export default function CoFound() {
	return (
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-[60%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Co-found With Us
					</h1>
					<p className="text-center font-light">
						We seek to collaborate with visionary individuals who are solving
						similar problems of helping entrepreneurs succeed
					</p>
				</div>
			</div>
			<div className="w-full lg:h-[300px] flex flex-col lg:flex-row mt-[64px] items-center justify-between">
				<CoFoundCard
					index={"1"}
					bgColor={`bg-black-1`}
					title={"We Ideate"}
					desc={`We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.`}
				/>
				<CoFoundCard
					index={"2"}
					bgColor={`bg-orange-1`}
					title={"You Validate"}
					desc={`You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions `}
				/>
				<CoFoundCard
					index={"3"}
					bgColor={`bg-pink-1`}
					title={"You Co-own"}
					desc={`After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.`}
				/>
			</div>

			<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
				<span className="underline underline-offset-4">Build your dream</span>{" "}
				<ArrowRight />
			</button>
		</section>
	);
}
