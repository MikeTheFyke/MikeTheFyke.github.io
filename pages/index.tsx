import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Experience from "@/Components/Experience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Reviews from "@/Components/Reviews";
import Blog from "@/Components/Blog";

const Homepage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div className="overflow-x-hidden">
			<div>
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
				<Hero />
				<div className="relative z-[30]">
					<About />
					<Experience />
					<Skills />
					<Projects />
					<Reviews />
					<Blog />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
