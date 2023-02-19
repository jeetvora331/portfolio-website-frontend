import Link from "next/link";
import React from "react";
import openSource from "../src/data/openSource";

const OpenSource = () => {
	return (
		<div>
			<section className="body-font text-gray-600 max-w-7xl mx-auto">
				<div className="mx-auto py-24  px-4 md:px-0">
					<div className="mb-20 flex w-full flex-col text-center">
						<h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
							Open Source Contributions
						</h1>
						<p className="mx-auto text-base leading-relaxed lg:w-2/3">
							My significant contribution
						</p>
					</div>
					<div className="flex flex-wrap -m-5">
						{/* component below */}
						{openSource.map((contri, index) => {
							return (
								<div
									key={index}
									className="w-full  md:w-1/2 p-5 cursor-pointer"
								>
									<Link href={contri.link} target="_blank">
										<div className="flex h-full rounded-lg border border-gray-200 ">
											<img
												alt="team"
												className="w-1/5 flex-shrink-0 object-contain  overflow-hidden  "
												src={contri.img}
											/>
											<div className="flex-grow p-4 border-l">
												<h2 className="title-font font-medium text-gray-900 md:text-lg">
													{contri.title}
												</h2>
												<p className="text-gray-500">{contri.desc}</p>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default OpenSource;

const OSCard = (second) => {
	return (
		<div className="w-full  md:w-1/2 p-5 cursor-pointer">
			<div className="flex h-full rounded-lg border border-gray-200 ">
				<img
					alt="team"
					className="w-1/5 flex-shrink-0 object-contain  overflow-hidden  "
					src="https://miro.medium.com/max/805/1*aUSZsGFCMPNYCkQygs4aGQ.jpeg"
				/>
				<div className="flex-grow p-4 border-l">
					<h2 className="title-font font-medium text-gray-900 md:text-lg">
						matplotlib (merged)
					</h2>
					<p className="text-gray-500">
						I faced an issue while plotting graph on light color on white
						background,
					</p>
				</div>
			</div>
		</div>
	);
};
