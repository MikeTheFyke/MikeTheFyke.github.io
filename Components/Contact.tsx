import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Contact = () => {
	const openNewTab = (url: string): void => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="pt-[8rem] pb-[4rem] bg-[#141c27]" id="Contact">
			<div className="grid pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[90%] mx-auto gap-[3rem]">
				<div className="flex items-center space-x-6">
					<div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
						<EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
					</div>
					<div>
						<h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">Email</h1>
						<p className="text-[17px] w-[90%] text-white opacity-60">mikefyke@hotmail.com</p>
					</div>
				</div>

				<div className="flex items-center space-x-6">
					<div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
						<DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
					</div>
					<div>
						<h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">Phone</h1>
						<p className="text-[17px] w-[90%] text-white opacity-60 whitespace-nowrap">1-705-808-1229</p>
					</div>
				</div>

				<div className="flex items-center space-x-6">
					<div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
						<MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
					</div>
					<div>
						<h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">Address</h1>
						<p className="text-[17px] w-[90%] text-white opacity-60">Toronto, Ontario, Canada</p>
					</div>
				</div>
			</div>
			<div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
				<div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">Mike Fyke 2024 | All Rights Reserved</div>
				<div className="flex items-center space-x-10">
					<div onClick={() => openNewTab("htts://www.github.com/Mike-The-Fyke")}>
						<Image
							src={"/images/GithubAvatar.png"}
							alt={"github"}
							width={100}
							height={100}
							objectFit="contain"
							className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF]"
						/>
					</div>
					<div onClick={() => openNewTab("https://www.linkedin.com/in/mike-fyke-5b4a5aa0/")}>
						<Image
							src={"/images/LinkedinAvatar.png"}
							alt={"linkedin"}
							width={100}
							height={100}
							objectFit="contain"
							className="mx-auto mb-[2rem] rounded-full bg-[#FFFFFF]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
