import React from "react";
import Link from "next/link";

const DealCard1 = ({ dealList, dealNumber }) => {
	return (
		<div className="w-[25%] h-[272px] bg-transparent p-5 border-t  border-b border-gray-1/30 flex flex-col gap-3">
			<div className="w-full h-full bg-black-3 p-5 flex flex-col gap-4">
				<h1 className="text-xl font-semibold text-white-1">
					Work with Service Incubators (SINC) to expedite your time to market
				</h1>

				<Link
					href={"/"}
					className={`w-[80%] mt-auto bg-black-2 text-white-1 rounded-full px-8 py-4 text-center font-semibold`}>
					Join SINC Network
				</Link>
			</div>
		</div>
	);
};

export default DealCard1;
