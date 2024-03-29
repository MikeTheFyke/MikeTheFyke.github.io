import React from "react";
import Image from "next/image";

interface Props {
	image: string;
	name: string;
	role: string;
	review: string;
}

const EmployerReview = ({ image, name, role, review }: Props) => {
	return (
		<div className="flex flex-col text-center justify-center pb-[40px] ">
			<Image
				src={image}
				alt={name}
				width={100}
				height={100}
				objectFit="contain"
				className="mx-auto mb-[2rem] rounded-full"
			/>
			<h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
			<p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
				{role}
			</p>
			<p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
				{review}
			</p>
		</div>
	);
};

export default EmployerReview;
