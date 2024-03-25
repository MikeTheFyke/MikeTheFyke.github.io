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

			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
				<div style={{ backgroundColor: "red" }}>
					<h1 className="project-title">Test Prpject</h1>
					<div
						className="project-image-container"
						style={{
							backgroundImage: `url("/images/BetterBytes-Main.jpeg")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<h1 className="project-description">
						This test project is a test project to test this project layout.
					</h1>
					<h1 className="project-description">
						Test Project Tech Stack : NodeJs, ReactJs, Express, React-Router,
						Rellax, PostgresSQL, Knex, Cheerio, Bootstrap
					</h1>
				</div>

				<div>
					<h1 className="project-title">Better Bytes</h1>
					<div className="project-image-container">
						<Image
							src="/images/BetterBytes-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">
						NodeJs, ReactJs, Express, React-Router, Rellax, PostgresSQL, Knex,
						Cheerio, Bootstrap
					</h1>
				</div>

				<div>
					<h1 className="project-title">Owl Site</h1>
					<div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/OwlSite-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">Vue, GSAP, Express, MongoDB</h1>
				</div>
				<div>
					<h1 className="project-title">Shrink-A-Link</h1>
					<div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/ShrinkALink-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">
						NodeJs, Express, EJS, JQuery, Bootstrap
					</h1>
				</div>
				<div>
					<h1 className="project-title">Xpedia</h1>
					<div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/Xpedia-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">NodeJs, VueJs, GSAP</h1>
				</div>
				<div>
					<h1 className="project-title">Chatter Box</h1>
					<div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/ChatterBox-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">
						NodeJs, React, React-dom, Express, Webpack
					</h1>
				</div>
				<div>
					<h1 className="project-title">Tweeter</h1>
					<div className="transform cursor-pointer relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/Tweeter-Main.jpeg"
							alt="portfolio"
							layout="fill"
							className="object-contain"
						/>
					</div>
					<h1 className="project-description">
						HTML, CSS, JQuery, Express, MongoDB
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Projects;
