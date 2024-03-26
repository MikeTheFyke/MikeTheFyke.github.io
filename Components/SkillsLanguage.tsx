import { Color } from "@/Color";
import React from "react";

interface Props {
	skills: string[];
	title: string;
}

const SkillsLanguage = ({ skills, title }: Props) => {
	return (
		<div>
			<div
				className="mb-[1rem] rounded"
				style={{ backgroundColor: Color.BACKGROUND_BLUE }}
			>
				<h1
					className="p-5 pb-0 w-[100%] text-[20px] font-bold uppercase"
					style={{ color: Color.BACKGROUND_WHITE }}
				>
					{title}
				</h1>
				<h1
					className="p-5 w-[100%] text-[20px]"
					style={{ color: Color.TEXT_GRAY }}
				>
					{skills.toString()}
				</h1>
			</div>
		</div>
	);
};

export default SkillsLanguage;
