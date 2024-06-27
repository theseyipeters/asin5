import React from "react";
import Link from "next/link";

const DealCard1 = () => {
	return (
		<div className="w-full md:w-[500px] lg:w-[25%] h-fit md:h-fit lg:h-[272px] bg-transparent p-5 border-t border-r-0 lg:border-r border-b border-gray-1/30 flex flex-col gap-3 flex-shrink-0">
			<div className="w-full h-full bg-black-3 p-5 flex flex-col gap-4">
				<h1 className="text-xl font-semibold text-white-1">
					Work with Service Incubators (SINC) to expedite your time to market
				</h1>

				<Link
					href={"/"}
					className={`w-full  mt-auto bg-black-2 text-white-1 rounded-full px-8 py-4 text-center font-semibold flex-shrink-0`}>
					Join SINC Network
				</Link>
			</div>
		</div>
	);
};

export default DealCard1;
