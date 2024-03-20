import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import HeroHeader from "./Partials/HeroHeader";

const Hero = () => {
	const avatarCard = useRef(null);
	const avatarCardImage1 = useRef(null);
	const avatarImage1 = `url('/images/MikeFyke-Gen.jpeg')`;
	const avatarImage2 = `url('/images/mikeFykeAvatar.jpeg')`;
	const [currentAvatar, setCurrentAvatar] = useState(
		`url('/images/MikeFyke-Gen.jpeg')`
	);

	const flipAvatarCard = () => {
		const tl = gsap.timeline();
		tl.to(avatarCardImage1.current, 0.5, { rotationY: 90 });
		tl.to(avatarCardImage1.current, 0.5, {
			backgroundImage:
				currentAvatar === avatarImage2 ? avatarImage2 : avatarImage1,
			rotationY: 0,
			delay: 1,
		});
		currentAvatar === avatarImage2
			? setCurrentAvatar(avatarImage1)
			: setCurrentAvatar(avatarImage2);
	};

	return (
		<div id="Hero">
			<div className="hero-main-container">
				<div className="sm:w-[100%] sm:mt-[rem] md:hidden lg:hidden flex justify-center items-center">
					<div
						data-aos="zoom-in"
						className="h-[250px] w-[250px] relative items-center rounded-full md:hidden lg:hidden"
					>
						<Image
							src="/images/MikeFyke-Gen01.jpeg"
							alt="user"
							layout="fill"
							className="object-cover rounded-full"
						/>
					</div>
				</div>
				<HeroHeader />
				<div
					className="hidden md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center md:w-[100%] lg:w-[100%] cursor-pointer"
					onClick={() => flipAvatarCard()}
					ref={avatarCard}
				>
					<div
						data-aos="zoom-in"
						className="hidden relative md:flex lg:flex items-center rounded-full md:h-[375px] md:w-[150px] lg:h-[450px] lg:w-[450px]"
						id={"card01"}
						style={{
							backgroundImage: currentAvatar,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						ref={avatarCardImage1}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
