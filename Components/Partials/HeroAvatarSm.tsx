import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const HeroAvatarSm = () => {
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
		<div
			className="sm:w-[100%] sm:mt-[rem] md:hidden lg:hidden flex justify-center items-center cursor-pointer"
			onClick={() => flipAvatarCard()}
			ref={avatarCard}
		>
			<div
				className="h-[250px] w-[250px] relative items-center rounded-full md:hidden lg:hidden"
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

export default HeroAvatarSm;
