"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCard from "../components/HeroCard";
import HeroCard2 from "../components/HeroCard2";
import HeroCard3 from "../components/HeroCard3";

export default function HeroSection() {
	const [activeSection, setActiveSection] = useState(2);

	const renderActiveSection = () => {
		switch (activeSection) {
			case 0:
				return <HeroCard />;
			case 1:
				return <HeroCard2 />;
			case 2:
				return <HeroCard3 />;
			default:
				return <HeroCard />;
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSection((prevSection) => (prevSection + 1) % 3);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="hero-container w-full flex h-[400px] lg:h-[550px] relative ">
			<AnimatePresence mode="wait">
				<motion.div
					key={activeSection}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full">
					{renderActiveSection()}
				</motion.div>
			</AnimatePresence>
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 controls flex gap-2 ">
				<button
					className={`${
						activeSection === 0
							? "bg-black-1 border-gray-200 border"
							: "bg-gray-200"
					} w-[10px] h-[10px] rounded-full`}
					onClick={() => setActiveSection(0)}></button>
				<button
					className={`${
						activeSection === 1
							? "bg-black-1 border-gray-200 border"
							: "bg-gray-200"
					} w-[10px] h-[10px] rounded-full`}
					onClick={() => setActiveSection(1)}></button>
				<button
					className={`${
						activeSection === 2
							? "bg-black-1 border-gray-200 border"
							: "bg-gray-200"
					} w-[10px] h-[10px] rounded-full`}
					onClick={() => setActiveSection(2)}></button>
			</div>
		</section>
	);
}
