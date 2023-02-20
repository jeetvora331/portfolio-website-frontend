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
							<h1 className="h-20 text-4xl text-gray-400 sm:h-auto">
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
							<div class="group w-fit [transform:translateZ(0)] px-6 py-3 rounded-full overflow-hidden bg-gray-200 relative before:absolute before:bg-cyan-400 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 ">
								<span class="relative z-0 text-black rounded-full group-hover:text-gray-200 transition ease-in-out duration-500">
									Take A Tour
								</span>
							</div>
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
