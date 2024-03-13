import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Experience = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]" id="Experience">
			<p className="heading">
				My <span className="text-red-500">Experience</span>
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
				<div data-aos="fade-right" onClick={() => openNewTab("https://www.123loadboard.com")} className="cursor-pointer">
					<div className="bg-green-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold p-[2rem] rounded">
						<div className="text-center">
							<Image src="/images/123Loadboard.png" alt="companyAvatar" className="w-[4rem] h-[4em] mx-auto " />
							{/* <Image className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" /> */}
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1rem]">123Loadboard</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1rem]">Frontend Developer</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1rem]">April 2021 - January 2024</h1>
						</div>
						<ul className="text-[15px] text-[#e8e7e7] font-normal">
							<li>Fixed/reported bugs</li>
							<li>Built new features</li>
							<li>Improved old features</li>
							<li>Took part in code reviews</li>
							<li>Built an avatar upload feature</li>
							<li>Built an internal integration portal</li>
							<li>Managed a frontend team</li>
							<li>Took part in integration meetings</li>
						</ul>
					</div>
				</div>

				<div data-aos="fade-left" data-aos-delay="300">
					<div className="bg-gray-800 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold p-[2rem] rounded">
						<div className="text-center">
							<Image src="/images/ProsperousFarmAvatar.jpeg" alt="companyAvatar" className="w-[4rem] h-[4em] mx-auto " />
							{/* <Image className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" /> */}
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1rem]">The Prosperous Farm</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1rem]">Frontend (Intern)</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1rem]">February - April 2021</h1>
						</div>
						<ul className="text-[15px] text-[#e8e7e7] font-normal">
							<li>Fixed/reported bugs</li>
							<li>Built new features</li>
							<li>Improved old features</li>
						</ul>
					</div>
				</div>

				{/* <div data-aos="zoom-in" data-aos-delay="300">
					<div className="bg-green-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
						<RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
						<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">123Loadboard</h1>
						<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1.5rem]">April 2021 - January 2024</h1>
						<p className="text-[15px] text-[#e8e7e7] font-normal">
							fixed/reported bugs, built new features, took part in code review, managed a frontend team, Built an avatar upload feature,
							Built an internal integration portal and took part in customer meet ups.
						</p>
					</div>
				</div> */}
				{/* <div data-aos="fade-left" data-aos-delay="500">
					<div className="bg-yellow-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
						<CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
						<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">123Loadboard</h1>
						<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1.5rem]">April 2021 - January 2024</h1>
						<p className="text-[15px] text-[#e8e7e7] font-normal">
							fixed/reported bugs, built new features, took part in code review, managed a frontend team, Built an avatar upload feature,
							Built an internal integration portal and took part in customer meet ups.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Experience;
