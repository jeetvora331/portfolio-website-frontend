import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="bg-center bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/004/947/449/non_2x/coniferous-twigs-closeup-dark-nature-background-realistic-pine-or-spruce-branches-on-blurred-background-lush-vegetation-in-a-coniferous-forest-copy-space-illustration-vector.jpg')] font-['Satoshi']"
		>
			<div className="max-w-7xl h-fit mx-auto py-10 flex flex-col ">
				<div className="text-white sm:mx-10 my-4 sm:text-[36px] text-lg mx-auto  font-bold border-b-4 leading-snug w-fit">
					About Me
				</div>
				<div className="bg-white/10   p-10 sm:w-3/4  sm:rounded-2xl rounded-none opacity-100 sm:text-2xl text-base backdrop-blur-xl">
					<div className="opacity-100 sm:text-3xl text-xl mb-4 font-semibold text-white">
						Hi, I am Jeet,
					</div>
					<div className="text-white leading-tight">
						A fun loving software development and design enthusiast. When I am
						not working I like to watch Formula 1 videos, play piano sometimes
						and look for some interesting videos on Youtube. On weekends I like
						to play strategic board games and I used to go to Open Mics
						pre-covid. I have very high affinity towards roadside food. I am a
						complete extrovert and like to spend time with people with whom I
						can have funny and punny conversations.
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
