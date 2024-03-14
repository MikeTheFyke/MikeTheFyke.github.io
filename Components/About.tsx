import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
				<div>
					<h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
						Curating <span className="text-red-500">Stories</span>
					</h2>
					<div className="mb-[3rem] flex items-center md:space-x-10">
						<span className="w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
						<p className="text-[19px] text-slate-300 w-[80%]">
							Make users feel like they are experiencing a website instead of just viewing it, with micro-interactions.
						</p>
					</div>
					<div className="mb-[3rem] flex items-center md:space-x-10">
						<span className="w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
						<p className="text-[19px] text-slate-300 w-[80%]">
							Guidlines can be like a fence around a yard. Some people can feel contained and stay firmly in the middle of the yard,
							contained by those guidelines. But to truely make the best use of those guidlines somone needs to walk along that fence like a
							tight rope.
						</p>
					</div>
				</div>
				<div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
					<Image
						src="/images/MikeFyke-Gen02.jpeg"
						alt="user"
						layout="fill"
						objectFit="contain"
						className="relative z-[11] w-[100%] h-[100%] object-contain"
					/>
					<Image
						src="/images/MikeFyke-Gen02.jpeg"
						alt="user"
						layout="fill"
						objectFit="contain"
						className="absolute w-[100%] h-[100%] z-[10] bg-[#47B5E0] top-[-2rem] right-[-2rem]"
					/>
					{/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#47B5E0] top-[-2rem] right-[-2rem]"></div> */}
				</div>
			</div>
		</div>
	);
};

export default About;
