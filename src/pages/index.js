import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import About from "components/About";
import BlogLanding from "components/BlogLanding";
import BlogPostPage from "components/BlogPostPage";
import BlogSection from "components/BlogSection";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MouseCircle from "components/MouseCircle";
import NavBar from "components/NavBar";
import OpenSource from "components/OpenSource";
import Project from "components/Project";
import Publications from "components/Publications";
import Resources from "components/Resources";
import Toolbox from "components/Toolbox";
import Head from "next/head";
import Image from "next/image";
import TimeLine from "../../components/TimeLine";

// CMS
import { createClient } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ project }) {
	// console.log("project :>> ", project);
	return (
		<>
			<Head>
				<title>Jeet Vora</title>
				{/* edit below */}
				<meta
					name="description"
					content="Frontend Developer Portfolio Website"
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
					<Toolbox />
					<TimeLine />

					<Project />
					<OpenSource />
					<Publications />
					{/* <BlogPostPage /> */}
					{/* <BlogLanding /> */}
					{/* <BlogSection /> */}

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
