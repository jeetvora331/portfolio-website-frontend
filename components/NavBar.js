import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import logo from "/public/line3.png";

const NavBar = () => {
	const wh = 30;
	return (
		<div>
			<header
				name="nav"
				className=" text-gray-400 bg-[#201c1c] backdrop-blur-xl"
			>
				<div className=" mx-auto flex max-w-7xl flex-row items-center  p-2 md:p-3 ">
					<Link className="flex" to="nav">
						<div className="title-font mx-1 hidden items-center overflow-clip font-bold uppercase text-3xl   text-white  md:flex">
							JV
						</div>
						<div className="title-font flex items-center overflow-hidden font-medium text-gray-900">
							<Image src={logo} width={wh} height={wh} alt="logo" />
						</div>
					</Link>
					<nav className="ml-auto gap-5 flex items-center justify-center text-white text-sm uppercase tracking-wider  ">
						<Link to="timeline" smooth={true} duration={500} offset={-50}>
							<div className=" hover:text-cyan-300">Timeline</div>
						</Link>
						<Link to="project" smooth={true} duration={1000} offset={-30}>
							<div className=" hover:text-cyan-300">Projects</div>
						</Link>
						<Link to="about" smooth={true} duration={1000} offset={-50}>
							<div className=" hover:text-cyan-300">About</div>
						</Link>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
