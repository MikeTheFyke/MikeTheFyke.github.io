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
		gsap.to(navMain.current, { x: `-120vw`, duration: 0 });
		gsap.to(navFyke.current, { y: -60, duration: 0 });
		gsap.to(navLinkSkills.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkProjects.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkExperience.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navLinkContact.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navMain.current, { x: 0, duration: 1, display: "block" });
		gsap.to(navFyke.current, { y: 10, duration: 1, delay: 2.25 });
		gsap.to(navLinkSkills.current, {
			scaleX: `100%`,
			scaleY: `100%`,
			delay: 1.25,
		});
		gsap.to(navLinkProjects.current, {
			scaleX: `100%`,
			scaleY: `100%`,
			delay: 1.5,
		});
		gsap.to(navLinkExperience.current, {
			scaleX: `100%`,
			scaleY: `100%`,
			delay: 1.75,
		});
		gsap.to(navLinkContact.current, {
			scaleX: `100%`,
			scaleY: `100%`,
			delay: 2,
		});
	};

	useLayoutEffect(() => {
		headerSlide();
	}, []);

	return (
		<div ref={navMain} className="nav-main-container">
			<div className="nav-inner-container ">
				<div ref={navFyke} style={{ display: "hidden" }}>
					<a href="#Hero" className="mr-[4rem]">
						<h1 className="text-white nav-fyke-header">
							MIKE
							<span className="text-red-500">FYKE</span>
						</h1>
					</a>
				</div>
				<div ref={navLinkSkills}>
					<a className="nav-link" href="#Skills">
						SKILLS
					</a>
				</div>
				<div ref={navLinkProjects}>
					<a className="nav-link" href="#Projects">
						PROJECTS
					</a>
				</div>
				<div ref={navLinkExperience}>
					<a className="nav-link" href="#Experience">
						EXPERIENCE
					</a>
				</div>
				<div ref={navLinkContact}>
					<a className="nav-link" href="#Contact">
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
