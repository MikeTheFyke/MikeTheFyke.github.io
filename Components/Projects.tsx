import React from "react";
import Image from "next/image";

const Projects = () => {
	return (
		<div
			className="bg-[#2B445E] pt-[4rem] md:pt-[8rem] pb-[1rem]"
			id="Projects"
		>
			<h1 className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Pro<span className="text-red-500">jects</span>
			</h1>
			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
				<div data-aos="fade-up" className="hover:-translate-y-6">
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Better Bytes
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/BetterBytes-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
						NodJs, ReactJs, Express, React-Router, Rellax, PostgresSQL, Knex,
						Cheerio, Bootstrap
					</h1>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="300"
					className="hover:-translate-y-6"
				>
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Owl Site
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/OwlSite-Main.png"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
						Vue, GSAP, Express, MongoDB
					</h1>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="600"
					className="hover:-translate-y-6"
				>
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Shrink-A-Link
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/ShrinkALink-Main.png"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
						NodeJs, Express, EJS, JQuery, Bootstrap
					</h1>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="900"
					className="hover:-translate-y-6"
				>
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Chatter Box
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/ChatterBox-Main.png"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
						NodeJs, React, React-dom, Express, Webpack
					</h1>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="1200"
					className="hover:-translate-y-6"
				>
					<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Tweeter
					</h1>
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/Tweeter-Main.png"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
						HTML, CSS, JQuery, Express, MongoDB
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Projects;
