import React from "react";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
	return (
		<div className="bg-[#2B445E] pt-[4rem] md:pt-[8rem] pb-[1rem]">
			<h1 className="heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Employer <span className="text-red-500">Reviews</span>
			</h1>
			<div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
				<ReviewSlider />
			</div>
		</div>
	);
};

export default Reviews;
