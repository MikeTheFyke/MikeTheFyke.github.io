import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="h-[88vh]  bg-[#253348]">
			<Particle />
			<div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
				<div>
					<h1 className="text-[35px] md:text-[50px] text-white font=bold">
						Hey Hey! <span className="text-red-500">It's me Mike!</span>
					</h1>
					<TextEffect />
					<p className="mt-[2rem] text-[20px] text-[#ffffff92]">
						An artistically trained full stack web developer, passionate in creating a unique user experience within the web environment. A
						quick learner when adapting to new languages and technologies, with a team-conscious approach.
					</p>
				</div>
				<div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
					<Image src="/images/mikeFykeAvatar.jpeg" alt="user" layout="fill" className="object-cover rounded-full" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
