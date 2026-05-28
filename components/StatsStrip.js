import { Fade } from "react-awesome-reveal";
import { FaBriefcase, FaFeatherAlt, FaNpm } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const creds = [
	{
		icon: <FaBriefcase />,
		top: "Software Engineer",
		bottom: "@ Nivoda — London (Remote)",
	},
	{
		icon: <FaNpm className="text-2xl" />,
		top: "shimmer-trace",
		bottom: "my npm package · 1,000+ downloads",
	},
	{
		icon: <FaFeatherAlt />,
		top: "330k+ reads",
		bottom: "across my dev.to articles",
	},
	{
		icon: <HiAcademicCap />,
		top: "IEEE-published",
		bottom: "research paper + design patent",
	},
];

const StatsStrip = () => {
	return (
		<div className="bg-[#201c1c] border-t border-white/5">
			<div className="max-w-7xl mx-auto px-5 py-10">
				<Fade direction="up" triggerOnce cascade damping={0.1}>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{creds.map((c, i) => (
							<div
								key={i}
								className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm hover:border-cyan-400/40 transition duration-300"
							>
								<span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-cyan-400/10 text-xl text-cyan-400">
									{c.icon}
								</span>
								<div className="min-w-0">
									<div className="truncate font-bold text-gray-100">
										{c.top}
									</div>
									<div className="text-sm text-gray-400">{c.bottom}</div>
								</div>
							</div>
						))}
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default StatsStrip;
