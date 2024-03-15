/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
	//  h-[250px] w-[100px]

	return (
		<div className="h-[88vh] bg-[#EFEFEF] mt-[12vh]" id="Hero">
			{/* <Particle /> */}
			<div className="w-[80%] grid-cols-1 mx-auto grid md:grid-cols-2 lg:grid-cols-2 sm:gap-[1rem] md:gap-[1.5rem] lg:gap-[3rem] h-[90%] md:h-[100%] lg:h-[100%] items-center">
				<div className="sm:w-[100%] sm:mt-[rem] md:hidden lg:hidden flex justify-center items-center">
					<div
						data-aos="zoom-in"
						className="h-[250px] w-[250px] relative items-center rounded-full md:hidden lg:hidden"
					>
						<Image
							src="/images/MikeFyke-Gen01.jpeg"
							alt="user"
							layout="fill"
							className="object-cover rounded-full"
						/>
					</div>
				</div>
				<div>
					<h1 className="hero-heading">Hey Hey!</h1>
					<span className="hero-heading text-red-500">It's me Mike!</span>
					<div>
						<TextEffect />
					</div>
					<p className="mt-[1.5rem] text-[18px] text-[#ABABAB]">
						An artistically trained full stack web developer, passionate in
						creating a unique user experience within the web environment. A
						quick learner when adapting to new languages and technologies, with
						a team-conscious approach.
					</p>
					<div className="mt-[2rem] flex-col space-y-6 sm:space-y-o sm:flex sm:flex-row items-center sm:space-x-6">
						<button
							className="px-[2rem]  py-[1rem] text-[18px] font-bold uppercase bg-[#47B5E0] text-black flex items-center space-x-2"
							id="downloadButton"
							onMouseOver={() => {
								const icon = document.getElementById("downloadIcon");
								if (icon) {
									icon.style.color = "white";
								}
							}}
							onMouseLeave={() => {
								const icon = document.getElementById("downloadIcon");
								if (icon) {
									icon.style.color = "black";
								}
							}}
						>
							<a href="/MikeFyke-Resume.pdf">Download CV</a>
							<ArrowDownTrayIcon
								id={"downloadIcon"}
								className="w-[1.6rem] h[1.7rem]"
							/>
						</button>
					</div>
				</div>
				<div className="hidden md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center md:w-[100%] lg:w-[100%]">
					<div
						data-aos="zoom-in"
						className="hidden relative md:flex lg:flex items-center rounded-full md:h-[375px] md:w-[150px] lg:h-[450px] lg:w-[450px]"
					>
						<Image
							src="/images/MikeFyke-Gen01.jpeg"
							alt="user"
							layout="fill"
							className="object-cover rounded-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
