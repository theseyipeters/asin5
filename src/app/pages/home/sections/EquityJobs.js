"use client";

import React, { useState, useEffect } from "react";
import EquityCard from "../components/EquityCard";
import ArrowRight from "@/svgs/ArrowRight";
import Back from "@/svgs/Back";
import Forward from "@/svgs/Forward";

export default function EquityJobs() {
	const [currentPage, setCurrentPage] = useState(0);
	const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward
	const [windowWidth, setWindowWidth] = useState(0);

	const itemsPerPage = {
		sm: 1,
		md: 2,
		lg: 4,
	};

	const cards = [
		<EquityCard key={1} />,
		<EquityCard key={2} />,
		<EquityCard key={3} />,
		<EquityCard key={4} />,
		<EquityCard key={5} />,
		<EquityCard key={6} />,
		<EquityCard key={7} />,
		<EquityCard key={8} />,
		// Add more cards as needed
	];

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Set initial window width
		handleResize();

		// Add resize event listener
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const cardsPerPage =
		windowWidth >= 1024
			? itemsPerPage.lg
			: windowWidth >= 768
			? itemsPerPage.md
			: itemsPerPage.sm;
	const maxPage = Math.ceil(cards.length / cardsPerPage) - 1;

	const handleNextPage = () => {
		setDirection(1);
		setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
	};

	const handlePrevPage = () => {
		setDirection(-1);
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
	};

	const displayedCards = cards.slice(
		currentPage * cardsPerPage,
		(currentPage + 1) * cardsPerPage
	);

	return (
		<section className="px-[30px] md:px-[50px] lg:px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Equity Jobs
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						See companies and startups offering equity or a mix of cash and
						equity for very important positions in their company.
					</p>
				</div>
			</div>

			<div className="w-full flex flex-row gap-8 items-center justify-between h-full mt-[44px] lg:mt-[64px] overflow-hidden">
				{displayedCards.map((card, index) => (
					<div
						key={card.key}
						className={`h-full ${
							direction === 1
								? "slide-in-right"
								: direction === -1
								? "slide-in-left"
								: ""
						}`}>
						{card}
					</div>
				))}
			</div>

			<button
				className="flex flex-row gap-1 items-center font-medium mt-[44px]"
				onClick={handleNextPage}>
				<span className="underline underline-offset-4">
					See More Equity Jobs
				</span>{" "}
				<ArrowRight />
			</button>

			<div className="mt-[44px] flex flex-row gap-[75px] items-center">
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
		</section>
	);
}
