import { eduTimeline, expTimeline } from "@/data/timeline";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "./Elements/Title";

const TimeLine = () => {
	return (
		<div>
			<div name="timeline" className="bg-white max-w-7xl mx-auto px-2 sm:px-0 ">
				<Title>My Education Timeline</Title>

				<VerticalTimeline className="" lineColor="#A1A1AA">
					{eduTimeline.map((t, i) => {
						return (
							<VerticalTimelineElement
								key={i}
								className="vertical-timeline-element--work"
								contentStyle={{
									border: "3px solid #f1f5f9",
								}}
								// date={t.date}
								contentArrowStyle={{
									borderRight: "20px solid  #f1f5f9",
								}}
								icon={t.icon}
								iconStyle={{ ...t.iconStyle }}
							>
								{t.title ? (
									<React.Fragment>
										<h3 className="vertical-timeline-element-title text-2xl font-bold">
											{t.title}
										</h3>
										{t.subtitle && (
											<h4 className="vertical-timeline-element-subtitle text-lg">
												{t.subtitle}
											</h4>
										)}
										{t.location && (
											<h4 className="vertical-timeline-element-subtitle">
												{t.location}
											</h4>
										)}
										{t.grade && (
											<h4 className="vertical-timeline-element-subtitle">
												{t.grade}
											</h4>
										)}
										<div className="border-t-2 my-2"></div>
										{t.desc && (
											<h6 className="vertical-timeline-element-subtitle ">
												{t.desc}
											</h6>
										)}
										<h6 className="mt-4 text-gray-500">{t.date}</h6>
									</React.Fragment>
								) : undefined}
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
				{/* </div> */}
				{/* <div className="bg-white max-w-7xl mx-auto px-2 sm:px-0 "> */}
				{/* <h1 className="mx-auto text-center text-3xl font-extrabold  my-10 py- border-b-4 w-fit"> */}
				<Title>My Experience Timeline</Title>
				{/* </h1> */}

				<VerticalTimeline className="" lineColor="#A1A1AA">
					{expTimeline.map((t, i) => {
						return (
							<VerticalTimelineElement
								key={i}
								className="vertical-timeline-element--work"
								contentStyle={{
									border: "3px solid #f1f5f9",
								}}
								// date={t.date}
								contentArrowStyle={{
									borderRight: "20px solid  #f1f5f9",
								}}
								icon={t.icon}
								iconStyle={{ ...t.iconStyle }}
							>
								{t.title ? (
									<React.Fragment>
										<div className="vertical-timeline-element-title text-2xl font-bold flex items-center ">
											{t.title}
											{t.href && (
												<div className=" mx-2  text-gray-400">
													<Link href={t.href} className="flex " target="_blank">
														{/* <div>Visit</div> */}
														<FaExternalLinkAlt />
													</Link>
												</div>
											)}
										</div>

										{t.subtitle && (
											<h4 className="vertical-timeline-element-subtitle text-lg">
												{t.subtitle}
											</h4>
										)}
										{t.location && (
											<h4 className="vertical-timeline-element-subtitle">
												{t.location}
											</h4>
										)}
										{t.grade && (
											<h4 className="vertical-timeline-element-subtitle">
												{t.grade}
											</h4>
										)}
										<div className="border-t-2 my-2"></div>
										{t.desc && (
											<h6 className="vertical-timeline-element-subtitle ">
												{t.desc}
											</h6>
										)}
										<h6 className="mt-4 text-gray-500">{t.date}</h6>
									</React.Fragment>
								) : undefined}
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default TimeLine;
