import React, { useState, useEffect } from "react";
import Image from "next/image";
import kreeca from "@/assets/portfolioLogos/kreeca.svg";
import GlobalButton from "@/components/ui/GlobalButton";

export default function EquityCard() {
	const [buttonSize, setButtonSize] = useState("sm");

	useEffect(() => {
		const updateButtonSize = () => {
			if (window.innerWidth >= 1024) {
				setButtonSize("lg");
			} else if (window.innerWidth >= 768) {
				setButtonSize("md");
			} else {
				setButtonSize("sm");
			}
		};

		// Set the initial size
		updateButtonSize();

		// Add event listener to handle screen resize
		window.addEventListener("resize", updateButtonSize);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener("resize", updateButtonSize);
		};
	}, []);

	return (
		<div className="w-full md:w-[350px] lg:w-full h-fit bg-white-1 rounded-2xl p-5">
			<div className="w-full flex flex-col gap-5">
				<div className="w-full flex flex-col gap-3">
					<Image
						src={kreeca}
						alt="kreeca"
						className="w-2/5 lg:w-3/5"
					/>
					<p className="font-light">
						This company is a SAAS Startup that builds AI copy generator...
					</p>
				</div>

				<div className="flex flex-col gap-4 w-full">
					<h3 className="text-lg font-medium">UX Strategist</h3>

					<div className="flex flex-row items-center justify-between">
						<div className="text-left flex flex-col items-start">
							<p className="text-sm font-light text-gray-2">LOCATION</p>
							<p className="text-sm font-light">Abuja, Nigeria</p>
						</div>
						<div className="text-left flex flex-col items-end">
							<p className="text-sm font-light text-gray-2">INDUSTRY</p>
							<p className="text-sm font-light">E-commerce</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-between">
						<div className="text-left flex flex-col items-start">
							<p className="text-sm font-light text-gray-2">EQUITY</p>
							<p className="text-sm font-light">Abuja, Nigeria</p>
						</div>
						<div className="text-left flex flex-col items-end">
							<p className="text-sm font-light text-gray-2">STIPEND</p>
							<p className="text-sm font-light">E-commerce</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-between">
						<div className="text-left flex flex-col items-start">
							<p className="text-sm font-light text-gray-2">DEADLINE</p>
							<p className="text-sm font-light">Abuja, Nigeria</p>
						</div>
						<div className="text-left flex flex-col items-end">
							<p className="text-sm font-light text-gray-2">ROLE TYPE</p>
							<p className="text-sm font-light">E-commerce</p>
						</div>
					</div>
				</div>

				<div className="w-[70%]">
					<GlobalButton
						variant={"primary"}
						size={buttonSize}
						state="default">
						View Details
					</GlobalButton>
				</div>
			</div>
		</div>
	);
}
