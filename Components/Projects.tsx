import React from "react";
import Image from "next/image";

const Projects = () => {
	return (
		<div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" id="Projects">
			<h1 className="heading">
				Pro<span className="text-red-500">jects</span>
			</h1>
			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
				<div data-aos="fade-up">
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/BetterBytes-Main.jpeg" alt="portfolio" layout="fill" className="object-contain" />
						<h1>Better Bytes</h1>
						<h1>ReactJs</h1>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-delay="300">
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/OwlSite-Main.png" alt="portfolio" layout="fill" className="object-contain" />
						<h1>Owl Site</h1>
						<h1>Vue, GSAP, Express, MongoDB</h1>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-delay="600">
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/ShrinkALink-Main.png" alt="portfolio" layout="fill" className="object-contain" />
						<h1>Shrink-A-Link</h1>
						<h1>NodeJs, Express, EJS, JQuery, Bootstrap</h1>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-delay="900">
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/ChatterBox-Main.png" alt="portfolio" layout="fill" className="object-contain" />
						<h1>Chatter Box</h1>
						<h1>NodeJs, React, React-dom, Express, Webpack</h1>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-delay="1200">
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/Tweeter-Main.png" alt="portfolio" layout="fill" className="object-contain" />
						<h1>Tweeter</h1>
						<h1>HTML, CSS, JQuery, Express, MongoDB</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
