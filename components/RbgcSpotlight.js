/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight, FaExternalLinkAlt, FaPalette } from "react-icons/fa";
import Title from "./Elements/Title";

const stack = ["Next.js", "TypeScript", "Supabase", "Styled Components"];

const highlights = [
	"Designed AND built end-to-end — solo (UI/UX + engineering)",
	"Custom 8-bit retro design system, built from scratch",
	"SSG + pre-rendering for fast loads and strong SEO",
	"Events, games catalog & community, powered by Supabase",
];

const RbgcSpotlight = () => {
	return (
		<div className="bg-[#201c1c] border-t border-white/5" name="rbgc">
			<div className="max-w-7xl mx-auto px-5 py-20">
				<div className="text-gray-100">
					<Title>
						<span className="text-gray-100">Spotlight: Rajkot Board Games Club</span>
					</Title>
				</div>
				<p className="mx-auto max-w-2xl text-center text-base md:text-lg text-gray-400">
					A live community platform I own entirely — from the first Figma frame
					to production. The one project that proves I&apos;m a designer and an
					engineer.
				</p>

				<div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Visual */}
					<Fade direction="left" triggerOnce>
						<Link href="https://rbgc.info" target="_blank">
							<div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-cyan-400/40 shadow-2xl">
								<img
									src="/images/rbgc-hero.png"
									alt="Rajkot Board Games Club — rbgc.info"
									className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105 md:h-96"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#201c1c] via-transparent to-transparent" />
								<div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 font-semibold text-gray-900">
									rbgc.info <FaExternalLinkAlt className="text-sm" />
								</div>
							</div>
						</Link>
					</Fade>

					{/* Detail */}
					<Fade direction="right" triggerOnce>
						<div className="flex flex-col gap-6">
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-sm font-semibold text-fuchsia-300">
								<FaPalette /> Designed + Engineered solo
							</div>
							<ul className="flex flex-col gap-3">
								{highlights.map((h, i) => (
									<li
										key={i}
										className="flex items-start gap-3 text-gray-300"
									>
										<span className="mt-1 text-cyan-400">▹</span>
										<span>{h}</span>
									</li>
								))}
							</ul>
							<div className="flex flex-wrap gap-2">
								{stack.map((s, i) => (
									<span
										key={i}
										className="rounded-md bg-white/10 px-3 py-1 text-sm font-medium text-gray-200"
									>
										{s}
									</span>
								))}
							</div>
							<div className="flex flex-wrap gap-4 pt-2">
								<Link href="https://rbgc.info" target="_blank">
									<div className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-gray-900 hover:bg-cyan-300 transition">
										Visit live site <FaArrowRight />
									</div>
								</Link>
								<Link href="/project/rajkot-board-games-club" target="_blank">
									<div className="rounded-full border border-white/15 px-7 py-3 font-semibold text-gray-100 hover:bg-white/10 transition">
										Project overview
									</div>
								</Link>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default RbgcSpotlight;
