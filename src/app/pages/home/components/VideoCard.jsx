import React from "react";
import book1 from "@/assets/book1.svg";
import Image from "next/image";

export default function VideoCard() {
	return (
		<div className="w-full lg:w-[33.3%] h-fit bg-white-1">
			<iframe
				className="w-full h-[335px]"
				src="https://www.youtube.com/embed/bNpx7gpSqbY?si=VxqIl8x9c36oA9WS"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>

			<div className="flex flex-row items-center justify-between mt-8">
				<div className="w-full">
					<h2 className="font-medium">Top Ten Most Powerful Startup</h2>
					<p className="w-[80%] font-light text-sm md:text-base lg:text-base">
						Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
						Ten Most Powerful Startup
					</p>
				</div>

				<div className="h-auto w-fit">
					<Image
						alt="book"
						src={book1}
					/>
				</div>
			</div>
		</div>
	);
}
