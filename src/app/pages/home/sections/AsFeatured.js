"use client";

import React, { useRef, useEffect } from "react";
import FeaturedCard from "../components/FeaturedCard";
import GlobalButton from "@/components/ui/GlobalButton";

export default function AsFeatured() {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (scrollElement) {
			scrollElement.scrollLeft =
				(scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
		}
	}, []);
	return (
		<section className=" w-full flex flex-col items-center justify-center">
			<h1 className="text-2xl font-medium">As Featured In</h1>

			<div
				ref={scrollRef}
				className="mt-[44px] w-full overflow-auto">
				<div className="flex flex-row w-fit overflow-scroll gap-8">
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
				</div>
			</div>

			<div className="w-[70%] my-[100px] flex flex-col items-center">
				<h1 className="text-8xl leading-[104px] text-center text-pretty">
					Let's build companies that help everyone succeed
				</h1>

				<div className="w-[40%] flex flex-row gap-3 items-center justify-between mt-[44px]">
					<GlobalButton
						variant={"stroke"}
						size={"lg"}
						state="default">
						SINC With Us
					</GlobalButton>
					<GlobalButton
						variant={"primary"}
						size={"lg"}
						state="default">
						Apply to SIP 1.0
					</GlobalButton>
				</div>
			</div>
		</section>
	);
}
