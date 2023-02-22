import React from "react";
import Title from "./Elements/Title";

const BlogSection = () => {
	const text =
		"Open Graph Images: Automatically Generate OG Images From Post Content";
	return (
		<div className="max-w-7xl md:mx-auto mx-5 ">
			<Title>My Blogs</Title>
			<p className="desc">
				Exploring the world of Tech, I came across some wonderful problems, even
				more amazing solutions and some tips and tricks. I feel to pen these
				things down.
			</p>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-5">
				<Blog />
				<Blog text={text} />
				<Blog text={text} />
				<Blog />
				<Blog />
			</div>
			<div className=" py-10 text-xl">View More {">"}</div>
		</div>
	);
};

const Blog = ({ text }) => {
	return (
		<div className="">
			<div>
				<div className="flex rounded-lg bg-white drop-shadow cursor-pointer duration-300 hover:scale-105  hover:shadow-lg  ">
					<img
						src="https://picsum.photos/id/237/536/354"
						alt="img"
						className=" object-cover w-1/4 rounded-l-lg hidden sm:block"
					/>
					<div className=" w-full p-4 flex-1">
						<div className="text-base font-medium md:text-lg ">
							Open Graph Images: Automatically Generate OG Images From Post
							Content
							<h1>{text}</h1>
						</div>
						<div className="my-1"># HASHTAG</div>
						<div>3 min read </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
