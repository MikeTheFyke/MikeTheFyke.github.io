import React from "react";
import Image from "next/image";

const HeroAvatarSm = () => {
	return (
		<div className="sm:w-[100%] sm:mt-[rem] md:hidden lg:hidden flex justify-center items-center">
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
