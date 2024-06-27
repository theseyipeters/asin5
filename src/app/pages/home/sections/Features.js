import React from "react";
import NetworkCard from "../components/NetworkCard";

export default function Features() {
	return (
		<section className="bg-white-2 py-[40px] lg:py-[80px] px-[30px] md:px-[50px] lg:px-[120px] flex flex-col items-center justify-center">
			<div className="bg-white-1 w-full  lg:w-[50%] py-8 px-5 rounded-3xl flex flex-col items-center">
				<p className="text-center text-base md:text-lg lg:text-xl font-light">
					&quot;Nigeria and Africa has a massive network effect that have not be
					fully utilized. With Nigerians/Africans in every country and territory
					of the world, we can scale an African business to 100+ countries in
					few weeks&quot;
				</p>

				<div className="flex flex-col gap-1 items-center w-fit mt-6">
					<p className="font-medium">Daniel Izeghs Oratokhai</p>
					<p className="text-center text-base font-light">
						Managing Partner at SINC Partners Ltd
					</p>
				</div>
			</div>

			<div className="hidden lg:block mt-[80px] w-[70%] lg:flex-col gap-8 items-center justify-center">
				<h1 className="w-[80%] text-5xl text-center font-medium leading-[72.8px] text-black-1 mx-auto">
					Network of builders helping startups scale
				</h1>

				<div className="flex gap-8">
					<NetworkCard
						heading={
							"Work with Service Incubators to expedite your time-to-market"
						}
						comment1={`Collaborate with our meticulously chosen service partners, each with a
					vested interest, ensuring a shared commitment to success in the game
					of venture building.`}
						comment2={`For 7.5% equity, you get a product manager, product designer, frontend
					engineer, software engineer and growth marketer to build the MVP of
					your app or web application and validate it.`}
					/>
					<NetworkCard
						heading={`Access funding after your mvp is validated `}
						comment1={`Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.`}
						comment2={`Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months `}
					/>
				</div>
			</div>
			<div className="lg:hidden mt-[80px] w-full flex flex-col gap-4 lg:gap-8 items-center">
				<h1 className="font-medium text-[24px] md:text-[28px] lg:text-[32px]  w-full text-center leading-[32px] md:leading-[32px]">
					Building the future together, democratizing success.
				</h1>

				<p className="text-center text-base md:text-lg lg:text-xl font-light">
					SINC Partners has a novel vision of making success available to
					everyone and democratizing the pain point of success. We are a next
					generation startup studio focus on building and supporting enterprises
					at scale and we help them raise service investments and funds across
					3-5 deals from as low as $25k at start to up to $15m before you leave
					the lab. We are a Gasus Business, a business built on the foundation
					of Christian values and belief.
				</p>
			</div>
		</section>
	);
}
