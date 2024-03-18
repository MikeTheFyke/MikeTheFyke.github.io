import {
	DevicePhoneMobileIcon,
	EnvelopeIcon,
	MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Contact = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="pt-[4rem] pb-[4rem] bg-[#ABABAB]" id="Contact">
			<div className="grid pb-[1rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-[90%] mx-auto gap-[3rem]">
				<div className="flex items-center">
					<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						<a href="mailto:mikefyke@hotmail.com?subject=Lets%20Talk">
							<EnvelopeIcon className="w-[3rem] h-[3rem] text-black" />
						</a>
					</div>
				</div>

				<div className="flex items-center">
					<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						<a href="tel:17058081229">
							<DevicePhoneMobileIcon className="w-[3rem] h-[3rem] text-black" />
						</a>
					</div>
				</div>

				<div className="flex items-center">
					<div className="cursor-pointer w-[5rem] h-[5rem] flex items-center justify-center rounded-full  bg-[#FFFFFF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						<a
							onClick={() =>
								openNewTab(
									"https://maps.google.com/?q= Toronto, Ontario, Canada"
								)
							}
						>
							<MapIcon className="w-[3rem] h-[3rem] text-black" />
						</a>
					</div>
				</div>
			</div>
			<div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-between">
				<div className="w-[175px] md:w-[360px] lg:w-[360px] text-[18px] mb-[2rem] md:mb-0 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					Mike Fyke 2024 | All Rights Reserved
				</div>
				<div className="flex items-center space-x-10 w-[145px]">
					<Image
						onClick={() => openNewTab("htts://www.github.com/MikeTheFyke")}
						src={"/images/GithubAvatar.png"}
						alt={"github"}
						width={50}
						height={50}
						objectFit="contain"
						className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF] cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
					/>
					<Image
						onClick={() =>
							openNewTab("https://www.linkedin.com/in/mike-fyke-5b4a5aa0/")
						}
						src={"/images/LinkedinAvatar.png"}
						alt={"linkedin"}
						width={50}
						height={50}
						objectFit="contain"
						className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF] cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
