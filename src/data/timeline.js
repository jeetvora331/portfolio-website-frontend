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
		icon: <FaBriefcase className="" />,
		date: "2023",
		title: "Developer and Product Designer (Freelance)",
		subtitle: "The Alchemy Drip",
		location: "Bangalore(remote), Karnataka",
		grade: "HTML, CSS, Figma, Photoshop, TailwindCSS, React",

		desc: "Translated the User Interface into pixel perfect robust ReactJS components, ensuring optimal performance and responsiveness. Designed end-to-end user interface with industry standard wireframing tools like Figma and Adobe XD. Conducted regular code maintenance and effective debugging on regular basis to ensure smooth functionality",
		iconStyle: {
			color: "black",
			background: "#F472B6",
			// background: "#EC4899",
		},
	},
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
		title: "Software Developer (Intern)",
		subtitle: "Brown Wolf Studio Private Limited",
		location: "Rajkot, Gujarat",
		grade: "HTML, CSS, JavaScript, ReactJS, Python, Git, GitHub",

		desc: "Implemented code additions and modifications to the config and utils file of the application, Developed a responsive and config driven UI using HTML, CSS, and ReactJS. Accelerated automated filtering of Text based documents with Python, which significantly reduced man hours",
		iconStyle: {
			color: "black",
			background: "#F472B6",
			// background: "#EC4899",
		},
	},
	{
		href: "https://pdeu.ac.in/",
		icon: <FaBriefcase className="" />,
		date: "2021",
		title: "Website Designer & Developer",
		subtitle: "Pandit Deendayal Energy University",
		location: "Gandhinagar, Gujarat",
		grade: "ReactJS, Styled-Components, Adobe XD, Photoshop, Color Theory",

		desc: "Designed User Experience where a new visitor can reach any section within 3 clicks making the process seamless and efficient. Developed User Interface which aligns with the University mission and goals, positively impacting 120,000 monthly visitors",
		iconStyle: {
			color: "black",
			background: "#F472B6",
			// background: "#EC4899",
		},
	},
	{
		icon: <FaHammer className="" />,
		date: "2021",
		title: "Design Month Challenge",
		subtitle: "TopCoder",
		location: "Online",
		// grade: "(CPI : 8.64)",

		desc: "Participated in few design challenges based on Web Design and UX Design. Worked on various projects such as UX design of digital poster, Theme Based 404 error page design and Merch design.Few Design got selected and approved, I received swags like Tees and stickers.",
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
		subtitle: "Pandit Deendayal Energy University",
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
