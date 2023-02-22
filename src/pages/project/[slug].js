import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import axios, { Axios } from "axios";
import { createClient } from "next-sanity";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PortableText from "react-portable-text";

// import client from "../../client";

const ProjectPage = ({ project }) => {
	const serializer = {
		types: {
			mainImage: (props) => (
				<figure>
					<img
						src={urlFor(props.node.asset).width(600).url()}
						alt={props.node.alt}
					/>

					<figcaption>{props.node.caption}</figcaption>
				</figure>
			),
		},
	};
	const router = useRouter();
	const data = JSON.stringify(project.body, null, 2);
	// console.log("project.hashtag", project.mainImage); // trial area
	return (
		<div>
			<div className="bg-slate-50 pb-36">
				<div className="h-96 w-screen bg-center bg-auto bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80')]"></div>
				<div className="  mx-auto px-6 md:px-12 xl:px-32">
					<div className=" flex flex-col -mt-40 block rounded-lg  px-6 py-12 md:py-16 md:px-12 bg-white min-h-screen  max-w-3xl mx-auto shadow-2xl">
						<h1 className="text-left text-4xl text-slate-900 font-bold">
							{project.title}
						</h1>
						<div className="my-8 flex flex-wrap gap-2">
							{project.hashtag.map((tag, index) => (
								<h4
									key={index}
									className=" bg-stone-100 w-fit px-3 rounded-full font-medium text-gray-600 "
								>
									# {tag}
								</h4>
							))}
						</div>

						{/* <PortableText
							// Pass in block content straight from Sanity.io
							content={project.body}
							projectId="3yxz7vu9"
							dataset="production"
							// Optionally override marks, decorators, blocks, etc. in a flat
							// structure without doing any gymnastics
							serializers={{
								h1: (props) => <h1 style={{ color: "red" }} {...props} />,
								li: ({ children }) => (
									<li className="special-list-item">{children}</li>
								),
							}}
						/> */}
						<div>
							{" "}
							<PortableText value={project.body} />
							<hr />
						</div>
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

export async function getServerSideProps(context) {
	const { slug = "" } = context.params; // setting default slug to ""
	// console.log("slug :>> ", slug);
	const client = createClient({
		projectId: "3yxz7vu9",
		dataset: "production",
		apiVersion: "2022-03-25",
		useCdn: false,
	});
	const project = await client.fetch(
		` *[_type == "project" && slug.current == $slug][0]`,
		{ slug }
	);
	return {
		props: {
			project,
		},
	};
}

// export async function getServerSideProps(context) {
// 	const client = createClient({
// 		projectId: "3yxz7vu9",
// 		dataset: "production",
// 		apiVersion: "2022-03-25",
// 		useCdn: false,
// 	});
// 	const project = await client.fetch(`*[_type == "project"]`);
// 	return {
// 		props: {
// 			project,
// 		},
// 	};
// }
