import React from "react";
import SincLogo2 from "@/svgs/SincLogo2";
import Image from "next/image";
import Link from "next/link";
import aba from "@/assets/aba.svg";
import Gasus from "@/svgs/Gasus";
import FB from "@/svgs/FB";
import TW from "@/svgs/TW";
import IG from "@/svgs/IG";
import LI from "@/svgs/LI";
import MD from "@/svgs/MD";
import YT from "@/svgs/YT";
import unnamed from "@/assets/unnamed.svg";

export default function Footer() {
	return (
		<footer className=" py-[44px] bg-black-1 text-white-1 h-fit w-full">
			<div className="w-[50%] mb-[40px] px-[30px] md:px-[50px] lg:px-[120px] flex flex-col gap-3">
				<h1 className="text-6xl font-medium">Newsletter</h1>
				<p className="font-light">
					Get the latest about SINC Partners, our startup Incubator program,
					Portfolio company offerings - straight into your inbox.
				</p>

				<form className="mt-[61px] w-[80%]">
					<div className="border border-gray-3 rounded-full h-[50px] relative">
						<input
							placeholder="Enter your email address"
							className="bg-transparent h-full w-full rounded-full focus:border-none focus:outline-none px-5 placeholder:text-gray-4"
						/>

						<button className="absolute top-0 right-0 bg-white-1 text-black-1 rounded-full h-auto px-8 py-3">
							Subscribe
						</button>
					</div>
				</form>
			</div>
			<hr className="border-gray-1/30" />
			<div className="px-[30px] md:px-[50px] lg:px-[120px] flex flex-row w-full h-fit">
				<div className="w-full h-full border-r border-gray-1/30">
					<div className="mt-[44px] mb-[22px] w-full flex items-start justify-between gap-4 pr-5">
						<div className="flex flex-col w-[220px] gap-[14px]">
							<div>
								<SincLogo2 />
							</div>

							<p className="font-light leading-[27px]">
								SINC Partners is a service incubation company connecting experts
								in product development and growth marketing willing to offer
								their services to amazing startups in exchange for minute equity
								(usually 0.5% to 2%)
							</p>
						</div>
						<div className="w-[122px]">
							<h3 className="font-medium text-lg">Platforms</h3>
							<ul className="mt-3 flex flex-col gap-2">
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
							</ul>
						</div>
						<div className="w-[122px]">
							<h3 className="font-medium text-lg">Initiatives</h3>
							<ul className="mt-3 flex flex-col gap-2">
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
							</ul>
						</div>
						<div className="w-[122px]">
							<h3 className="font-medium text-lg">About Us</h3>
							<ul className="mt-3 flex flex-col gap-2">
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
							</ul>
						</div>
						<div className="w-[122px]">
							<h3 className="font-medium text-lg">More</h3>
							<ul className="mt-3 flex flex-col gap-2">
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
								<Link
									className="font-light text-gray-5"
									href={"/"}>
									Kofoundme
								</Link>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-[25%] h-full  px-5 flex flex-row items-start gap-10 justify-between">
					<div className="w-[520px] flex flex-col gap-10">
						<div className="mt-[44px] w-full">
							<h3 className="font-medium text-lg">Locations</h3>
							<ul className="mt-3 flex flex-col gap-2">
								<p className="font-medium">Abuja, Nigeria </p>
								<p className="font-medium">Lagos, Nigeria </p>
								<p className="font-medium">Philadelphia, USA</p>
							</ul>
						</div>

						<div className="flex flex-col gap-2">
							<div>
								<Image
									src={aba}
									alt="aba"
								/>
							</div>
							<p className="font-medium">Trusted Business </p>
						</div>
					</div>

					<div className="w-[500px] flex flex-row ml-auto mt-auto">
						<div className="w-full flex flex-col">
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2190_2945)">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M20.2708 0C9.52077 0 0.776428 8.97106 0.776428 19.9998C0.776428 24.3737 2.1517 28.43 4.48956 31.7225L2.05984 39.1532L9.55504 36.6963C12.6378 38.7892 16.3166 40 20.2821 40C31.0321 40 39.7764 31.0286 39.7764 20.0002C39.7764 8.97142 31.0321 0.000330607 20.2821 0.000330607L20.2708 0ZM14.8269 10.159C14.4488 9.23023 14.1622 9.19506 13.5894 9.17117C13.3943 9.15955 13.177 9.14795 12.936 9.14795C12.1908 9.14795 11.4116 9.37127 10.9417 9.86504C10.3688 10.4647 8.9476 11.8636 8.9476 14.7327C8.9476 17.6017 10.9876 20.3764 11.2625 20.7647C11.5491 21.1523 15.2396 27.1253 20.9697 29.5596C25.4507 31.4643 26.7804 31.2878 27.8002 31.0644C29.29 30.7353 31.1583 29.606 31.6282 28.2425C32.0982 26.8784 32.0982 25.7143 31.9604 25.4674C31.8229 25.2205 31.4445 25.0798 30.8717 24.7855C30.2988 24.4915 27.5137 23.0806 26.9864 22.8924C26.4706 22.6926 25.978 22.7633 25.5885 23.3278C25.0383 24.1155 24.4998 24.9153 24.0641 25.3971C23.7203 25.7734 23.1585 25.8205 22.6888 25.6204C22.0584 25.3503 20.2937 24.7148 18.116 22.7278C16.4312 21.1878 15.2852 19.2715 14.953 18.6954C14.6205 18.1077 14.9187 17.7663 15.182 17.449C15.4686 17.0844 15.7435 16.8259 16.0301 16.4847C16.3167 16.1439 16.4771 15.9674 16.6605 15.5676C16.8555 15.1796 16.7177 14.7798 16.5803 14.4858C16.4428 14.1918 15.2968 11.3228 14.8269 10.159Z"
										fill="#0DCF7D"
									/>
								</g>
								<defs>
									<clipPath id="clip0_2190_2945">
										<rect
											x="0.776428"
											width="39"
											height="40"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<p className="font-medium">Chat with us </p>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-gray-1/30" />
			<div className="px-[30px] md:px-[50px] lg:px-[120px] py-10 h-[180px] flex flex-row items-start gap-6 justify-between">
				<div className="w-[65%] flex flex-col items-start justify-between h-full">
					<p className="font-light text-sm">
						Guaranteed 2x on your service or cash investment, usually been the
						first to invest. Get in early and SINC your guaranty!
					</p>

					<div className="flex flex-row items-center justify-between w-full">
						<p className="font-medium">
							© 2023 SINC Partners Ltd. All rights reserved
						</p>

						<div className="flex flex-row gap-3">
							<Link
								className="underline underline-offset-4 font-medium"
								href={"/"}>
								Privacy Policy{" "}
							</Link>
							<Link
								className="underline underline-offset-4 font-medium"
								href={"/"}>
								Privacy Policy{" "}
							</Link>
							<Link
								className="underline underline-offset-4 font-medium"
								href={"/"}>
								Privacy Policy{" "}
							</Link>
						</div>
					</div>
				</div>
				<div className="w-[25%] h-[100px] flex flex-col">
					<div className="flex flex-row items-center w-full gap-6">
						<Gasus />

						<p className="font-light text-xs w-[80%]">
							We are a business built on the foundation of Christian values and
							belief
						</p>
					</div>

					<div className="socials w-fit mt-auto ml-auto flex flex-row items-end justify-end gap-4">
						<Link
							className=""
							href={"/"}>
							<FB />
						</Link>
						<Link
							className=""
							href={"/"}>
							<TW />
						</Link>
						<Link
							className=""
							href={"/"}>
							<IG />
						</Link>
						<Link
							className=""
							href={"/"}>
							<LI />
						</Link>
						<Link
							className=""
							href={"/"}>
							<MD />
						</Link>
						<Link
							className=""
							href={"/"}>
							<YT />
						</Link>
						<Link
							className=""
							href={"/"}>
							<Image
								src={unnamed}
								alt=""
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
