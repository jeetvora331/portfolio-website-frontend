import resource from "@/data/resource";
import Link from "next/link";
import React from "react";
import { FaTools } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Title from "./Elements/Title";

const Resources = () => {
	return (
		<div>
			<Zoom>
				<section className="body-font text-gray-600 max-w-7xl mx-auto border-8 border-fuchsia-200 bg-white">
					<div className="container mx-auto px-4 md:px-0 py-5">
						<div className="mb-5 -mt-10 text-center">
							<Title>My Favorite Resources</Title>
							{/* <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4"> */}
							<p className="desc ">
								As a thank you for scrolling this far, I want to offer you a
								small gift - a glimpse into my favorite free online resources.
								Feel free to take a moment to explore, and I hope you find
								something interesting!
							</p>
							{/* </p> */}
						</div>
						<div className="-mx-2  flex flex-wrap d:mx-auto sm:mb-2 ">
							{/* map here */}
							{resource.map((res, index) => {
								return (
									<div className="w-full p-2 sm:w-1/3 " key={index}>
										<Link href={res.link} target="_blank">
											<div className="flex h-full items-center rounded  p-4 cursor-pointer duration-300 hover:shadow-lg border bg-white">
												<div className="mr-4 h-8 w-8 flex-shrink-0 text-gray-500">
													<div className="w-full h-full text-2xl p-1 overflow-hidden">
														{res.icon || <FaTools />}
													</div>
												</div>
												<span className="title-font font-semibold">
													{res.name}
												</span>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</Zoom>
		</div>
	);
};

export default Resources;

// const Resource = () => {
// 	return (
// 		<div className="w-full p-2 sm:w-1/3 ">
// 			<Link href={"/"}>
// 				<div className="flex h-full items-center rounded  p-4 cursor-pointer duration-300 hover:shadow-lg border">
// 					<div className="mr-4 h-8 w-8 flex-shrink-0 text-indigo-500">
// 						<FaTools className="w-full h-full " />
// 					</div>
// 					<span className="title-font font-medium">
// 						Authentic Cliche Forage
// 					</span>
// 				</div>
// 			</Link>
// 		</div>
// 	);
// };
