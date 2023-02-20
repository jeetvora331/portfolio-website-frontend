import Link from "next/link";
import React from "react";
import Title from "./Elements/Title";

const Publications = () => {
	const text =
		"Open Graph Images: Automatically Generate OG Images From Post Content";
	return (
		<div className="max-w-7xl md:mx-auto mx-5 my-10">
			<Title>My Publications</Title>
			<p className="desc">
				Explore my contributions to the academic and professional worlds through
				my published research paper, and a patent. These achievements
				demonstrate my commitment to driving progress and making a meaningful
				impact in real-world.{" "}
			</p>

			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-5">
				<Paper />
				<IPR />
			</div>
		</div>
	);
};

const Paper = () => {
	return (
		<div>
			<Link
				href={"https://ieeexplore.ieee.org/document/9358372"}
				target="_blank"
			>
				<div className="group flex flex-row-reverse rounded-lg h-72 bg-white s-hover cursor-pointer  hover:scale-100  hover:s-hover ">
					<img
						src="https://ist2021.ieee-ims.org/wp-content/uploads/sites/5/2020/12/IEEE-Logo-Blue-Display.png"
						alt=""
						className="border-l object-contain w-1/3 rounded-r-lg hidden sm:block object-center"
					/>
					<div className=" w-full p-4 flex flex-col justify-between">
						<div className="text-base md:text-xl  font-semibold ">
							Design of Novel Time Monitored Touchless Operation using 555 Timer
							for Automatic Dispenser
						</div>
						<h1>
							5th IEEE International Conference on Recent Advances and
							Innovations in Engineering-ICRAIE 2020, IEEE Explore
							DOI:10.1109/ICRAIE51050.2020.9358372
						</h1>
						<div className="mt-4 flex">
							<h2 className="w-0 overflow-hidden ease-out duration-200 group-hover:w-fit ">
								View&nbsp;
							</h2>
							<p className="visible"> Publication</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const IPR = () => {
	return (
		<div>
			<Link href={"/"} target="_blank">
				<div className="group flex flex-row-reverse rounded-lg h-72 bg-white s-hover hover:s-hover ">
					<img
						src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/04/patentback.png?fit=295%2C295&ssl=1"
						alt=""
						className="border-l object-contain w-1/3 rounded-r-lg hidden sm:block object-center"
					/>
					<div className=" w-full p-4 flex flex-col justify-between">
						<div className="text-base font-semibold md:text-xl  ">
							Intellectual Property Rights (IPR) - Design Patent
						</div>
						<div>
							Design Patent on Soap Dispenser
							<h2>Application No.332436-001(approved)</h2>
						</div>
						<div className="mt-4 flex">
							<p className="visible">Patent Certificate</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Publications;
// const Patent = () => {
// 	return (
// 		<div className="">
// 			<div className="flex flex-row-reverse rounded-lg h-64  bg-white shadow cursor-pointer duration-300 hover:scale-100  hover:shadow-lg  ">
// 				<img
// 					src="https://assets.stickpng.com/images/6206715bd7b91b000412261b.png"
// 					alt=""
// 					className="border-l object-contain  w-1/3 rounded-r-lg hidden sm:block"
// 				/>
// 				<div className=" w-full p-4 flex flex-col ">
// 					<div className="text-base font-medium md:text-lg ">
// 						<h1></h1>
// 					</div>
// 					<div className="my-1"># HASHTAG</div>
// 					<div>3 min read </div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
