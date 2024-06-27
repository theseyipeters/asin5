import React from "react";
import DealCard from "../components/DealCard";
import DealCard1 from "../components/DealCard1";

export default function InvestorsNetwork() {
	const deal1 = [
		{ title: "Idea Stage", content: "$5k for 5% Equity" },
		{ title: "Expected Revenue at This Stage", content: " $0/mth" },
		{ title: "Duration of Raise", content: "1mth" },
		{
			title: "Who Can Invest",
			content: "People with Domain Expertise and Advisors ",
		},
	];
	const deal2 = [
		{
			title: "Build Stage",
			content: "$25k worth of service for 10% Equity",
		},
		{ title: "Expected Revenue at This Stage", content: " $100+/mth" },
		{ title: "Duration of Raise", content: "1-3mths" },
		{
			title: "Who Can Invest",
			content: "Developers, Engineers, Growth Marketers",
		},
	];
	const deal3 = [
		{
			title: "Validation Stage",
			content: "$50k for 5% Equity",
		},
		{ title: "Expected Revenue at This Stage", content: "$1k+/mth" },
		{ title: "Duration of Raise", content: "3-6mths" },
		{
			title: "Who Can Invest",
			content: "Everyone",
		},
	];
	const deal4 = [
		{
			title: "Traction Stage",
			content: "$125k worth of service for 5% Equity",
		},
		{ title: "Expected Revenue at This Stage", content: "$5k+/mth" },
		{ title: "Duration of Raise", content: "6-12mths" },
		{
			title: "Who Can Invest",
			content: "Media, Influencers, Celebrity, Platform Owners ",
		},
	];
	return (
		<section className="px-[30px] md:px-[50px] lg:px-[120px] w-full flex flex-col">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center px-[30px] md:px-[50px] lg:px-[120px]">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						SINC Investors Network
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						Our deals are structured not just to take in investments but to
						onboard owners passionate about our solutions. Our portfolio
						companies are valued at $50k at start, with these low valuation, you
						are guaranteed at least 2x-5x, usually been the first to invest.
						<br />
						<br />
						<span className="font-medium hidden lg:block">
							Disclaimer:
						</span>{" "}
						These deal flows is a statement of our projections and may differ
						from stage to stage and from venture to venture and the guarantee is
						for deal 1, usually the first to invest
					</p>
				</div>
			</div>
			<div className="mt-[44px] flex flex-col gap-8">
				<div className="flex flex-col gap-8">
					<h2 className="text-base md:text-lg lg:text-xl font-medium text-center lg:text-left">
						Angel Investors & Venture Capital{" "}
						<span className="font-light">(Invest from $50k and above)</span>
					</h2>

					<div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-normal">
						<DealCard
							dealNumber={"1"}
							dealList={deal1}
						/>
						<DealCard
							dealNumber={"2"}
							dealList={deal2}
						/>
						<DealCard
							dealNumber={"3"}
							dealList={deal3}
						/>
						<DealCard
							dealNumber={"4"}
							dealList={deal4}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h2 className="text-base md:text-lg lg:text-xl font-medium text-center lg:text-left">
						Micro Angel Investors & Service incubators{" "}
						<span className="font-light">(Invest from $500 & above)</span>
					</h2>

					<div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-normal">
						<DealCard
							dealNumber={"5"}
							dealList={deal1}
						/>
						<DealCard
							dealNumber={"6"}
							dealList={deal2}
						/>
						<DealCard
							dealNumber={"7"}
							dealList={deal3}
						/>
						<DealCard1 />
					</div>
				</div>
			</div>
		</section>
	);
}
