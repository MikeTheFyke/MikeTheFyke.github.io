import React from "react";
import HeroHeader from "./Partials/HeroHeader";
import HeroAvatarLg from "./Partials/HeroAvatarLg";
import HeroAvatarSm from "./Partials/HeroAvatarSm";

const Hero = () => {
	return (
		<div>
			<div className="hero-main-container">
				<HeroAvatarSm />
				<HeroHeader />
				<HeroAvatarLg />
			</div>
		</div>
	);
};

export default Hero;
