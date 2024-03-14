import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	const navMain = useRef(null);
	const navFyke = useRef(null);
	const navLinkSkills = useRef(null);

	const navLinkProjects = useRef(null);
	const navLinkExperience = useRef(null);
	const navLinkContact = useRef(null);

	const headerSlide = () => {
		gsap.to(navMain.current, { x: `-110vw`, duration: 0 });
		gsap.to(navFyke.current, { y: -60, duration: 0 });
		gsap.to(navLinkSkills.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkProjects.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkExperience.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkContact.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navMain.current, { x: 0, duration: 2, display: "block", delay: 1 });
		gsap.to(navFyke.current, { y: 10, duration: 1, delay: 2.75 });
		gsap.to(navLinkSkills.current, { scaleX: `100%`, scaleY: `100%`, delay: 2 });
		gsap.to(navLinkProjects.current, { scaleX: `100%`, scaleY: `100%`, delay: 2.25 });
		gsap.to(navLinkExperience.current, { scaleX: `100%`, scaleY: `100%`, delay: 2.5 });
		gsap.to(navLinkContact.current, { scaleX: `100%`, scaleY: `100%`, delay: 2.75 });
	};

	useLayoutEffect(() => {
		headerSlide();
	}, []);

	return (
		<div ref={navMain} className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
			<div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
				<div ref={navFyke} style={{ display: "hidden" }}>
					<a href="#Hero" className="mr-[4rem]">
						<h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							MIKE
							<span className="text-red-500">FYKE</span>
						</h1>
					</a>
				</div>
				<div ref={navLinkSkills}>
					<a className="nav-link drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" href="#Skills">
						SKILLS
					</a>
				</div>
				<div ref={navLinkProjects}>
					<a className="nav-link drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" href="#Projects">
						PROJECTS
					</a>
				</div>
				<div ref={navLinkExperience}>
					<a className="nav-link drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" href="#Experience">
						EXPERIENCE
					</a>
				</div>
				<div ref={navLinkContact}>
					<a className="nav-link drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" href="#Contact">
						CONTACT
					</a>
				</div>
				<div onClick={openNav}>
					<Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-500" />
				</div>
			</div>
		</div>
	);
};

export default Nav;
