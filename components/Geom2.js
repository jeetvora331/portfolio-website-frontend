import React, { useEffect, useState } from "react";

const Geom2 = () => {
	const shapes = [
		"quad-circle-1",
		"quad-circle-2",
		"quad-circle-3",
		"quad-circle-4",
		"triangle-1",
		"triangle-2",
		"triangle-3",
		"triangle-4",
		"circle",
	];
	// const colors = ["#01d2fd", "#ffc700", "#fe9f12", "#06d0c7"];
	const colors = ["#01d2fd", "#A855F7", "#ffc700", " #F05177"];

	// const generatePattern = () => {
	// 	const boxes = document.querySelectorAll(".sp-container div");
	// 	boxes.forEach((box, index) => {
	// 		box.className = "";
	// 		box.classList.remove("visible");
	// 		box.classList.add("invisible");
	// 		let i = Math.floor(Math.random() * shapes.length);
	// 		let j = Math.floor(Math.random() * colors.length);
	// 		box.classList.add(shapes[i]);
	// 		box.classList.add("visible");
	// 		box.style.backgroundColor = colors[j];
	// 		box.style.transitionDelay = `${index * 50}ms`; // add delay based on index
	// 		box.classList.remove("invisible");
	// 	});
	// };

	const generatePattern = () => {
		const boxes = document.querySelectorAll(".sp-container div");
		boxes.forEach((box, index) => {
			let i = Math.floor(Math.random() * shapes.length);
			let j = Math.floor(Math.random() * colors.length);
			box.className = "";
			box.classList.add(shapes[i]);
			box.style.backgroundColor = colors[j];
			setTimeout(() => {
				box.classList.add("visible");
			}, index * 30); // add a delay based on the index of the div element
		});
	};

	const handleClick = () => {
		const boxes = document.querySelectorAll(".sp-container div");
		boxes.forEach((box, index) => {
			setTimeout(() => {
				box.classList.remove("visible");
			}, 20 * index);
		});
		setTimeout(() => {
			generatePattern();
		}, 600); // wait for the transition effect to finish before generating a new pattern
	};

	useEffect(() => {
		generatePattern();
	}, []);

	return (
		<div className="relative z-50">
			<div
				className=" scale-75  w-fit p-0 ml-auto m-0 "
				onMouseEnter={handleClick}
			>
				<div className="sp-container">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Geom2;
