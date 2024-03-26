import React from "react";
import Image from "next/image";
import { Color } from "@/Color";
import { projects } from "@/public/data/data";

const Projects = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="bg-[#2B445E] py-[4rem] md:py-[8rem]" id="Projects">
			<h1 className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Pro<span className="text-red-500">jects</span>
			</h1>

			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
				{projects.map((project) => {
					return (
						<div
							style={{ backgroundColor: Color.BACKGROUND_WHITE }}
							className="rounded"
							key={project.name}
							onClick={() => openNewTab(project.link)}
						>
							<h1
								className="project-title"
								style={{ color: Color.BACKGROUND_BLUE }}
							>
								{project.name}
							</h1>
							<div className="flex justify-center items-center">
								<div
									className="project-image-container"
									style={{
										backgroundImage: `url(${project.image})`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										width: "240px",
										height: "240px",
									}}
								/>
							</div>
							<h1
								style={{ color: Color.BACKGROUND_BLUE, margin: "8px" }}
								className="px-2"
							>
								{project.summary}
							</h1>
							<h1
								style={{
									color: Color.TEXT_GRAY,
									textAlign: "center",
									margin: "8px",
								}}
							>
								{project.stack}
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
