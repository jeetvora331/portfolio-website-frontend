import React from "react";

const NavBar = () => {
	return (
		<div>
			<header className=" text-gray-600">
				<div className=" mx-auto flex max-w-7xl flex-row items-center  p-2 md:p-5">
					<div className="title-font mx-4 hidden items-center overflow-clip font-medium text-gray-900 md:flex">
						Jeet Vora
					</div>
					<div className="title-font flex items-center overflow-hidden font-medium text-gray-900">
						Logo
					</div>
					<nav className="ml-auto gap-5 flex items-center justify-center  text-base">
						<a className=" hover:text-gray-900">FirstLink</a>
						<a className=" hover:text-gray-900">Second Link</a>
						<a className=" hover:text-gray-900">Third Link</a>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
