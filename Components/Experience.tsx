import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Experience = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] md:pb-[8rem]" id="Experience">
			<p className="heading">
				My <span className="text-red-500">Experience</span>
			</p>
			<div className="w-[80%] mx-auto items-center mt-[4rem">
				{/* Glass Section */}
				<div
					className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto hover:scale-110 cursor-pointer mt-[2rem]"
					onClick={() => openNewTab("https://www.123loadboard.com")}
				>
					<div className="animate-pulse flex space-x-4">
						<Image src="/images/123Loadboard.png" alt="companyAvatar" className="w-[4rem] h-[4em] mx-auto" />
						<div className="flex-1 space-y-6 py-1">
							<div>
								<h1 className="text-[20px] md:text-[30px] mt-[.25rem]  text-slate-700 font-bold">123Loadboard</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700 font-semibold">Frontend Developer</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700">April 2021 - January 2024</h1>
							</div>
							<div className="space-y-3">
								<div className="grid grid-cols-2 gap-4">
									<div className="">
										<ul className="text-[15px] text-[#e8e7e7] font-normal pl-2 list-item">
											<li>Fixed/reported bugs.</li>
											<li>Built new features.</li>
											<li>Improved old features.</li>
											<li>Took part in code reviews.</li>
										</ul>
									</div>
									<div className="">
										<ul className="text-[15px] text-[#e8e7e7] font-normal pl-2 list-item">
											<li>Built an avatar upload feature.</li>
											<li>Built an internal integration portal.</li>
											<li>Managed a frontend team.</li>
											<li>Took part in integration meetings.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Glass 02 */}
				<div
					className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto hover:scale-110 cursor-pointer mt-[2rem]"
					onClick={() => openNewTab("https://www.123loadboard.com")}
				>
					<div className="animate-pulse flex space-x-4">
						<Image src="/images/123Loadboard.png" alt="companyAvatar" className="w-[4rem] h-[4em] mx-auto" />
						<div className="flex-1 space-y-6 py-1">
							<div>
								<h1 className="text-[20px] md:text-[30px] mt-[.25rem]  text-slate-700 font-bold">123Loadboard</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700 font-semibold">Frontend Developer</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700">April 2021 - January 2024</h1>
							</div>
							<div className="space-y-3">
								<div className="grid grid-cols-2 gap-4">
									<div className="">
										<ul className="text-[15px] text-[#e8e7e7] font-normal pl-2 list-item">
											<li>Fixed/reported bugs.</li>
											<li>Built new features.</li>
											<li>Improved old features.</li>
											<li>Took part in code reviews.</li>
										</ul>
									</div>
									<div className="">
										<ul className="text-[15px] text-[#e8e7e7] font-normal pl-2 list-item">
											<li>Built an avatar upload feature.</li>
											<li>Built an internal integration portal.</li>
											<li>Managed a frontend team.</li>
											<li>Took part in integration meetings.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div data-aos="fade-left" data-aos-delay="300">
					<div className="bg-gray-800 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold p-[2rem] rounded">
						<div className="text-center">
							<Image src="/images/ProsperousFarmAvatar.jpeg" alt="companyAvatar" className="w-[4rem] h-[4em] mx-auto " /> */}
				{/* <Image className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" /> */}
				{/* <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]">The Prosperous Farm</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[0.5rem]">Frontend (Intern)</h1>
							<h1 className="text-[20px] md:text-[18px] mt-[1.5rem] mb-[1rem]">February - April 2021</h1>
						</div>
						<ul className="text-[15px] text-[#e8e7e7] font-normal">
							<li>Fixed/reported bugs</li>
							<li>Built new features</li>
							<li>Improved old features</li>
						</ul>
					</div>
				</div> */}

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
