import { useState } from "react";
const Geom = () => {
	const [shapes, setShapes] = useState([]);

	const generateShapes = () => {
		const shapesArray = [];
		for (let i = 0; i < 20; i++) {
			const randomShape = Math.floor(Math.random() * 5) + 1;
			let shapeClass = "";
			switch (randomShape) {
				case 1:
					shapeClass = "quad-circle-1";
					break;
				case 2:
					shapeClass = "quad-circle-2";
					break;
				case 3:
					shapeClass = "quad-circle-3";
					break;
				case 4:
					shapeClass = "quad-circle-4";
					break;
				case 5:
					shapeClass = "circle";
					break;
				default:
					break;
			}
			shapesArray.push(<div key={i} className={`shape ${shapeClass}`}></div>);
		}
		setShapes(shapesArray);
        shapesArray
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="w-4/5 md:w-2/3 xl:w-1/2">
				<div className="grid grid-cols-4 gap-4 bg-black rounded-lg shadow-lg p-5">
					{shapes}
				</div>
				<button
					onClick={generateShapes}
					className="bg-black text-white rounded-md px-4 py-2 mt-6 font-medium hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300 ease-in-out"
				>
					Generate
				</button>
			</div>
		</div>
	);
};

export default Geom;
