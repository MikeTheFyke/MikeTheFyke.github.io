import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	const navMain = useRef(null);
	const navFyke = useRef(null);
	const navLinks = useRef(null);

	useLayoutEffect(() => {
		gsap.to(navMain.current, { x: `-110vw`, duration: 0 });
		gsap.to(navFyke.current, { y: -60, duration: 0 });
		gsap.to(navLinks.current, { scaleX: 0, scaleY: 0, duration: 0 });
		gsap.to(navMain.current, { x: 0, duration: 2, display: "block", delay: 1 });
		gsap.to(navFyke.current, { y: 10, duration: 1, delay: 2 });
		gsap.to(navLinks.current, { scaleX: `100%`, scaleY: `100%`, delay: 2 });
	}, []);

	return (
		<div ref={navMain} className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
			<div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
				<div ref={navFyke} style={{ display: "hidden" }}>
					<a href="#Hero" className="mr-[4rem]">
						<h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
							MIKE
							<span className="text-red-500">FYKE</span>
						</h1>
					</a>
				</div>
				<div ref={navLinks}>
					<a className="nav-link" href="#Skills">
						SKILLS
					</a>
				</div>
				<a className="nav-link" href="#Projects">
					PROJECTS
				</a>
				<a className="nav-link" href="#Experience">
					EXPERIENCE
				</a>
				<a className="nav-link" href="#Contact">
					CONTACT
				</a>
				<div onClick={openNav}>
					<Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-500" />
				</div>
			</div>
		</div>
	);
};

export default Nav;
