import { projects } from "@/data/projects";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

const ProjectPage = ({ content }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>Magic Comments</title>
				{/* edit below */}
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/line3.png" />
			</Head>
			<div className="bg-slate-50 pb-36">
				<div className="h-96 w-screen bg-center bg-auto bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80')]"></div>
				<div className="  mx-auto px-6 md:px-12 xl:px-32">
					<div className=" flex flex-col -mt-40 block rounded-lg  px-6 py-12 md:py-16 md:px-12 bg-white min-h-screen  max-w-3xl mx-auto shadow-2xl">
						<h1 className="text-left text-4xl text-slate-900 font-bold">
							Magic Comments
						</h1>
						<div className="my-8 flex flex-wrap gap-2">
							{projects[2].hashtags.map((tag, index) => (
								<h4
									key={index}
									className=" bg-stone-100 w-fit px-3 rounded-full font-medium text-gray-600 "
								>
									# {tag}
								</h4>
							))}
						</div>

						<div className="flex gap-6">
							<GitButton>Checkout GitHub Repository</GitButton>
							<LiveDemoButton> 🚀 Checkout Live Demo</LiveDemoButton>
						</div>
						<article className="prose lg:prose-lg">
							<ReactMarkdown>{content}</ReactMarkdown>
						</article>

						<br />
						<div className="mt-auto pt-10 text-slate-500 text-2xl ">
							<div className="inline-block mr-2">Author:</div>
							<div className="inline-block text-black font-bold">Jeet Vora</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;

const GitButton = ({ children }) => {
	return (
		<Link
			href={"https://github.com/jeetvora331/magic-comments"}
			target="_blank"
		>
			<div className="flex hover:shadow-2xl bg-stone-300 hover:bg-stone-800 w-fit px-4 py-2 my-4 rounded-full font-medium hover:text-gray-100 text-stone-700">
				<AiFillGithub className="mr-2 text-2xl align-middle " /> {children}
			</div>
		</Link>
	);
};

const LiveDemoButton = ({ children }) => {
	return (
		<Link href={"https://magic-comments.vercel.app/"} target="_blank">
			<div className="flex hover:shadow-2xl bg-emerald-300 hover:bg-stone-800 w-fit px-4 py-2 my-4 rounded-full font-medium hover:text-gray-100 text-stone-700">
				{children}
			</div>
		</Link>
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "/src/data/magic-comments.md");
	const fileContents = fs.readFileSync(filePath, "utf8");

	return {
		props: {
			content: fileContents,
		},
	};
}
