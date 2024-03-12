/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
	return (
		<div className="h-[88vh] bg-[#253348] mt-[12vh]" id="Hero">
			{/* <Particle /> */}
			<div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
				<div>
					<h1 className="text-[35px] md:text-[50px] text-white font=bold">
						Hey Hey! <span className="text-red-500">It's me Mike!</span>
					</h1>
					<TextEffect />
					<p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
						An artistically trained full stack web developer, passionate in creating a unique user experience within the web environment. A
						quick learner when adapting to new languages and technologies, with a team-conscious approach.
					</p>
					<div className="mt-[2rem] flex-col space-y-6 sm:space-y-o sm:flex sm:flex-row items-center sm:space-x-6">
						<button className="px-[2rem] hover:bg-red-500 transition duration-700 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
							<a href="/MikeFyke-Resume.pdf">Download CV</a>
							<ArrowDownTrayIcon className="w-[1.6rem] h[1.7rem] text-black" />
						</button>
					</div>
				</div>
				<div data-aos="zoom-in" className="hidden relative lg:flex items-center rounded-full h-[450px] w-[450px]">
					<Image src="/images/MikeFyke-Gen01.jpeg" alt="user" layout="fill" className="object-cover rounded-full" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
