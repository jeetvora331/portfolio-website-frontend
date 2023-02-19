import { projects } from "@/data/projects";
import React from "react";

const Project = () => {
	const text =
		"Open Graph Images: Automatically Generate OG Images From Post Content";
	return (
		<div>
			<section className="body-font text-gray-600 max-w-7xl mx-auto ">
				<h1>My Tech Projects</h1>
				<div className="container mx-auto px-5 py-24">
					<div className="-m-5 flex flex-col flex-wrap  md:flex-row justify-between">
						{projects.map((project, index) => {
							return (
								<div
									key={index}
									className="cursor-pointer hover:shadow-lg hoover:scale-105 duration-300  overflow-hidden rounded-lg border bg-white border-gray-200 border-opacity-60 md:w-1/4  m-6 md:m-0"
								>
									<img
										className="w-full object-cover object-center md:h-36 lg:h-48"
										src={project.image || "https://picsum.photos/530/350"}
										alt="project img"
									/>
									<div className="p-4 ">
										<h1 className="title-font my-0 text-lg font-bold text-gray-900">
											{project.title}
										</h1>
										<h1 className="title-font my-1 text-xs  flex flex-wrap gap-x-2 font-medium text-gray-900">
											{project.hashtags.map((tag, index) => {
												return (
													<div
														key={index}
														className="bg-neutral-100 px-2 rounded-2xl my-1 py-1"
													>
														# {tag}
													</div>
												);
											})}
										</h1>
										<h1 className="title-font my-3 border-b text-lg font-medium text-gray-900"></h1>
										<p className="mb-3 text-justify">{project.desc}</p>
										<div className="">
											<div className="bg-gray-50 border-2 hover:bg-gray-400 text-center text-gray-800 font-bold py-2 px-4 rounded-full my-4 ">
												Project Overview
											</div>
											<div className="flex justify-around ">
												<div className="w-full text-center px-4 py-2">CODE</div>
												<div className="w-full text-center px-4 py-2">LINK</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Project;

const ProjectCard = () => {
	return (
		<div className="cursor-pointer hover:shadow-lg hoover:scale-105 duration-300  overflow-hidden rounded-lg border bg-white border-gray-200 border-opacity-60 md:w-1/4  m-6 md:m-0">
			<img
				className="w-full object-cover object-center md:h-36 lg:h-48"
				src="https://picsum.photos/530/350"
				alt="blog"
			/>
			<div className="p-4 ">
				<h1 className="title-font my-0 text-lg font-medium text-gray-900">
					The Catalyzer
				</h1>
				<h1 className="title-font my-1 text-xs font-medium tracking-widest text-gray-400">
					HASHTAGS
				</h1>
				<h1 className="title-font my-3 border-b text-lg font-medium text-gray-900"></h1>
				<p className="mb-3 leading-relaxed">
					Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
					microdosing tousled waistcoat.
				</p>
				<div className="">
					<div className="bg-gray-50 border-2 hover:bg-gray-400 text-center text-gray-800 font-bold py-2 px-4 rounded-full my-4 ">
						Project Overview
					</div>
					<div className="flex justify-around ">
						<div className="w-full text-center px-4 py-2">CODE</div>
						<div className="w-full text-center px-4 py-2">LINK</div>
					</div>
				</div>
			</div>
		</div>
	);
};
