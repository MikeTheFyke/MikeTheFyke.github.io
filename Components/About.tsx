import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const About = () => {
	const plusSlate1 = useRef(null);
	const plusSlate2 = useRef(null);

	const onHover = (id: any) => {
		gsap.from(id.current, { rotation: 0, duration: 0 });
		gsap.to(id.current, { rotation: 90, duration: 1 });
	};

	const onLeave = (id: any) => {
		gsap.from(id.current, { rotation: 90, duration: 0 });
		gsap.to(id.current, { rotation: 0, duration: 1 });
	};

	return (
		<div className="bg-[#2B445E] pb-[3rem] pt-[4rem] md:pt-[8rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
				<div>
					<h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
						Crafting <span className="text-red-500">Stories</span>
					</h2>
					<div className="mb-[3rem] flex items-center md:space-x-10">
						<div
							style={{ width: "50px", height: "50px", cursor: "pointer" }}
							onMouseOver={() => onHover(plusSlate1)}
							onMouseLeave={() => onLeave(plusSlate1)}
						>
							<span
								ref={plusSlate1}
								className="w-[50px] hidden md:block h-[5px] bg-[#EFEFEF] rounded-sm"
							></span>
						</div>
						<p className="body-texts text-[#EFEFEF] w-[80%]">
							Make users feel like they are experiencing a website instead of
							just viewing it, with micro-interactions.
						</p>
					</div>
					<div className="mb-[3rem] flex items-center md:space-x-10">
						<div
							style={{ width: "50px", height: "50px", cursor: "pointer" }}
							onMouseOver={() => onHover(plusSlate2)}
							onMouseLeave={() => onLeave(plusSlate2)}
						>
							<span
								ref={plusSlate2}
								className="w-[50px] hidden md:block h-[5px] bg-[#EFEFEF] rounded-sm"
							></span>
						</div>
						<p className="body-texts text-[#EFEFEF] w-[80%]">
							Guidelines can be like a fence around a yard. Some people can feel
							contained and stay firmly in the middle of the yard, contained by
							those guidelines. But to truely make the best use of those
							guidelines someone needs to walk along that fence like a tight
							rope.
						</p>
					</div>
				</div>
				<div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
					<Image
						src="/images/MikeFyke-Gen02.jpeg"
						alt="user"
						layout="fill"
						objectFit="contain"
						className="relative z-[11] w-[100%] h-[100%] object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
