import React from "react";
import EIRCard from "../components/EIRCard";
import ArrowRight from "@/svgs/ArrowRight";
import Back from "@/svgs/Back";
import Forward from "@/svgs/Forward";

export default function EIRProgram() {
	return (
		<section className=" w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="px-[120px] w-[60%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Join Our Entrepreneur In Residence (EIR) Program
					</h1>
					<p className="text-center font-light">
						Our EIR program is our structured 3 months un-paid program designed
						to help us have a pipeline of business and technical cofounders who
						can run the venture of choice as CEO & CTO owning 20% equity each.
					</p>
				</div>

				<div className="pl-[120px] w-full lg:h-[380px] flex flex-col lg:flex-row  mt-[64px] items-center justify-between">
					<div className="flex flex-row gap-6 overflow-x-auto">
						<EIRCard />
						<EIRCard />
						<EIRCard />
						<EIRCard />
						<EIRCard />
						<EIRCard />
						<EIRCard />
					</div>
				</div>

				<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
					<span className="underline underline-offset-4">
						Support the Future
					</span>{" "}
					<ArrowRight />
				</button>

				<div className="mt-[44px] flex flex-row gap-[75px] items-center">
					<button className="bg-transparent border border-black-1 h-[80px] w-[80px] rounded-full flex items-center justify-center">
						<Back />
					</button>
					<button className="bg-transparent border border-black-1 h-[80px] w-[80px] rounded-full flex items-center justify-center">
						<Forward />
					</button>
				</div>
			</div>
		</section>
	);
}
