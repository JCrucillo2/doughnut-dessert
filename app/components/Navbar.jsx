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
		<div className="bg-secondary">
			<div className="max-w-[87.5rem] mx-auto p-4 flex justify-between  items-center">
				<h1 className="font-ssp text-beige font-bold text-4xl">
					<Link href="/">Doughnuts</Link>
				</h1>
				<nav
					className={`${
						nav ? "right-0 z-5" : "right-full"
					} absolute top-[4.5rem] bg-secondary md:bg-transparent text-beige transition-[right] duration-300 w-full md:static`}>
					<ul className="md:flex justify-end gap-4">
						{navLinks.map((l) => (
							<li
								className="py-4 md:py-0 text-center font-bold md:font-normal"
								key={l.name}>
								<Link
									className="hover:underline"
									href={l.link}
									onClick={() => setNav(!nav)}>
									{l.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<button
					className="text-beige h-fit z-10 md:hidden"
					onClick={() => setNav(!nav)}>
					{nav ? <IoClose size={30} /> : <IoMenu size={30} />}
				</button>
			</div>
		</div>
	);
};
