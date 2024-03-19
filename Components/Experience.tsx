import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import { map } from "lodash";

interface Job {
	icon: string;
	company: string;
	jobTitle: string;
	length: string;
	tasks: string[];
}

const Experience = () => {
	const experience = [
		{
			icon: "/images/123Loadboard.png",
			company: "123Loadboard",
			jobTitle: "Frontend Developer",
			length: "April 2021 - January 2024",
			tasks: [
				"Fixed/reported bugs.",
				"Built new features.",
				"Improved old features.",
				"Took part in code reviews.",
				"Built an avatar upload feature.",
				"Built an internal integration portal.",
				"Managed a frontend team.",
				"Took part in integration meetings.",
			],
		},
		{
			icon: "/images/ProsperousFarmAvatar.jpeg",
			company: "The Prosperous Farm",
			jobTitle: "Frontend (Intern)",
			length: "February 2021 - April 2021",
			tasks: [
				"Fixed/reported bugs",
				"Built new features",
				"Improved old features",
			],
		},
	];

	map(experience, (item) => console.log("Item : ", item.company));

	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="bg-[#efefef pt-[4rem] md:pt-[8rem] pb-[5rem] md:pb-[8rem]"
			id="Experience"
		>
			<p className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Exper<span className="text-red-500">ience</span>
			</p>
			<div className="w-[80%] mx-auto items-center mt-[4rem">
				{/* Glass Section */}
				<div
					className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto hover:scale-110 cursor-pointer mt-[2rem]"
					onClick={() => openNewTab("https://www.123loadboard.com")}
				>
					<div className="flex space-x-4">
						<Image
							src="/images/123Loadboard.png"
							alt="companyAvatar"
							className="w-[4rem] h-[4em] mx-auto"
						/>
						<div className="flex-1 space-y-6 py-1">
							<div>
								<h1 className="text-[20px] md:text-[30px] mt-[.25rem]  text-slate-700 font-bold">
									123Loadboard
								</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700 font-semibold">
									Frontend Developer
								</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700">
									April 2021 - January 2024
								</h1>
							</div>
							<div className="space-y-3">
								<div className="grid grid-cols-2 gap-4">
									<div className="">
										<ul className="body-texts mt-[1.5rem] text-[#ABABAB] list-disc">
											<li>Fixed/reported bugs.</li>
											<li>Built new features.</li>
											<li>Improved old features.</li>
											<li>Took part in code reviews.</li>
										</ul>
									</div>
									<div className="">
										<ul className="body-texts mt-[1.5rem] text-[#ABABAB] list-disc">
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
				<div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto hover:scale-110 cursor-pointer mt-[2rem]">
					<div className="flex space-x-4">
						<Image
							src="/images/ProsperousFarmAvatar.jpeg"
							alt="companyAvatar"
							className="w-[4rem] h-[4em] mx-auto"
						/>
						<div className="flex-1 space-y-6 py-1">
							<div>
								<h1 className="text-[20px] md:text-[30px] mt-[.25rem] text-slate-700 font-bold">
									The Prosperous Farm
								</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700 font-semibold">
									Frontend (Intern)
								</h1>
								<h1 className="text-[20px] md:text-[18px] text-slate-700">
									February 2021 - April 2021
								</h1>
							</div>
							<div className="space-y-3">
								<div className="grid grid-cols-2 gap-4">
									<div className="">
										<ul className="body-texts mt-[1.5rem] text-[#ABABAB] list-disc">
											<li>Fixed/reported bugs</li>
											<li>Built new features</li>
											<li>Improved old features</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
