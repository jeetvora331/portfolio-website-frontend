import React from "react";
import { FaFont, FaImage } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineDraw } from "react-icons/md";

const resource = [
	{
		name: "All in One toolbox",
		link: "https://10015.io/",
		icon: "",
	},
	{
		name: "Free Gradients",
		link: "https://mdbootstrap.com/docs/standard/tools/design/gradients/",
		icon: <FaImage />,
	},
	{
		name: "ExcaliDraw",
		link: "https://excalidraw.com/",
		icon: <MdOutlineDraw />,
	},
	{
		name: "Free Fonts",
		link: "https://befonts.com/?filter=featured",
		icon: <FaFont />,
	},
	{
		name: "The color of anything",
		link: "https://picular.co/",
		icon: "",
	},
	{
		name: "Cool SVG Background ",
		link: "https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/",
		icon: <FiPenTool />,
	},
];

export default resource;
