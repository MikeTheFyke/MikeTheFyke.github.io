import React from "react";

interface Props {
	skills: string;
	title: string;
}

const SkillsLanguage = ({ skills, title }: Props) => {
	return (
		<div>
			<div className="relative mb-[3rem] w-[80%] text-center mx-2">
				<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold uppercase">{title}</h1>
				<h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-slate-300 text-[20px]">{skills}</h1>
			</div>
		</div>
	);
};

export default SkillsLanguage;
