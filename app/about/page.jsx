"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				className="m-4 bg-background rounded-md h-full">
				<h2 className="font-ssp text-3xl font-bold rounded-t-md p-4 bg-secondary text-beige text-center">
					About Us
				</h2>
				<Image
					className="float-left w-80 p-4"
					src="/img/best-baked-doughnuts.webp"
					width={1000}
					height={1000}
					alt="best baked doughnuts"
					priority
				/>
				<p className="p-4">
					This site was created as a project for Web Business Essential course.
					My main goal in for creating this website is to let everyone know
					different information about how doughnuts made an impact in our lives.
					I wanted to make the site accessible to others by making it easier for
					users to interact with the website's content such as recipes and
					making it easier for them to contact us in the event they have any
					questions or new information about doughnuts. It is also my intention
					to try and make this website work for all ages since doughnuts are not
					only for the young ones but also for the elderly ones. As we become
					more and more creative on making doughnuts, the more it becomes
					exciting and interesting. It would take a long time for someone to
					outclass what has doughnuts become.
				</p>
			</motion.div>
		</AnimatePresence>
	);
};
export default About;
