import React from "react";
import Image from "next/image";
import { Color } from "@/Color";
import { experience } from "@/public/data/data";

const Experience = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="pt-[5rem] pb-[5rem] md:pt-[8rem] md:pb-[8rem]"
			style={{ backgroundColor: Color.BACKGROUND_WHITE }}
			id="Experience"
		>
			<p className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Exper<span style={{ color: Color.MAIN_RED }}>ience</span>
			</p>
			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[1.5rem]">
				{experience.map((item) => {
					return (
						<div
							className="shadow rounded-md p-4 mx-auto mt-[2rem] max-h-[500px]"
							style={{
								backgroundColor: Color.BACKGROUND_BLUE,
								cursor: item.link ? "pointer" : "default",
							}}
							onClick={item.link ? () => openNewTab(item.link) : undefined}
							key="item.company"
						>
							<div className="">
								<Image
									src={item.icon}
									alt="companyAvatar"
									className="w-[4rem] h-[4em] mx-auto"
								/>

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
								<div className="space-y-1 pl-[10px]">
									<ul
										className="body-texts mt-[1.5rem] mb-[1.5rem] list-disc"
										style={{ color: Color.BACKGROUND_WHITE }}
									>
										{item.tasks.map((task) => {
											return <li key="task">{task}</li>;
										})}
									</ul>
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
