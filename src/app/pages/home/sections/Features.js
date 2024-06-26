import React from "react";
import NetworkCard from "../components/NetworkCard";

export default function Features() {
	return (
		<section className="bg-white-2 py-[80px] flex flex-col items-center justify-center">
			<div className="bg-white-1 w-[50%] py-8 px-5 rounded-3xl flex flex-col items-center">
				<p className="text-center text-xl font-light">
					"Nigeria and Africa has a massive network effect that have not be
					fully utilized. With Nigerians/Africans in every country and territory
					of the world, we can scale an African business to 100+ countries in
					few weeks"
				</p>

				<div className="flex flex-col gap-1 items-center w-fit mt-6">
					<p className="font-medium">Daniel Izeghs Oratokhai</p>
					<p className="font-light">Managing Partner at SINC Partners Ltd</p>
				</div>
			</div>

			<div className="mt-[80px] w-[70%] border flex flex-col gap-8 items-center">
				<h1 className="font-medium text-5xl w-[60%] text-center leading-[72.8px]">
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
		</section>
	);
}
