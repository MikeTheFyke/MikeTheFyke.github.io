import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EmployerReview from "./EmployerReview";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const ReviewSlider = () => {
	return (
		<Carousel
			additionalTransfrom={0}
			autoPlay={true}
			autoPlaySpeed={5000}
			centerMode={false}
			infinite
			responsive={responsive}
			itemClass="item"
			showDots={true}
			renderDotsOutside={true}
		>
			<EmployerReview
				image="/images/DianaAvatar-Gen01.jpeg"
				name="Diana Metzen"
				role="Scrum Master / 123Loadboard"
				review="Mike consistently demonstrated outstanding proficiency in front-end development, creating visually appealing, user-friendly and reactive interfaces that significantly enhanced our products. His ability to collaborate with cross-functional teams and understanding end-user' needs played a critical role in the success of several high profile projects."
			/>
			<EmployerReview
				image="/images/BernardAvatar-Gen01.jpeg"
				name="Bernard Poulin"
				role="Tech Lead / 123Loadboard"
				review="Mike not only adapted quickly to our projects but showcased an exceptional dedication and willingness to take on challenges and his commitment to going the extra mile were consistently evident. He has proven himself as a reliable and dedicated professional with the potential to continue making significant contributions."
			/>
		</Carousel>
	);
};

export default ReviewSlider;
