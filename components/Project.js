import { miniProjects, projects } from "@/data/projects";
import Link from "next/link";
import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import { AiFillGithub } from "react-icons/ai";
import Title from "./Elements/Title";

const Project = () => {
	return (
		<div>
			<section
				className="body-font text-gray-600 max-w-7xl mx-auto my-20"
				name="project"
			>
				<Title>Recent Tech Projects</Title>
				<div className="container mx-auto px-5 py-4">
					<div className="-mx-5 flex flex-col flex-wrap  md:flex-row justify-between">
						{projects.map((project, index) => {
							return (
								<div
									key={index}
									className="cursor-pointer s-hover hover:s-hover hoover:scale-105 duration-300  overflow-hidden rounded-lg boorder bg-white border-gray-200 border-opacity-60 md:w-1/4  m-6 md:m-0"
								>
									<img
										className="w-full object-cover object-center md:h-36 lg:h-48"
										src={project.image || "https://picsum.photos/530/350"}
										alt="project img"
									/>
									<div className="p-4 pt-2">
										<h1 className="title-font my-0 text-2xl font-bold text-gray-900 py-1">
											{project.title}
										</h1>
										<h1 className="title-font my-1 text-xs  flex flex-wrap gap-x-2 font-medium text-gray-900">
											{project.hashtags.map((tag, index) => {
												return (
													<div
														key={index}
														className="bg-neutral-100 px-2 rounded-md my-1 py-1"
													>
														# {tag}
													</div>
												);
											})}
										</h1>
										<h1 className="title-font my-3 border-b text-lg font-medium text-gray-900"></h1>
										<p className="mb-3 text-justify">{project.desc}</p>
										<div className="">
											<Link href={project.projectOverview} target="__blank">
												<ButtonProject>Project Overview</ButtonProject>
											</Link>
											{/* <div className="flex justify-around ">
												<div className="w-full text-center px-4 py-2">CODE</div>
												<div className="w-full text-center px-4 py-2">LINK</div>
											</div> */}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* Mini cards */}
				<Title>Mini Projects</Title>
				<AttentionSeeker effect="bounce" triggerOnce="true">
					<div className="flex flex-col sm:flex-row gap-10 sm:py-10">
						{miniProjects.map((project, index) => {
							return (
								<div key={index} className="relative  sm:w-1/4 p-2 m-6 md:m-0 ">
									<div
										className=" block cursor-pointer h-full overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat s-hover hover:s-hover"
										style={{ backgroundImage: `url("${project.image}")` }}
									>
										<div className="relative flex  h-full items-start justify-between bg-black/60 p-4 hover:bg-black/25 sm:p-6 lg:p-8 duration-500 ">
											<Link href={project.demoLink} target="_blank">
												<div className="sm:pt-18 pt-12 text-white ">
													<h3 className="text-xl font-bold sm:text-2xl">
														{project.title}
													</h3>

													<p className="text-sm">{project.desc}</p>
												</div>
											</Link>
											<Link href={project.codeLink} target="_blank">
												<span className="inline-flex  rounded-full bg-black  text-3xl font-semibold text-white p-2 hover:scale-105">
													<AiFillGithub />
												</span>
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</AttentionSeeker>
				<GitButton className=" ">View More Projects on GitHub</GitButton>
			</section>
		</div>
	);
};

export default Project;

const ButtonProject = ({ children }) => {
	return (
		<div className="my-4">
			<div className="group relative inline-flex items-center overflow-hidden rounded-full border-2 w-full border-cyan-400 px-12 py-2 text-lg font-medium text-cyan-400 hover:bg-gray-50 hover:text-white">
				<span className="duration-400 ease absolute left-0 top-1/2 block  h-0 w-full bg-cyan-400 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
				<span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
					{"➤"}
				</span>
				<span className="relative mx-auto">{children}</span>
			</div>
		</div>
	);
};

const GitButton = ({ children }) => {
	return (
		<Link
			href={"https://github.com/jeetvora331?tab=repositories"}
			target="_blank"
		>
			<div className="flex hover:shadow-2xl bg-stone-300 hover:bg-stone-800 w-fit px-4 py-2 my-4 rounded-lg font-medium hover:text-gray-100 text-stone-700 relative mx-auto">
				<AiFillGithub className="mr-2 text-2xl align-middle " /> {children}
			</div>
		</Link>
	);
};
