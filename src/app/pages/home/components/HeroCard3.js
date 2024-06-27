import React from "react";
import GlobalButton from "@/components/ui/GlobalButton";
import Image from "next/image";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";

const HeroCard3 = () => {
	return (
		<div className="w-full flex flex-shrink-0 h-full">
			<div className="w-full lg:w-1/2 h-full bg-white-1 px-[30px] md:px-[50px] lg:px-[120px] flex flex-col items-start justify-center gap-6">
				<div className="w-full md:w-[80%] lg:w-[85%] flex flex-col gap-2 lg:gap-0">
					<h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[32px] md:leading-[32px]  lg:leading-[51.2px] text-black-1 ">
						Come with an idea, leave with a company.
					</h3>
					<p className="text-gray-1 text-base md:text-lg  lg:text-xl leading-[32.2px] font-light">
						You, alongside seasoned service partners and investors, expedite the
						growth and market entry of your startup.
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
					width={200}
					src={hero1}
					alt="hero1"
					className="absolute bottom-0 right-0"
				/>
				<Image
					width={400}
					src={hero2}
					alt="hero2"
					className="absolute top-[60px] right-0"
				/>
				<Image
					width={200}
					src={hero3}
					alt="hero3"
					className="absolute bottom-0 left-10"
				/>
				<Image
					width={300}
					src={hero4}
					alt="hero4"
					className="absolute top-0 -left-10"
				/>

				{/* <span className="bg-black-1/50 h-full w-full absolute top-0 left-0"></span> */}
			</div>
		</div>
	);
};

export default HeroCard3;
