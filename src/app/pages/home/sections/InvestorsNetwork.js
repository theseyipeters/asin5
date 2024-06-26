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
		<section className="px-[120px] w-full flex flex-col">
			<div className="w-full flex flex-col items-center justify-center">
				<div className=" w-[65%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						SINC Investors Network
					</h1>
					<p className="text-center font-light">
						Our deals are structured not just to take in investments but to
						onboard owners passionate about our solutions. Our portfolio
						companies are valued at $50k at start, with these low valuation, you
						are guaranteed at least 2x-5x, usually been the first to invest.
						<br />
						<br />
						<span className="font-medium">Disclaimer:</span> These deal flows is
						a statement of our projections and may differ from stage to stage
						and from venture to venture and the guarantee is for deal 1, usually
						the first to invest
					</p>
				</div>
			</div>
			<div className="mt-[44px] flex flex-col gap-8">
				<div className="flex flex-col gap-8">
					<h2 className="text-xl font-medium">
						Angel Investors & Venture Capital{" "}
						<span className="font-light">(Invest from $50k and above)</span>
					</h2>

					<div className="w-full flex flex-row">
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
					<h2 className="text-xl font-medium">
						Micro Angel Investors & Service incubators{" "}
						<span className="font-light">(Invest from $500 & above)</span>
					</h2>

					<div className="w-full flex flex-row">
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
