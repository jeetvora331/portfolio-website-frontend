/* eslint-disable @next/next/no-img-element */
import Geom2 from "components/Geom2";
import Lottie from "lottie-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Link as LinkScroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import MouseCircle from "./MouseCircle";

// import BackgroundAnimation from "./BackgroundAnimation";

// import rbp from "./lottie/rose_blue_purple.json";

const Hero = () => {
	return (
		<div className="bg-[#201c1c]">
			<div className="flex justify-center mx-auto bg-cover max-w-7xl  ">
				<div className="container flex items-center justify-center md:min-h-[calc(100vh-60px)] min-h-screen z-10">
					<div className="flex flex-col-reverse items-center justify-evenly mx-auto h-2/3 overflow-hidden md:flex-row md:justify-between ">
						<Fade direction="left" triggerOnce="true">
							<div className="flex flex-col p-5 md:w-4/5 gap-2">
								<h3 className="text-xl text-gray-400 ">Hello, Im</h3>
								<h1 className="font-bold text-gray-100 text-7xl font-['Satoshi']">
									Jeet Vora
								</h1>
								<h1 className=" text-3xl md:text-4xl text-gray-400 sm:h-auto">
									{/* Frontend Developer */}
									<Typewriter
										options={{
											strings: [
												"Frontend Developer",
												"Designer",
												"Formula 1 Enthusiast",
												"Problem Solver",
												"Instructor",
												"Engineer",
											],
											autoStart: true,
											loop: true,
											pauseFor: 1000,
											delay: 50,
											deleteSpeed: 30,
										}}
									/>
								</h1>
								<h3 className="py-4 text-xl md:text-2xl font-light text-gray-200 ">
									I am a Frontend Developer and Designer. I love exploring and
									creating things and might have a thing for Pizza, Humor and
									Formula 1
								</h3>
								<div className="flex gap-3 justify-around md:justify-start">
									<Link
										href={
											"https://jeetvora331.github.io/resume/"
										}
										target="_blank"
									>
										<button className="px-6 py-2 rounded-full bg-cyan-400 max-w-fit font-semibold">
											My Resume
										</button>
									</Link>
									<LinkScroll
										to="toolbox"
										smooth={true}
										duration={500}
										offset={0}
									>
										<div className="group w-fit [transform:translateZ(0)] px-6 py-2 rounded-full overflow-hidden bg-stone-800 relative before:absolute before:bg-cyan-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500  ">
											<span className="relative z-0 text-white rounded-full group-hover:text-gray-200 transition ease-in-out duration-500 font-semibold">
												Take A Tour
											</span>
										</div>
									</LinkScroll>
								</div>
								<span className="justify-center md:justify-start flex pt-4">
									<Link href={"https://dev.to/jeetvora331/"} target="_blank">
										<button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-semibold">
											<span class="absolute h-full w-full bg-gradient-to-tr from-[#A855F7] via-[#F05177] to-[#ffc700] group-hover:from-[#A855F7] group-hover:via-[#F05177] group-hover:to-[#ffc700]"></span>

											<span class="duration-400 relative rounded-full bg-gray-900 px-6 py-1.5 transition-all ease-out group-hover:bg-opacity-0">
												<span class="relative text-white">Tech Blog </span>
											</span>
										</button>
										<span class="absolute -ml-4 -mt-2 rotate-12">
											<div class="inline-flex animate-ping items-center rounded-lg bg-indigo-500 px-1 py-1 text-xs font-bold leading-4 text-white">
												NEW
											</div>
										</span>
									</Link>
								</span>
							</div>
						</Fade>
						<div className="absolute -z-50 opacity-5 scale-150 md:z-0 md:block  md:relative md:opacity-100 md:scale-100">
							{/* <Fade triggerOnce="true"> */}
							<Geom2 />
							{/* </Fade> */}
						</div>
					</div>
				</div>
				{/* <div className="absolute bottom-0 left-1/4 blob16 blur-2xl"></div> */}
			</div>
		</div>
	);
};

export default Hero;
