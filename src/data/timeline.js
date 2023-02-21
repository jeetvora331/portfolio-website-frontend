import {
	FaBriefcase,
	FaGitAlt,
	FaHammer,
	FaUserGraduate,
} from "react-icons/fa";
import { FcBriefcase, FcGraduationCap } from "react-icons/fc";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { SiUdemy } from "react-icons/si";

const eduTimeline = [
	{
		icon: <FaUserGraduate className=" " />,
		date: "2021-2022",
		title: "PG Diploma in Computer Application ",
		subtitle: "Maharaja Sayajirao University",
		location: "Vadodara, Gujarat",
		grade: "(87.92%)",
		desc: "Courses: Web Development, Python , Object Oriented Programming, ML and AI",
		iconStyle: {
			color: "black",
			background: "#22D3EE",
		},
	},
	{
		icon: <FaUserGraduate className="" />,
		date: "2017-2021",
		title: "B.Tech in Electrical Engineering ",
		subtitle: "Pandit Deendayal Petroleum University ",
		location: "Gandhinagar, Gujarat",
		grade: "(CPI : 8.64)",

		desc: "Positions of Responsibilities: General Secretary of Electrical Students and Professional's Association, Design Head Of Robotic and Automation Club (Cretus), Founder-Core Member of Society of Math  ",
		iconStyle: {
			color: "black",
			background: "#22D3EE",
		},
	},

	// { icon: starIcon },
];

const expTimeline = [
	{
		// Udemy
		href: "https://www.udemy.com/course/python-weekend-bootcamp/",
		icon: <SiUdemy className=" " />,
		date: "2022",
		title: "Udemy Course Instructor",
		subtitle: "Python Weekend Bootcamp",
		// location: "Vadodara, Gujarat",
		grade: "5 Star Instrutor",
		desc: "Designed and Created the Curriculum for a 3-Day Beginner's Python Bootcamp",
		iconStyle: {
			color: "black",
			background: "#A855F7",
		},
	},
	{
		icon: <FaBriefcase className="" />,
		date: "2021",
		title: "Website and App Designer",
		subtitle: "Pandit Deendayal Petroleum University",
		location: "Gandhinagar, Gujarat",
		// grade: "(CPI : 8.64)",

		desc: "2 Month of Internship where I designed the complete UI and UX of the WebApp in AdobeXD and was able to successfully develop it in React ",
		iconStyle: {
			color: "black",
			background: "#F472B6",
			// background: "#EC4899",
		},
	},
	//GIT
	// {
	// 	icon: <FaGitAlt className="" />,
	// 	date: "2021",
	// 	title: "matplotlib  ",
	// 	subtitle: "Hacktoberfest Contribution",
	// 	// location: "Gandhinagar, Gujarat",
	// 	// grade: "(CPI : 8.64)",

	// 	desc: "Contributed to ",
	// 	iconStyle: {
	// 		color: "black",
	// 		background: "#10B981",
	// 	},
	// },
	{
		icon: <FaHammer className="" />,
		date: "2020",
		title: "2nd RunnerUp, Lets Hack COVID-19 Hackathon",
		subtitle: "Pandit Deendayal Petroleum University",
		location: "Gandhinagar, Gujarat",
		// grade: "(CPI : 8.64)",

		desc: "Secured this position on Automatic Sanitizer Dispenser we also derived a research paper from the project and published it at IEEE Conference ",
		iconStyle: {
			color: "black",
			background: "#10B981",
		},
	},
	{
		icon: <FaBriefcase className="" />,
		date: "2020",
		title: "Artificial Intelligence Training+Internship",
		// subtitle: "CodeQuest, Hydrabad (Online) ",
		location: "CodeQuest, Hydrabad (Online) ",
		// grade: "(CPI : 8.64)",

		desc: "CodeQuest, Hyderabad (Online Training + Internship) Trained in Python, and worked on edge detection in openCV",
		iconStyle: {
			color: "black",
			background: "#F472B6",
		},
	},
	{
		icon: <FaHammer className="" />,
		date: "2019",
		title: "Best Prototype Winner at Lets Hack 2.0",
		subtitle: "Pandit Deendayal Petroleum University",
		location: "Gandhinagar, Gujarat",
		grade: "(This Round was part of Smart India Hackathon)",

		desc: "Won this award on automatic solar panel cleaner prototype!",
		iconStyle: {
			color: "black",
			background: "#10B981",
		},
	},
];

export { eduTimeline, expTimeline };
