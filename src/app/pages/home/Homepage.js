import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import AreaOFFocus from "./sections/AreaOFFocus";
import Concept from "./sections/Concept";
import ServiceIncubation from "./sections/ServiceIncubation";
import OurStudio from "./sections/OurStudio";
import CoFound from "./sections/CoFound";
import EIRProgram from "./sections/EIRProgram";
import InvestorsNetwork from "./sections/InvestorsNetwork";
import EquityJobs from "./sections/EquityJobs";
import BlogsandResources from "./sections/BlogsandResources";
import AsFeatured from "./sections/AsFeatured";
import Footer from "@/components/Footer";

export default function Homepage() {
	return (
		<div className="relative bg-white-2">
			<div className="fixed top-0 left-0 w-full z-20">
				<Navbar />
			</div>
			<div className="mt-[100px] bg-white-2 ">
				<HeroSection />

				<Features />
				<div className="flex flex-col gap-20">
					<AreaOFFocus />
					<Concept />
					<ServiceIncubation />
					<OurStudio />
					<CoFound />
					<EIRProgram />
					<InvestorsNetwork />
					<EquityJobs />
					<BlogsandResources />
					<AsFeatured />
				</div>

				<Footer />
			</div>
		</div>
	);
}
