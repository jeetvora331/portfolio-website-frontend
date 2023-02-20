import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	return (
		<div>
			<header name="nav" className=" text-gray-400 bg-transparent">
				<div className=" mx-auto flex max-w-7xl flex-row items-center  p-2 md:p-5">
					<Link className="flex" to="nav">
						<div className="title-font mx-4 hidden items-center overflow-clip font-medium text-gray-900 md:flex">
							Jeet Vora
						</div>
						<div className="title-font flex items-center overflow-hidden font-medium text-gray-900">
							Logo
						</div>
					</Link>
					<nav className="ml-auto gap-5 flex items-center justify-center  text-base">
						<Link to="timeline" smooth={true} duration={500} offset={-50}>
							<div className=" hover:text-gray-900">Timeline</div>
						</Link>
						<Link to="project" smooth={true} duration={1000} offset={-30}>
							<div className=" hover:text-gray-900">Projects</div>
						</Link>
						<Link to="about" smooth={true} duration={1000} offset={-50}>
							<div className=" hover:text-gray-900">About</div>
						</Link>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
