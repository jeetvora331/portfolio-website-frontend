/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaNpm } from "react-icons/fa";
import { Shimmer } from "shimmer-trace";
import Title from "./Elements/Title";

const sampleUser = {
	name: "Ada Lovelace",
	role: "Frontend Engineer",
	bio: "Loves clean loading states and zero layout shift. Builds delightful, fast UIs.",
	avatar:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
};

const UserCard = ({ user }) => {
	return (
		<div className="w-[320px] rounded-2xl bg-[#2a2422] border border-white/10 p-5 shadow-xl">
			<div className="flex items-center gap-4">
				<img
					src={user.avatar}
					alt={user.name}
					className="h-16 w-16 rounded-full object-cover"
				/>
				<div className="flex flex-col gap-1">
					<h3 className="text-lg font-bold text-gray-100">{user.name}</h3>
					<p className="text-sm text-cyan-400">{user.role}</p>
				</div>
			</div>
			<p className="mt-4 text-sm leading-relaxed text-gray-300">{user.bio}</p>
			<div className="mt-5 flex gap-3">
				<button className="flex-1 rounded-full bg-cyan-400 py-2 text-sm font-semibold text-gray-900">
					Follow
				</button>
				<button className="flex-1 rounded-full border border-white/15 py-2 text-sm font-semibold text-gray-200">
					Message
				</button>
			</div>
		</div>
	);
};

const codeSnippet = `import { Shimmer } from 'shimmer-trace';

<Shimmer loading={loading}>
  <UserCard user={user} />
</Shimmer>`;

const features = [
	"Traces your real DOM — pixel-perfect skeleton, no hand-built placeholders",
	"Zero Cumulative Layout Shift (CLS)",
	"One-line wrap, framework-native React",
	"Tunable animations: wave, pulse, shine, glow, gradient",
];

const ShimmerDemo = () => {
	const [loading, setLoading] = useState(true);

	// Auto-cycle the loading state so the shimmer is visibly "in action".
	useEffect(() => {
		const id = setInterval(() => setLoading((l) => !l), 2200);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="bg-[#201c1c]" name="package">
			<div className="max-w-7xl mx-auto px-5 py-20">
				<div className="text-gray-100">
					<Title>
						<span className="text-gray-100">shimmer-trace</span>
					</Title>
				</div>
				<p className="mx-auto max-w-2xl text-center text-base md:text-lg text-gray-400">
					My open-source npm package. A React skeleton loader that traces your
					real UI and paints a pixel-perfect shimmer over it — live demo below,
					it&apos;s the actual package running on this page.
				</p>
				<div className="mt-4 flex justify-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-300">
						<FaNpm className="text-xl" /> 1,000+ downloads on npm
					</span>
				</div>

				<div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Live demo */}
					<div className="flex flex-col items-center gap-6">
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
							<Shimmer
								loading={loading}
								animation="wave"
								baseColor="#3a3331"
								highlightColor="#5c524f"
								speed={1.4}
							>
								<UserCard user={sampleUser} />
							</Shimmer>
						</div>
						<div className="flex items-center gap-4">
							<button
								onClick={() => setLoading((l) => !l)}
								className="rounded-full bg-cyan-400 px-6 py-2 font-semibold text-gray-900 hover:bg-cyan-300 transition"
							>
								{loading ? "Show content" : "Show skeleton"}
							</button>
							<span className="flex items-center gap-2 text-sm text-gray-400">
								<span
									className={`h-2 w-2 rounded-full ${
										loading ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
									}`}
								></span>
								{loading ? "loading…" : "loaded"}
							</span>
						</div>
					</div>

					{/* Pitch + code */}
					<div className="flex flex-col gap-6">
						<pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#15120f] p-5 text-sm leading-relaxed text-gray-200">
							<code>{codeSnippet}</code>
						</pre>
						<ul className="flex flex-col gap-3">
							{features.map((f, i) => (
								<li key={i} className="flex items-start gap-3 text-gray-300">
									<span className="mt-1 text-cyan-400">▹</span>
									<span>{f}</span>
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-4 pt-2">
							<Link
								href="https://www.npmjs.com/package/shimmer-trace"
								target="_blank"
							>
								<div className="flex items-center gap-2 rounded-full bg-[#cb3837] px-6 py-2 font-semibold text-white hover:opacity-90 transition">
									<FaNpm className="text-2xl" /> View on npm
								</div>
							</Link>
							<Link
								href="https://jeetvora331.github.io/shimmer-trace/"
								target="_blank"
							>
								<div className="rounded-full border border-cyan-400 px-6 py-2 font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition">
									Live docs & playground
								</div>
							</Link>
							<Link
								href="https://github.com/jeetvora331/shimmer-trace"
								target="_blank"
							>
								<div className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-2 font-semibold text-gray-200 hover:bg-white/10 transition">
									<AiFillGithub className="text-xl" /> Source
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerDemo;
