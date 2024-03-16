import React from "react";

interface Props {
	title: string;
	year: string;
	description: string;
}

const SkillsItem = ({ title, year, description }: Props) => {
	return (
		<div className="mb-[2rem] md:mb-[2rem]">
			<span className="px-[2rem] text-[#EFEFEF] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#EFEFEF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				{year}
			</span>
			<h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-[#EFEFEF] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				{title}
			</h1>
			<p className="text-[#ABABAB] font-normal w-[80%] text-[17px] opacity-80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				{description}
			</p>
		</div>
	);
};

export default SkillsItem;
