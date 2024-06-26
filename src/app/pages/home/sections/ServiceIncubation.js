import React from "react";
import HypothesisCard from "../components/HypothesisCard";
import Polygon from "@/svgs/Polygon";
import Polygon2 from "@/svgs/Polygon2";
import Polygon3 from "@/svgs/Polygon3";
import ArrowRight from "@/svgs/ArrowRight";

export default function ServiceIncubation() {
	return (
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-[60%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Our Service Incubation Model
					</h1>
					<p className="text-center font-light">
						The Service Incubation model is an alternate funding model for
						startup that allows professionals to offer their services to
						startups in return for a minute equity (usually between 0.5% to
						1.5%) in the startup. As a service incubator, you will see your
						share grow as much as 1000% in 12 – 24 months as been first to
						invest.
					</p>
				</div>

				<div className="w-full mt-[44px]">
					<div>
						<h2 className="text-[32px]">Hypothesis</h2>
						<p className="font-light">
							Just a few reasons we know its time for this model
							within the ecosystem
						</p>
					</div>

					<div className="w-full flex flex-row items-center justify-between h-full mt-[64px]">
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
					<div>
						<h2 className="text-[32px]">Case Study</h2>
						<p className="font-light">
							See what Service Incubators get, the maths behind Service Equity
							(SEEQ) and what the value of your share equity can be over time
						</p>
					</div>

					<div className="w-full flex flex-row items-center gap-3 h-full mt-[44px]">
						<span className="text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light">
							Service Incubator Equity
						</span>
						<span className="text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light">
							SEEQ Maths Equation
						</span>
						<span className="text-xl bg-white-1 border border-black-1 rounded-full px-8 py-3 font-light">
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
