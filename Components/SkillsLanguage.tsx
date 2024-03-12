import React from "react";

interface Props {
	skills: string;
}

const SkillsLanguage = ({ skills }: Props) => {
	return (
		<div>
			<div className="relative mb-[3rem]">
				<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">{skills}</h1>
			</div>
		</div>
	);
};

export default SkillsLanguage;
