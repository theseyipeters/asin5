import React from "react";
import GlobalButton from "@/components/ui/GlobalButton";
import Image from "next/image";
import heroimg2 from "@/assets/heroimg2.svg";

const HeroCard2 = () => {
	return (
		<div className="w-full flex flex-shrink-0 h-full">
			<div className="w-full lg:w-1/2 h-full bg-white-1 px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] flex flex-col items-start justify-center gap-6">
				<div className="w-full md:w-[80%] lg:w-[85%] flex flex-col gap-2 lg:gap-0">
					<h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[32px] md:leading-[32px]  lg:leading-[51.2px] text-black-1 ">
						We are big on these 3 things;
					</h3>
					<ul>
						<li className="text-gray-1 text-base md:text-lg  lg:text-xl leading-[32.2px] font-light">
							✓ Service Incubation & Ecosystem Advocacy
						</li>
						<li className="text-gray-1 text-base md:text-lg  lg:text-xl leading-[32.2px] font-light">
							✓ Building SAAS & Marketing Tech Platforms
						</li>
						<li className="text-gray-1 text-base md:text-lg  lg:text-xl leading-[32.2px] font-light">
							✓ Institutional Innovations
						</li>
					</ul>
				</div>

				<GlobalButton
					className={"max-w-48"}
					variant={"primary"}
					size={"md"}
					state="default">
					SINC With Us
				</GlobalButton>
			</div>
			<div className="w-1/2 hidden lg:block h-full bg-black-1 relative">
				<Image
					src={heroimg2}
					alt="heroImg-2"
					className="w-full h-full object-cover"
				/>

				<span className="bg-black-1/50 h-full w-full absolute top-0 left-0"></span>
			</div>

			<div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 controls flex flex-col gap-2 ">
				<span className="px-10 py-3 flex flex-col text-white-1 items-center justify-center rounded-full bg-grad">
					<h1 className="font-medium text-2xl">SIP 1.0</h1>
					<p className="font-light text-sm">2024 Cohort</p>
				</span>
				<span className="px-10 py-3 flex flex-col text-white-1 items-center justify-center rounded-full bg-grad">
					<h1 className="font-medium text-2xl">40+ </h1>
					<p className="font-light text-sm">To Be Incubated</p>
				</span>
				<span className="px-10 py-3 flex flex-col text-white-1 items-center justify-center rounded-full bg-grad">
					<h1 className="font-medium text-2xl">$1M+</h1>
					<p className="font-light text-sm">To Be Invested</p>
				</span>
			</div>
		</div>
	);
};

export default HeroCard2;
