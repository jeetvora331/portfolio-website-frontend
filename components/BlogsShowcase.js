/* eslint-disable @next/next/no-img-element */
import { blogStats, featuredBlogs } from "@/data/blogs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight, FaDev } from "react-icons/fa";
import Title from "./Elements/Title";

const BlogsShowcase = () => {
	return (
		<div className="bg-[#201c1c] border-t border-white/5" name="blogs">
			<div className="max-w-7xl mx-auto px-5 py-20">
				<div className="text-gray-100">
					<Title>
						<span className="text-gray-100">My Tech Blogs</span>
					</Title>
				</div>

				{/* Headline stat */}
				<Fade direction="up" triggerOnce>
					<div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center">
						<div className="bg-gradient-to-r from-[#A855F7] via-[#F05177] to-[#ffc700] bg-clip-text text-6xl md:text-7xl font-bold text-transparent font-['Satoshi']">
							{blogStats.totalReads}
						</div>
						<p className="text-lg text-gray-300">
							total reads across my Frontend deep-dives on dev.to
						</p>
					</div>
				</Fade>

				{/* Featured blogs */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{featuredBlogs.map((blog, i) => (
						<Link key={i} href={blog.link} target="_blank">
							<div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
								<div className="relative overflow-hidden">
									<img
										src={blog.image}
										alt={blog.title}
										className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
									/>
									<div
										className={`absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${blog.accent} px-4 py-1 text-sm font-bold text-white shadow-lg`}
									>
										<FaDev /> {blog.reads}
									</div>
								</div>
								<div className="p-7">
									<h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-cyan-300 transition">
										{blog.title}
									</h3>
									<p className="mt-3 text-gray-400">{blog.desc}</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{blog.tags.map((tag, j) => (
											<span
												key={j}
												className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-gray-300"
											>
												# {tag}
											</span>
										))}
									</div>
									<div className="mt-5 flex items-center gap-2 font-semibold text-cyan-400">
										Read article
										<FaArrowRight className="transition group-hover:translate-x-1" />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* CTA */}
				<div className="mt-10 flex justify-center">
					<Link href={blogStats.profile} target="_blank">
						<div className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-gray-100 hover:bg-white/10 transition">
							<FaDev className="text-2xl" /> Read all my blogs on dev.to
							<FaArrowRight />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogsShowcase;
