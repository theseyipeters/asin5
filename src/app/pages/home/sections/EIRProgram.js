"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EIRCard from "../components/EIRCard";
import ArrowRight from "@/svgs/ArrowRight";
import Back from "@/svgs/Back";
import Forward from "@/svgs/Forward";

export default function EIRProgram() {
	const [currentPage, setCurrentPage] = useState(0);
	const cardsPerPageLarge = 3;
	const cardsPerPageSmall = 1;
	const cards = [
		<EIRCard key={1} />,
		<EIRCard key={2} />,
		<EIRCard key={3} />,
		<EIRCard key={4} />,
		<EIRCard key={5} />,
		<EIRCard key={6} />,
		<EIRCard key={7} />,
		<EIRCard key={8} />,
		<EIRCard key={9} />,
		<EIRCard key={10} />,
		<EIRCard key={11} />,
		<EIRCard key={12} />,
		// <EIRCard key={13} />,
	];

	const isLargeScreen = window.innerWidth >= 1024;
	const cardsPerPage = isLargeScreen ? cardsPerPageLarge : cardsPerPageSmall;
	const maxPage = Math.ceil(cards.length / cardsPerPage) - 1;

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
	};

	const displayedCards = cards.slice(
		currentPage * cardsPerPage,
		(currentPage + 1) * cardsPerPage
	);

	const pageIndicators = Array.from({ length: maxPage + 1 }, (_, index) => (
		<span
			key={index}
			className={`h-2 w-2 rounded-full ${
				index === currentPage
					? "bg-black-1 border border-gray-200"
					: "bg-gray-200"
			}`}
		/>
	));

	return (
		<section className="w-full flex flex-col items-center justify-center">
			<div className="w-full hidden lg:flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center px-[30px] md:px-[50px] lg:px-[120px]">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Join Our Entrepreneur In Residence (EIR) Program
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						Our EIR program is our structured 3 months un-paid program designed
						to help us have a pipeline of business and technical cofounders who
						can run the venture of choice as CEO & CTO owning 20% equity each.
					</p>
				</div>

				<div className="pl-[30px] md:pl-[50px] lg:pl-[120px] pr-[30px] md:pr-[50px] lg:pr-[0px]  w-full flex flex-col lg:flex-row mt-[64px] items-center gap-8 overflow-hidden">
					<AnimatePresence mode="wait">
						{displayedCards.map((card, index) => (
							<motion.div
								key={card.key}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="flex-shrink-0">
								{card}
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
					<span className="underline underline-offset-4">
						Support the Future
					</span>
					<ArrowRight />
				</button>

				<div className="mt-[44px] flex flex-row gap-[75px] items-center">
					<button
						className="bg-transparent border border-black-1 h-[80px] w-[80px] rounded-full flex items-center justify-center"
						onClick={handlePrevPage}
						disabled={currentPage === 0}>
						<Back />
					</button>
					<button
						className="bg-transparent border border-black-1 h-[80px] w-[80px] rounded-full flex items-center justify-center"
						onClick={handleNextPage}
						disabled={currentPage === maxPage}>
						<Forward />
					</button>
				</div>
			</div>
			<div className="lg:hidden w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center px-[30px] md:px-[50px] lg:px-[120px]">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Join Our Entrepreneur In Residence (EIR) Program
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						Our EIR program is our structured 3 months un-paid program designed
						to help us have a pipeline of business and technical cofounders who
						can run the venture of choice as CEO & CTO owning 20% equity each.
					</p>
				</div>

				<div className="pl-[30px] md:pl-[50px] lg:pl-[120px] pr-[30px] md:pr-[50px] lg:pr-[0px]  w-full flex flex-col lg:flex-row mt-[64px] items-center gap-8 overflow-hidden">
					<AnimatePresence mode="wait">
						{displayedCards.map((card, index) => (
							<motion.div
								key={card.key}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="flex-shrink-0">
								{card}
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				<div className="mt-[34px] flex flex-col items-center gap-4">
					<div className="flex flex-row gap-1">{pageIndicators}</div>
					<div className="flex flex-row gap-[75px] items-center">
						<button
							className="bg-transparent border border-black-1 h-[40px] w-[40px] rounded-full flex items-center justify-center"
							onClick={handlePrevPage}
							disabled={currentPage === 0}>
							<Back />
						</button>
						<button
							className="bg-transparent border border-black-1 h-[40px] w-[40px] rounded-full flex items-center justify-center"
							onClick={handleNextPage}
							disabled={currentPage === maxPage}>
							<Forward />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
