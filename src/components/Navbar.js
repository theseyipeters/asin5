import SincLogo from "@/svgs/SincLogo";
import React from "react";
import Link from "next/link";
import GlobalButton from "./ui/GlobalButton";

export default function Navbar() {
	const navItems = [
		{ name: "About", link: "/about" },
		{ name: "SIP", link: "/SIP" },
		{ name: "Studio", link: "/studio" },
		{ name: "SEEQ", link: "/SEEQ" },
		{ name: "Platforms", link: "/SIP" },
		{ name: "Initiatives", link: "/SIP" },
		{ name: "More", link: "/SIP" },
	];
	return (
		<nav className="px-[30px] md:px-[50px] lg:px-[120px] py-[20px] w-full flex flex-row items-center justify-between bg-white-2 min-h-[100px] z-40">
			<div className="flex flex-row items-center gap-6 w-fit">
				<SincLogo />

				<ul className="flex flex-row gap-4">
					{navItems.map((item, index) => (
						<Link
							className="text-base font-normal lg:text-lg"
							href={item.link}
							key={index}>
							{item.name}
						</Link>
					))}
				</ul>
			</div>

			<div className="flex flex-row gap-3 w-fit">
				<GlobalButton
					className={"max-w-48"}
					variant={"secondary"}
					size={"md"}
					state="default">
					SINC With Us
				</GlobalButton>
				<GlobalButton
					className={"min-w-48"}
					variant={"primary"}
					size={"md"}
					state="default">
					Apply to SIP 1.0
				</GlobalButton>
			</div>
		</nav>
	);
}
