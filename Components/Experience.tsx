import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import { Color } from "@/Color";

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
			link: "https://www.123loadboard.com",
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

	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="pt-[4rem] md:pt-[8rem] pb-[5rem] md:pb-[8rem]"
			style={{ backgroundColor: Color.BACKGROUND_WHITE }}
			id="Experience"
		>
			<p className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Exper<span style={{ color: Color.MAIN_RED }}>ience</span>
			</p>
			<div className="mx-auto w-[80%] pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] place-items-center">
				{experience.map((item) => {
					return (
						<div
							className="shadow rounded-md p-4 mx-auto cursor-pointer mt-[2rem] max-h-[500px] whitespace-nowrap sm:min-w-[432px] md:min-w[400px]"
							style={{ backgroundColor: Color.BACKGROUND_BLUE }}
							onClick={item.link ? () => openNewTab(item.link) : undefined}
							key="item.company"
						>
							<div className="flex space-x-4">
								<Image
									src={item.icon}
									alt="companyAvatar"
									className="w-[4rem] h-[4em] mx-auto"
								/>
								<div className="flex-1 space-y-6 py-1">
									<div>
										<h1
											className="text-[20px] md:text-[30px] mt-[.25rem] font-bold"
											style={{ color: Color.BACKGROUND_WHITE }}
										>
											{item.company}
										</h1>
										<h1
											className="text-[20px] md:text-[18px] font-semibold"
											style={{ color: Color.BACKGROUND_WHITE }}
										>
											{item.jobTitle}
										</h1>
										<h1
											className="text-[20px] md:text-[18px] whitespace-nowrap"
											style={{ color: Color.BACKGROUND_WHITE }}
										>
											{item.length}
										</h1>
									</div>
									<div className="space-y-1">
										<ul
											className="body-texts mt-[1.5rem] list-disc"
											style={{ color: Color.BACKGROUND_WHITE }}
										>
											{item.tasks.map((task) => {
												return <li key="task">{task}</li>;
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
