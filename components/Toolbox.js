/* eslint-disable @next/next/no-img-element */
import skills from "@/data/skills";
import Image from "next/image";
import Link from "next/link";
// import Fade from "react-reveal/Fade";
import Title from "./Elements/Title";

const Toolbox = () => {
	// console.log("skills :>> ", skills[0].src);
	return (
		<div className="neural -z-10" name="toolbox">
			{/* <Fade> */}
			<div className="max-w-7xl mx-auto my-20   ">
				{/* <Title title={"My Toolbox"} /> */}
				<Title>My Toolbox</Title>
				<div className="desc  ">
					A non-exhaustive list of my skills, I am constantly expanding and
					updating my skill set to ensure that I am always prepared for whatever
					challenges come my way.
				</div>
				<div className="flex flex-row flex-wrap  sm:justify-around justify-center  gap-10">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex  flex-col p-2 z-20 m-4 overflow-hidden bg-white divide-y-2 rounded shadow-md hover:shadow-lg h-36 w-28 "
						>
							<div className="flex flex-col justify-center h-full">
								<Link
									href={`http://www.google.com/search?q=${skill.title}`}
									target="_blank"
								>
									<Image
										className="object-scale-down h-24 p-2"
										src={skill.src}
										alt={skill.title}
									/>
								</Link>
							</div>
							<div className="pt-1 text-center">{skill.title}</div>
						</div>
					))}
				</div>
			</div>
			{/* </Fade> */}
		</div>
	);
};

export default Toolbox;
