import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const HeroAvatarLg = () => {
	const avatarCard = useRef(null);
	const avatarCardImage1 = useRef(null);
	const avatarImage1 = `url('/images/MikeFyke-Gen.jpeg')`;
	const avatarImage2 = `url('/images/mikeFykeAvatar.jpeg')`;
	const [currentAvatar, setCurrentAvatar] = useState(
		`url('/images/mikeFykeAvatar.jpeg')`
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
		<div
			className="hidden md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center md:w-[100%] lg:w-[100%] cursor-pointer"
			onClick={() => flipAvatarCard()}
			ref={avatarCard}
		>
			<div
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
	);
};

export default HeroAvatarLg;
