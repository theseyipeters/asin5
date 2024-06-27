import Applications from "@/svgs/Applications";
import React from "react";

const EIRCard = () => {
	return (
		<div className="w-full md:w-[500px] lg:w-[400px] bg-white-1 p-5 h-full flex flex-col gap-6 rounded-xl flex-shrink-0">
			<span className="w-[60px] h-[60px] bg-gray-1 rounded-full flex items-center justify-center">
				<Applications />
			</span>

			<div className="flex flex-col gap-4">
				<h3 className="text-xl font-normal">Application and Selection</h3>

				<div className="flex flex-col gap-2">
					<p className="font-light leading-[22.1px] w-full text-sm md:text-base lg:text-base">
						Begin your journey by completing our straightforward application
						form. Share insights into your entrepreneurial background,
						expertise, and your vision for supporting the success of our
						portfolio companies.
					</p>
					<p className="font-light leading-[22.1px] w-full text-sm md:text-base lg:text-base">
						Our dedicated selection committee, comprised of key stakeholders at
						SINC Partners, will carefully review your application.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EIRCard;
