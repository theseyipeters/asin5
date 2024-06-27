import React from "react";
import GlobalButton from "@/components/ui/GlobalButton";
import Image from "next/image";
import heroimg1 from "@/assets/heroimg1.svg";

const HeroCard = () => {
	return (
		<div className="w-full flex flex-shrink-0 h-full">
			<div className="w-full lg:w-1/2 h-full bg-white-1 px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] flex flex-col items-start justify-center gap-6">
				<div className="w-full md:w-[80%] lg:w-[85%] flex flex-col gap-2 lg:gap-0">
					<h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[32px] md:leading-[32px]  lg:leading-[51.2px] text-black-1 ">
						SINC Partners is a service incubation company{" "}
					</h3>
					<p className="text-gray-1 text-base md:text-lg  lg:text-xl leading-[32.2px] font-light">
						Connecting experts in product development and growth marketing
						willing to offer their services to amazing startups in exchange
						for minute equity (usually 0.5% to 2%).
					</p>
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
					src={heroimg1}
					alt="heroImg-1"
					className="w-full h-full object-cover"
				/>

				<span className="bg-black-1/50 h-full w-full absolute top-0 left-0"></span>
			</div>
		</div>
	);
};

export default HeroCard;
