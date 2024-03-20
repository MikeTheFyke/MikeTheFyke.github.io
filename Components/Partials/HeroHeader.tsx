/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import React from "react";
import { Color } from "@/Color";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import TextEffect from "../TextEffect";

const HeroHeader = () => {
	return (
		<div>
			<h1 className="hero-heading">Hey Hey!</h1>
			<span
				className="hero-heading"
				style={{
					whiteSpace: "nowrap",
					overflow: "hidden",
					color: Color.MAIN_RED,
				}}
			>
				It's me Mike!
			</span>
			<div>
				<TextEffect />
			</div>
			<p
				className="body-texts mt-[1.5rem] text-[#ABABAB]"
				style={{ color: Color.TEXT_GRAY }}
			>
				An artistically trained full stack web developer, passionate in creating
				a unique user experience within the web environment. A quick learner
				when adapting to new languages and technologies, with a team-conscious
				approach.
			</p>
			<div className="mt-[2rem] flex-col space-y-6 sm:space-y-o sm:flex sm:flex-row items-center sm:space-x-6">
				<button
					className="px-[2rem]  py-[1rem] text-[18px] font-bold uppercase text-black flex items-center space-x-2"
					style={{ backgroundColor: Color.ACTION_BLUE }}
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
	);
};

export default HeroHeader;
