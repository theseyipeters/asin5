import React from "react";
import VideoCard from "../components/VideoCard";
import ArrowRight from "@/svgs/ArrowRight";

export default function BlogsandResources() {
	return (
		<section className="px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] mb-[100px] lg:mb-0 w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Blogs & Resources
					</h1>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row w-full gap-8 mt-[44px]">
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>

			<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
				<span className="underline underline-offset-4">
					See More Blogs & Resources
				</span>{" "}
				<ArrowRight />
			</button>
		</section>
	);
}
