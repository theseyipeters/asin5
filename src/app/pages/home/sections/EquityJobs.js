import React from "react";
import EquityCard from "../components/EquityCard";
import ArrowRight from "@/svgs/ArrowRight";

export default function EquityJobs() {
	return (
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className=" w-[65%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Equity jobs
					</h1>
					<p className="text-center font-light">
						See companies and startups offering equity or a mix of cash and
						equity for very important position in their company
					</p>
				</div>
			</div>

			<div className="w-full flex flex-row gap-8 items-center justify-between h-full mt-[64px]">
				<EquityCard />
				<EquityCard />
				<EquityCard />
				<EquityCard />
			</div>

			<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
				<span className="underline underline-offset-4">
					See More Equity Jobs
				</span>{" "}
				<ArrowRight />
			</button>
		</section>
	);
}
