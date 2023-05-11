"use client";
import Link from "next/link";
import { useState } from "react";

// react icons
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = () => {
	const [nav, setNav] = useState(false);

	const navLinks = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "New and Interesting",
			link: "/newandinteresting",
		},
		{
			name: "About Us",
			link: "/about",
		},
		{
			name: "Recipe",
			link: "/recipe",
		},
		{
			name: "Contact Us",
			link: "/contact",
		},
	];

	return (
		<div className="max-w-[87.5rem] mx-auto p-4 flex justify-between bg-[#FFE6D0]">
			<h1 className="font-ssp font-bold text-4xl">
				<Link href="/">Doughnuts</Link>
			</h1>
			<nav
				className={`${
					nav ? "right-0 z-5" : "right-full"
				} absolute top-[4.5rem] bg-[#FFE6D0] duration-100 min-w-full`}>
				<ul>
					{navLinks.map((l) => (
						<li className="py-4 text-center" key={l.name}>
							<Link href={l.link} onClick={() => setNav(!nav)}>
								{l.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="border border-black h-fit rounded-md z-10"
				onClick={() => setNav(!nav)}>
				{nav ? <IoClose size={30} /> : <IoMenu size={30} />}
			</button>
		</div>
	);
};
