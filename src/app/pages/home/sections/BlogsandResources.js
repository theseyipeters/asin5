import React from "react";
import VideoCard from "../components/VideoCard";
import ArrowRight from "@/svgs/ArrowRight";

export default function BlogsandResources() {
	return (
		<section className="px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className=" w-[65%] flex flex-col items-center">
					<h1 className="font-medium text-5xl text-center leading-[72.8px]">
						Blogs & Resources
					</h1>
				</div>
			</div>

			<div className="flex w-full gap-8 mt-[44px]">
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
