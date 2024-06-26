import Image from "next/image";
import React from "react";
import featured1 from "@/assets/featured1.svg";
import bujnews from "@/assets/portfolioLogos/bujnews.svg";

export default function FeaturedCard() {
	return (
		<div className="w-[1000px] h-[500px] bg-white-1 border flex flex-row">
			<div className="w-[70%] h-full bg-black-1">
				<Image
					src={featured1}
					alt="featured1"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="w-[30%] h-full bg-transparent px-5 py-10 flex flex-col gap-4">
				<div>
					<Image src={bujnews} />
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-medium">
						SINC Partners invests over 200 million naira in 5 startups
					</h3>
					<p className="font-light">
						SINC Partners invests over 200 million naira in 5 startups. SINC
						Partners invests over 200 million naira in 5 startups SINC Partners
						invests over 200 million naira in ....
					</p>
				</div>

				<div className="mt-auto">
					<p className="font-light">REPORTED BY:</p>
					<p className="font-light">Rema Viel</p>
				</div>
			</div>
		</div>
	);
}
