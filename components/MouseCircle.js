import Image from "next/image";
import React, { useEffect, useState } from "react";
import rect from "../public/rect.svg";

function MouseCircle() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener("mousemove", onMouseMove);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<div className="fixed w-[calc(100vw-18px)] h-screen z-0  hidden lg:block">
			<div
				// className="absolute animate-pulse opacity-30  h-96 w-80  pointer-events-none bg-gradient-to-r from-pink-300  via-purple-300 to-indigo-400"
				className="absolute animate-pulse opacity-30  pointer-events-none"
				style={{
					// background: `radial-gradient(circle at ${position.x}px ${position.y}px, #F472B6, #EC4899)`,
					transform: `translate(-50%, -50%)`,
					top: position.y,
					left: position.x,
					zIndex: 1,
					animationDuration: "2s",
				}}
			>
				<Image src={rect} />
			</div>
		</div>
	);
}

export default MouseCircle;
