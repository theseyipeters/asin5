import React from "react";
import GlobalButton from "@/components/ui/GlobalButton";
import Image from "next/image";
import heroimg1 from "@/assets/heroimg1.jpeg";

export default function HeroSection() {
	return (
		<section className="hero-container w-full flex h-[500px] relative">
			<div className="w-1/2 h-full bg-white-1 py-20 px-[120px] flex flex-col gap-6">
				<div className="w-[90%]">
					<h3 className="text-[32px] font-medium leading-[51.2px] text-black-1">
						SINC Partners is a service incubation company{" "}
					</h3>
					<p className="text-gray-1 leading-[32.2px] font-light">
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
			<div className="w-1/2 h-full bg-black-1 relative">
				<Image
					src={heroimg1}
					alt="heroImg-1"
					className="w-full h-full object-cover"
				/>
				<span className="bg-black-1/50 h-full w-full absolute top-0 left-0"></span>
			</div>
		</section>
	);
}
