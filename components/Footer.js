import { Fraunces } from "@next/font/google";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import HeadShake from "react-reveal/HeadShake";

const Footer = () => {
	return (
		<div className="">
			<HeadShake>
				<div>
					<div className="text-center bg-gray-200">
						<div className="mx-auto grid place-items-center  grid-flow-col h-20 justify-center text-3xl gap-5">
							<Icon
								VarIcon={AiFillGithub}
								text="GitHub"
								link={"https://github.com/jeetvora331"}
							/>
							<Icon
								VarIcon={AiFillLinkedin}
								text="Linkedin"
								link={"https://www.linkedin.com/jeetvora?_l=en_US"}
							/>
							<Icon
								VarIcon={AiFillMail}
								text="Email"
								link={"mailto:jeetvora3998@gmail.com"}
							/>
						</div>
						<div className="p-4 text-center text-gray-700 bg-slate-300">
							Made with ❤️ by Jeet in India
						</div>
					</div>
				</div>
			</HeadShake>
		</div>
	);
};

export default Footer;

const Icon = ({ VarIcon, text, link }) => {
	return (
		<Link href={`${link}`} target="_blank">
			<div className="flex group bg-white rounded-full ">
				<VarIcon className="p-1 h-10 w-10 rounded-full" />
				<h1 className="text-lg text-center font-bold my-auto max-w-0 overflow-hidden group-hover:pr-2 transition-all duration-500  group-hover:max-w-2xl ">
					{text}
				</h1>
			</div>
		</Link>
	);
};
