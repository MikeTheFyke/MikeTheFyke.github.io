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
				</div>
				<div>
					<SkillsItem title="Sheridan College" year="2007 - 2009" description="Visual & creative Arts (Advanced Diploma)" />
				</div>
			</div>
			<div className="mx-auto  w-[80%]">
				<SkillsLanguage
					skills="NodeJs, Javascript, Typescript, CSS, Sass, Ruby, Python, Xcode, AndroidStudio"
					title="Environments & Languages"
				/>
				<SkillsLanguage
					skills="React, ReactNative, JQuery, GSAP, Materialui, StyledComponents, Axios, Cheerio, Lodash, WebGL, EJS"
					title="Libraries"
				/>
				<SkillsLanguage
					skills="NextJs, VueJs, Websockets, ActiveRecord, Rails, Express, Bootstrap, Tailwind"
					title="Protocols & Frameworks"
				/>
				<SkillsLanguage skills="MongoDB, SQL, PostgresSQL, Postgres, Git, Knex" title="Databases" />
				<SkillsLanguage
					skills="AdobeCS, HTMLS5Canvas, AutoCad, Blender, ThreeJs, Drawing, Painting, Typography, Web Design, Graphic Design, Photography"
					title="Other Skills"
				/>
			</div>
		</div>
	);
};

export default Skills;
