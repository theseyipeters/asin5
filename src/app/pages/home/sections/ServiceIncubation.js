import React from "react";
import HypothesisCard from "../components/HypothesisCard";
import Polygon from "@/svgs/Polygon";
import Polygon2 from "@/svgs/Polygon2";
import Polygon3 from "@/svgs/Polygon3";
import ArrowRight from "@/svgs/ArrowRight";

export default function ServiceIncubation() {
	return (
		<section className="px-[30px] md:px-[50px] lg:px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Our Service Incubation Model
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						The Service Incubation model is an alternate funding model for
						startup that allows professionals to offer their services to
						startups in return for a minute equity (usually between 0.5% to
						1.5%) in the startup. As a service incubator, you will see your
						share grow as much as 1000% in 12 – 24 months as been first to
						invest.
					</p>
				</div>

				<div className="w-full mt-[44px]">
					<div className="w-full flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center lg:justify-start">
						<h2 className="text-xl md:text-2xl lg:text-[32px]">Hypothesis</h2>
						<p className="text-sm md:text-base lg:text-base text-center font-light">
							Just a few reasons we know its time for this model
							within the ecosystem
						</p>
					</div>

					<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 h-full mt-[44px] lg:mt-[64px]">
						<HypothesisCard
							icon={<Polygon />}
							desc={`Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support`}
						/>
						<HypothesisCard
							icon={<Polygon2 />}
							desc={`If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment`}
						/>
						<HypothesisCard
							icon={<Polygon3 />}
							desc={`Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return`}
						/>
					</div>
				</div>
				<div className="w-full mt-[44px]">
					<div className="w-full flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center lg:justify-start">
						<h2 className="text-xl md:text-2xl lg:text-[32px]">Case Study</h2>
						<p className="text-sm md:text-base lg:text-base text-center font-light">
							See what Service Incubators get, the maths behind Service Equity
							(SEEQ) and what the value of your share equity can be over time
						</p>
					</div>

					<div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row items-start lg:items-center gap-3 h-full mt-[44px]">
						<span className="w-full lg:w-fit text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light flex-shrink-0">
							Service Incubator Equity
						</span>
						<span className="w-full lg:w-fit text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light flex-shrink-0">
							SEEQ Maths Equation
						</span>
						<span className="w-full lg:w-fit text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light flex-shrink-0">
							Value of my Equity Over Time
						</span>
					</div>
				</div>

				<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
					<span className="underline underline-offset-4">
						Become A Service Incubator
					</span>{" "}
					<ArrowRight />
				</button>
			</div>
		</section>
	);
}
