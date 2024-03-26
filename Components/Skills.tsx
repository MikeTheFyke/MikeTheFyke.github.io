import React from "react";
import SkillsLanguage from "./SkillsLanguage";
import SkillsItem from "./SkillsItem";
import { education } from "@/public/data/data";

const Skills = () => {
	return (
		<div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#efefef]" id="Skills">
			<h1 className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				EDUCATION & <span className="text-red-500">Skills</span>
			</h1>
			<div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
				{education.map((item) => {
					return (
						<div key="item.institution">
							<SkillsItem
								title={item.institution}
								year={item.year}
								description={item.description}
							/>
						</div>
					);
				})}
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
				<SkillsLanguage
					skills="MongoDB, SQL, PostgresSQL, Postgres, Git, Knex"
					title="Databases"
				/>
				<SkillsLanguage
					skills="AdobeCS, HTML5Canvas, AutoCad, Blender, ThreeJs, Drawing, Painting, Typography, Web Design, Graphic Design, Photography"
					title="Other Skills"
				/>
			</div>
		</div>
	);
};

export default Skills;
