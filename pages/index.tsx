import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Experience from "@/Components/Experience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Reviews from "@/Components/Reviews";
import Contact from "@/Components/Contact";

const Homepage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div>
			<div id="Hero">
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
				<Hero />
				<div className="relative z-[30]">
					<About />
					<Skills />
					<Projects />
					<Experience />
					<Reviews />
					{/* <Blog /> */}
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
