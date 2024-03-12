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
					<SkillsItem title="Lighthouse Labs" year="2019" description="Fullstack Web Development bootcamp." />
					<SkillsLanguage skills="NodeJs, HTML, CSS, Javascript, JQuery, Express, Cheerio, Axios, React, Ruby on Rails, SQL, PostgresSQL, MongoDB, Git, Knex" />
				</div>
				<div>
					<SkillsItem title="Sheridan College" year="2007 - 2009" description="Visual & creative Arts (Advanced Diploma)" />
					<SkillsLanguage skills="Traditional Drawing, Painting, Sculpting, 2D Design, 3D Design, Typography, Web Design, Graphic Design, Photography, Print Making" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
