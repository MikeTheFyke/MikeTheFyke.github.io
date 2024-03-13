import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { gsap } from "gsap";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	gsap.to("#navFyke", { rotation: 27, x: 100, duration: 3 });

	return (
		<div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
			<div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
				<a href="#Hero" className="mr-[4rem]">
					<h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
						MIKE
						<span className="text-red-500" id="navFyke">
							FYKE
						</span>
					</h1>
				</a>
				<a className="nav-link" href="#Skills">
					SKILLS
				</a>
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
