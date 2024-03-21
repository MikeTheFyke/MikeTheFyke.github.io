import {
	DevicePhoneMobileIcon,
	EnvelopeIcon,
	MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import { Color } from "@/Color";

const Contact = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="pt-[4rem] pb-[4rem]"
			id="Contact"
			style={{ backgroundColor: Color.TEXT_GRAY }}
		>
			<div className="mx-auto grid pb-[1rem] grid-cols-3 lg:grid-cols-5 md:grid-cols-3 w-[80%] gap-[3rem] place-items-center">
				<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<a href="mailto:mikefyke@hotmail.com?subject=Lets%20Talk">
						<EnvelopeIcon className="w-[3rem] h-[3rem] text-black" />
					</a>
				</div>

				<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<a href="tel:17058081229">
						<DevicePhoneMobileIcon className="w-[3rem] h-[3rem] text-black" />
					</a>
				</div>

				<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<a
						onClick={() =>
							openNewTab("https://maps.google.com/?q= Toronto, Ontario, Canada")
						}
					>
						<MapIcon className="w-[3rem] h-[3rem] text-black" />
					</a>
				</div>

				<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<Image
						onClick={() => openNewTab("htts://www.github.com/MikeTheFyke")}
						src={"/images/GithubAvatar.png"}
						alt={"github"}
						objectFit="contain"
						fill
						className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF] cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
					/>
				</div>

				<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<Image
						onClick={() =>
							openNewTab("https://www.linkedin.com/in/mike-fyke-5b4a5aa0/")
						}
						src={"/images/LinkedinAvatar.png"}
						alt={"linkedin"}
						objectFit="contain"
						fill
						className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF] cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
					/>
				</div>
			</div>
			<p>
				<a
					onClick={() => openNewTab("https://clustrmaps.com/site/1byyc")}
					title="Visit tracker"
					style={{ cursor: "default", marginLeft: "10px" }}
				>
					Copyright Mike Fyke 2024
				</a>
			</p>
		</div>
	);
};

export default Contact;
