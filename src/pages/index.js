import About from "components/About";
import BlogsShowcase from "components/BlogsShowcase";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MouseCircle from "components/MouseCircle";
import NavBar from "components/NavBar";
import OpenSource from "components/OpenSource";
import Project from "components/Project";
import Publications from "components/Publications";
import RbgcSpotlight from "components/RbgcSpotlight";
import Resources from "components/Resources";
import ShimmerDemo from "components/ShimmerDemo";
import StatsStrip from "components/StatsStrip";
import Toolbox from "components/Toolbox";
import Head from "next/head";
import TimeLine from "../../components/TimeLine";

// CMS
import { createClient } from "next-sanity";

export default function Home({ project }) {
	// console.log("project :>> ", project);
	return (
		<>
			<Head>
				<title>Jeet Vora</title>
				{/* edit below */}
				<meta
					name="description"
					content="Jeet Vora — Frontend Engineer & Designer. Open-source author of shimmer-trace (npm), 330k+ blog reads on dev.to, shipping React/Next.js/TypeScript at scale."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="keywords"
					content="Jeet, Vora, Jeet Vora, portfolio, skills, projects, frontend , software, engineer ,designer"
				/>
				<meta name="author" content="Jeet Vora" />

				<link rel="icon" href="/line3.png" />
			</Head>
			<div className="">
				<div className="relative">
					<NavBar />
					<MouseCircle />
					<Hero />
					<StatsStrip />
					<ShimmerDemo />
					<BlogsShowcase />
					<RbgcSpotlight />
					<Toolbox />
					<TimeLine />
					<Project />
					<OpenSource />
					<Publications />
					<Resources />
					<About />
					<Footer />
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "3yxz7vu9",
		dataset: "production",
		apiVersion: "2022-03-25",
		useCdn: false,
	});
	const project = await client.fetch(`*[_type == "project"]`);
	return {
		props: {
			project,
		},
	};
}
