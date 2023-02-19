/* eslint-disable @next/next/no-img-element */
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
// import BackgroundAnimation from "./BackgroundAnimation";

// import rbp from "./lottie/rose_blue_purple.json";

const Hero = () => {
	return (
		<div className="bg-[#201c1c]">
			<div className="flex justify-center mx-auto bg-cover max-w-7xl ">
				<div className="container flex items-center justify-center min-h-screen z-10">
					<div className="flex flex-col-reverse items-center justify-between mx-auto h-2/4 md:flex-row md:justify-between ">
						<div className="flex flex-col w-3/5 gap-2">
							<h3 className="text-xl text-gray-500 ">Hello, Im</h3>
							<h1 className="font-bold text-gray-100 text-7xl font-['Satoshi']">
								Jeet Vora
							</h1>
							<h1 className="h-20 text-4xl text-gray-600 sm:h-auto">
								<Typewriter
									options={{
										strings: [
											"Frontend Developer",
											"Designer",
											"Formula 1 Enthusiast",
											"Problem Solver",
											"Instructor",
										],
										autoStart: true,
										loop: true,
										pauseFor: 1000,
										delay: 50,
										deleteSpeed: 30,
									}}
								/>
							</h1>
							<h3 className="py-4 text-2xl text-gray-200 ">
								I am a Frontend Developer and Designer. I love exploring and
								creating things and might have a thing for Pizza, Humor and F1
							</h3>
							<button className="px-6 py-2 rounded-full bg-cyan-400 max-w-fit">
								My Resume
							</button>
						</div>

						<div>{/* <Lottie className="" animationData={rbp} /> */}</div>
					</div>
				</div>
				{/* <div className="absolute bottom-0 left-1/4 blob16 blur-2xl"></div> */}
			</div>
		</div>
	);
};

export default Hero;
