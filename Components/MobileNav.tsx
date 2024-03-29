import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
	nav: boolean;
	closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
	const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
	return (
		<div
			className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#ABABAB]`}
		>
			<div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
				<a href="#Hero" className="nav-link-mobile" onClick={closeNav}>
					HOME
				</a>
				<a href="#Skills" className="nav-link-mobile" onClick={closeNav}>
					SKILLS
				</a>
				<a href="#Projects" className="nav-link-mobile" onClick={closeNav}>
					PROJECTS
				</a>
				<a href="#Experience" className="nav-link-mobile" onClick={closeNav}>
					EXPERIENCE
				</a>
				<a href="#Contact" className="nav-link-mobile" onClick={closeNav}>
					CONTACT
				</a>
			</div>
			<div className="nav-link-mobile-close" onClick={closeNav}>
				<XMarkIcon />
			</div>
		</div>
	);
};

export default MobileNav;
