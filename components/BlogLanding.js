/* eslint-disable @next/next/no-img-element */
const BlogLanding = () => {
	return (
		<div>
			<div className="bg-slate-50 pb-36">
				<div className="h-96 w-auto  bg-center bg-auto bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80')]"></div>
				<div className="  mx-auto px-6 md:px-12 xl:px-32">
					<div className=" flex flex-col -mt-40 block rounded-lg  px-6 py-12 md:py-16 md:px-12 bg-white min-h-screen  max-w-3xl mx-auto shadow-2xl">
						<h1 className="text-left text-4xl text-slate-900 font-bold">
							Welcome To My Blogs
						</h1>
						{/* <h6>{blogs.body}</h6> */}
						Add Blog Card
						<Blog />
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

const Blog = () => {
	return (
		<div>
			<div>
				<div className="flex rounded-lg  shadow cursor-pointer hover:shadow-xl	my-5 ">
					<img
						src="https://picsum.photos/id/237/536/354"
						alt=""
						className=" object-cover w-1/4 rounded-l-lg hidden sm:block"
					/>
					<div className="h-auto w-full p-4">
						<div className="text-xl font-bold md:text-xl">
							Open Graph Images: Automatically Generate OG Images From Post
							Content
						</div>
						<div className="my-1"># HASHTAG</div>
						<div>3 min read </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogLanding;
