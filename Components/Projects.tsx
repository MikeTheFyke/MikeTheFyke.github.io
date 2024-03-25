import React from "react";
import Image from "next/image";
import { Color } from "@/Color";

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
				<div
					style={{ backgroundColor: Color.BACKGROUND_WHITE }}
					className="rounded"
				>
					<h1
						className="project-title"
						style={{ color: Color.BACKGROUND_BLUE }}
					>
						Better Bytes
					</h1>
					<div className="flex justify-center items-center">
						<div
							className="project-image-container"
							style={{
								backgroundImage: `url("/images/BetterBytes-Main.jpeg")`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
								width: "240px",
								height: "240px",
							}}
						/>
					</div>
					<h1 style={{ color: Color.BACKGROUND_BLUE }}>
						Have you ever gone specifically to a store to buy a product because
						it was on sale? But were you actually saving money? Better Bytes was
						created to fetch grocery prices from multiple stores. A user could
						build a grocery list showing a total price comparison of stores you
						a user could actually save the most money. A secondary feature was
						to add a recipe section which would also show how much a recipe cost
						comparing available stores.
					</h1>
					<h1 style={{ color: Color.TEXT_GRAY, textAlign: "center" }}>
						NodeJs, ReactJs, Express, React-Router, Rellax, PostgresSQL, Knex,
						Cheerio, Bootstrap
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
