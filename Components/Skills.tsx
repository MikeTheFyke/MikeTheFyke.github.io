import React from "react";
import SkillsLanguage from "./SkillsLanguage";
import SkillsItem from "./SkillsItem";

const Skills = () => {
	return (
		<div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]" id="Skills">
			<h1 className="heading">
				EDUCATION & <span className="text-red-500">Skills</span>
			</h1>
			<div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
				<div>
					<SkillsItem title="React Developer" year="2014 - 2018" />
					<SkillsItem title="Next Js Developer" year="2014 - 2018" />
					<SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
				</div>
				<div>
					<SkillsItem title="React Developer" year="2014 - 2018" />
					<SkillsItem title="Next Js Developer" year="2014 - 2018" />
					<SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
