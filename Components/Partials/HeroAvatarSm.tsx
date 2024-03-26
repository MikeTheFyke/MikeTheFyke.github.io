import React, { useRef, useState } from "react";
import Image from "next/image";

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
			className="sm:w-[100%] sm:mt-[rem] md:hidden lg:hidden flex justify-center items-center"
			onClick={() => flipAvatarCard()}
			ref={avatarCard}
		>
			<div
				data-aos="zoom-in"
				className="h-[250px] w-[250px] relative items-center rounded-full md:hidden lg:hidden"
			>
				<Image
					src="/images/MikeFyke-Gen.jpeg"
					alt="user"
					layout="fill"
					className="object-cover rounded-full"
				/>
			</div>
		</div>
	);
};

export default HeroAvatarSm;
