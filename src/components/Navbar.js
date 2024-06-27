"use client";

import React, { useState, useEffect } from "react";
import SincLogo from "@/svgs/SincLogo";
import Link from "next/link";
import GlobalButton from "./ui/GlobalButton";
import MenuIcon from "@/svgs/MenuIcon";
import CloseIcon from "@/svgs/CloseIcon";
import SincLogoSM from "@/svgs/SincLogoSM";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const navItems = [
		{ name: "About", link: "/about" },
		{ name: "SIP", link: "/SIP" },
		{ name: "Studio", link: "/studio" },
		{ name: "SEEQ", link: "/SEEQ" },
		{ name: "Platforms", link: "/SIP" },
		{ name: "Initiatives", link: "/SIP" },
		{ name: "More", link: "/SIP" },
	];

	useEffect(() => {
		if (showMenu) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [showMenu]);

	const handleToggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	return (
		<>
			<nav className="hidden px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] py-[20px] w-full lg:flex flex-row items-center justify-between bg-white-2 min-h-[100px] z-40">
				<div className="flex flex-row items-center gap-6">
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

				<div className="flex flex-row gap-3 lg:hidden xl:flex">
					<div>
						<GlobalButton
							className={"w-fit"}
							variant={"secondary"}
							size={"md"}
							state="default">
							SINC With Us
						</GlobalButton>
					</div>
					<div>
						<GlobalButton
							className={"w-fit"}
							variant={"primary"}
							size={"md"}
							state="default">
							Apply to SIP 1.0
						</GlobalButton>
					</div>
				</div>
			</nav>

			<nav className="lg:hidden px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] py-[20px] w-full flex flex-row items-center justify-between bg-white-2 h-[80px] z-40">
				{!showMenu && (
					<div className="flex flex-row items-center justify-between gap-6 w-fit">
						<SincLogoSM />
					</div>
				)}
				{!showMenu && (
					<div onClick={handleToggleMenu}>
						<MenuIcon />
					</div>
				)}

				{showMenu && (
					<div
						style={{ opacity: 0.95, transition: "opacity 1s ease" }}
						className="fixed flex flex-col gap-6 md:items-center md:justify-center h-screen w-screen bg-white-1 text-black-1 top-0 left-0 shadow-md p-[30px] z-40 overflow-y-auto">
						<ul className="flex flex-col gap-4">
							{navItems.map((item, index) => (
								<Link
									className="text-base font-normal lg:text-lg"
									href={item.link}
									key={index}>
									{item.name}
								</Link>
							))}
						</ul>

						<div className="flex flex-col gap-3 w-full">
							<GlobalButton
								className={""}
								variant={"secondary"}
								size={"md"}
								state="default">
								SINC With Us
							</GlobalButton>
							<GlobalButton
								className={""}
								variant={"primary"}
								size={"md"}
								state="default">
								Apply to SIP 1.0
							</GlobalButton>
						</div>

						<div
							onClick={handleToggleMenu}
							className="lg:hidden absolute top-5 right-10 text-2xl mt-4 font-semibold cursor-pointer">
							<CloseIcon />
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
