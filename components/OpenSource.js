import Link from "next/link";
// import Flash from "react-reveal/Flash";
import openSource from "../src/data/openSource";
import Title from "./Elements/Title";

const OpenSource = () => {
	return (
		<div>
			<section className="body-font text-gray-600 max-w-7xl mx-auto">
				<div className="mx-auto pb-20  px-4 md:px-0">
					<div className="mb-5 flex w-full flex-col text-center ">
						{/* <Flash> */}
						<h1 className="title-font mb-0 text-2xl font-medium text-gray-900 sm:text-3xl">
							<Title>Open Source Contributions</Title>
						</h1>
						{/* </Flash> */}
						<p className=" lg:w-2/3 desc">My significant contribution</p>
					</div>
					<div className="flex flex-wrap -m-5 ">
						{/* component below */}
						{openSource.map((contri, index) => {
							return (
								<div
									key={index}
									className="w-full  md:w-1/2 px-5 cursor-pointer my-2"
								>
									<Link href={contri.link} target="_blank">
										<div className="flex h-full rounded-lg border shadow-md relative z-20 bg-white border-gray-200  hover:s-hover">
											<img
												alt="team"
												className="w-1/5 flex-shrink-0 object-contain  overflow-hidden  "
												src={contri.img}
											/>
											<div className="flex-grow p-4 border-l">
												<h2 className="title-font font-semibold font-medium text-gray-900 md:text-lg">
													{contri.title}
												</h2>
												<p className="text-gray-500">{contri.desc}</p>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default OpenSource;

const OSCard = (second) => {
	return (
		<div className="w-full  md:w-1/2 p-5 cursor-pointer ">
			<div className="flex h-full rounded-lg border border-gray-200 ">
				<img
					alt="team"
					className="w-1/5 flex-shrink-0 object-contain  overflow-hidden  "
					src="https://miro.medium.com/max/805/1*aUSZsGFCMPNYCkQygs4aGQ.jpeg"
				/>
				<div className="flex-grow p-4 border-l">
					<h2 className="title-font font-medium text-gray-900 md:text-lg">
						matplotlib (merged)
					</h2>
					<p className="text-gray-500">
						I faced an issue while plotting graph on light color on white
						background,
					</p>
				</div>
			</div>
		</div>
	);
};
