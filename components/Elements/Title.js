import React from "react";

const Title = ({ children }) => {
	return (
		<div className="md:text-3xl text-2xl md:font-bold relative	  my-5 pt-16 border-b-0 px-5  w-fit md:mx-auto mx-auto ">
			{children}
			<div className=" py-0 h-1 my-1  bg-gradient-to-l from-blue-400 to-cyan-300 md:scale-x-150 "></div>
		</div>
	);
};

export default Title;
