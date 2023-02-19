import axios, { Axios } from "axios";
import React, { useState } from "react";
import blogs from "./blogs";

const BlogPostPage = () => {
	const [data, setData] = useState({});
	const getData = async () => {
		const resp = await axios.get(
			"https://jsonplaceholder.typicode.com/posts/1"
		);
		setData(resp.data);
	};
	getData();

	return (
		<div>
			<div className="bg-slate-50 pb-36">
				<div className="h-96 w-screen bg-center bg-auto bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80')]"></div>
				<div className="  mx-auto px-6 md:px-12 xl:px-32">
					<div className=" flex flex-col -mt-40 block rounded-lg  px-6 py-12 md:py-16 md:px-12 bg-white min-h-screen  max-w-3xl mx-auto shadow-2xl">
						<h1 className="text-left text-4xl text-slate-900 font-bold">
							{data.title}
						</h1>
						<div className="my-8 flex flex-wrap gap-2">
							{blogs.hashtags.map((tag, index) => (
								<h4
									key={index}
									className=" bg-stone-100 w-fit px-3 rounded-full font-medium text-gray-600 "
								>
									# {tag}
								</h4>
							))}
						</div>
						<h6>{blogs.body}</h6>
						asdasdfasd
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

export default BlogPostPage;
