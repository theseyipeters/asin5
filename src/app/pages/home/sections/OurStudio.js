import React from "react";
import Image from "next/image";
import kofoundme from "@/assets/portfolioLogos/kofoundme.svg";
import founderSchool from "@/assets/portfolioLogos/founderSchool.svg";
import bujnews from "@/assets/portfolioLogos/bujnews.svg";
import stuwok from "@/assets/portfolioLogos/stuwok.svg";
import reentty from "@/assets/portfolioLogos/reentty.svg";
import musegarage from "@/assets/portfolioLogos/musegarage.svg";
import meezor from "@/assets/portfolioLogos/meezor.svg";
import rakayar from "@/assets/portfolioLogos/rakayar.svg";
import gasus from "@/assets/portfolioLogos/gasus.svg";
import ullweb from "@/assets/portfolioLogos/ullweb.svg";
import remanno from "@/assets/portfolioLogos/remanno.svg";
import sbo from "@/assets/portfolioLogos/sbo.svg";
import frontlett from "@/assets/portfolioLogos/frontlett.svg";
import hostull from "@/assets/portfolioLogos/hustull.svg";
import rekriut from "@/assets/portfolioLogos/rekriut.svg";
import manny from "@/assets/portfolioLogos/manny.svg";
import bilaaw from "@/assets/portfolioLogos/bilaaw.svg";
import ss from "@/assets/portfolioLogos/ss.svg";
import kureen from "@/assets/portfolioLogos/kureen.svg";
import triftpay from "@/assets/portfolioLogos/triftpay.svg";
import skimake from "@/assets/portfolioLogos/skimake.svg";
import krowdback from "@/assets/portfolioLogos/krowdback.svg";
import sixpext from "@/assets/portfolioLogos/sixpext.svg";
import qeeki from "@/assets/portfolioLogos/qeeki.svg";
import frendall from "@/assets/portfolioLogos/frendall.svg";
import know from "@/assets/portfolioLogos/know.svg";
import kreeca from "@/assets/portfolioLogos/kreeca.svg";
import wanodu from "@/assets/portfolioLogos/wanodu.svg";
import wettaa from "@/assets/portfolioLogos/wettaa.svg";
import zeb from "@/assets/portfolioLogos/zeb.svg";
import zimr from "@/assets/portfolioLogos/zimr.svg";
import bilogos from "@/assets/portfolioLogos/bilogos.svg";
import ontecx from "@/assets/portfolioLogos/ontecx.svg";
import knowtixed from "@/assets/portfolioLogos/knowtixed.svg";
import boldtell from "@/assets/portfolioLogos/boldtell.svg";
import boocant from "@/assets/portfolioLogos/boocant.svg";
import eret from "@/assets/portfolioLogos/eret.svg";
import recurl from "@/assets/portfolioLogos/recurl.svg";
import otuuna from "@/assets/portfolioLogos/otuuna.svg";
import fan from "@/assets/portfolioLogos/fan.svg";
import inResidency from "@/assets/portfolioLogos/inResidency.svg";
import adful from "@/assets/portfolioLogos/adful.svg";
import rretten from "@/assets/portfolioLogos/rretten.svg";
import grantty from "@/assets/portfolioLogos/grantty.svg";
import mentty from "@/assets/portfolioLogos/mentty.svg";
import option from "@/assets/portfolioLogos/option.svg";
import chekwa from "@/assets/portfolioLogos/chekwa.svg";
import izicomms from "@/assets/portfolioLogos/izicomms.svg";
import ArrowRight from "@/svgs/ArrowRight";

export default function OurStudio() {
	const portlioLogos = [
		kofoundme,
		founderSchool,
		bujnews,
		stuwok,
		reentty,
		musegarage,
		meezor,
		rakayar,
		gasus,
		ullweb,
		remanno,
		sbo,
		frontlett,
		hostull,
		rekriut,
		manny,
		bilaaw,
		ss,
		kureen,
		triftpay,
		skimake,
		krowdback,
		sixpext,
		qeeki,
		frendall,
		know,
		kreeca,
		wanodu,
		wettaa,
		zeb,
		zimr,
		bilogos,
		ontecx,
		knowtixed,
		boldtell,
		boocant,
		eret,
		recurl,
		otuuna,
		fan,
		inResidency,
		adful,
		rretten,
		grantty,
		mentty,
		option,
		chekwa,
		izicomms,
	];
	return (
		<section className="px-[30px] md:px-[50px] lg:px-[100px] xl:px-[120px] w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="w-full lg:w-[80%] flex flex-col gap-4 lg:gap-8 items-center">
					<h1 className="w-full lg:w-[80%]  text-[24px] md:text-[28px] lg:text-5xl text-center font-medium leading-[32px] text-black-1 mx-auto">
						Our Studio Portfolio
					</h1>
					<p className="text-sm md:text-base lg:text-base text-center font-light">
						Our 2024 Service Incubator Portfolio Companies
					</p>
				</div>

				<div className="w-full flex flex-row flex-wrap gap-4 h-full mt-[64px] justify-center items-center">
					{portlioLogos.map((logo, index) => (
						<div
							key={index}
							className="bg-white-1 border border-gray-1/10 w-[150px] h-[80px] rounded-3xl flex items-center justify-center">
							<Image
								src={logo}
								alt={logo}
							/>
						</div>
					))}
				</div>
			</div>

			<button className="flex flex-row gap-1 items-center font-medium mt-[44px]">
				<span className="underline underline-offset-4">View All Companies</span>{" "}
				<ArrowRight />
			</button>
		</section>
	);
}
