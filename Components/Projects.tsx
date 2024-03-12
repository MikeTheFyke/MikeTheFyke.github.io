import React from "react";
import Image from "next/image";

const Projects = () => {
	return (
		<div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" id="Projects">
			<h1 className="heading">
				Pro<span className="text-red-500">jects</span>
			</h1>
			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
				<div data-aos="fade-up" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center">
						Better Bytes
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/BetterBytes-Main.jpeg" alt="portfolio" layout="fill" className="object-contain" />
					</div>
					<p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
						NodJs, ReactJs, Express, React-Router, Rellax, PostgresSQL, Knex, Cheerio, Bootstrap
					</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="300" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center">
						Owl Site
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/OwlSite-Main.png" alt="portfolio" layout="fill" className="object-contain" />
					</div>
					<p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">Vue, GSAP, Express, MongoDB</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="600" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center">
						Shrink-A-Link
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/ShrinkALink-Main.png" alt="portfolio" layout="fill" className="object-contain" />
					</div>
					<p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">NodeJs, Express, EJS, JQuery, Bootstrap</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="900" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center">
						Chatter Box
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/ChatterBox-Main.png" alt="portfolio" layout="fill" className="object-contain" />
					</div>
					<p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">NodeJs, React, React-dom, Express, Webpack</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="1200" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center">
						Tweeter
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image src="/images/Tweeter-Main.png" alt="portfolio" layout="fill" className="object-contain" />
					</div>
					<p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">HTML, CSS, JQuery, Express, MongoDB</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
