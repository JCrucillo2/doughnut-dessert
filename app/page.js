"use client";
import { motion, AnimatePresence } from "framer-motion";
import SideAd from "./components/SideAd";
import Image from "next/image";
import NewsAndEvents from "./components/NewsAndEvents";

export default function Home() {
	const styles = {
		secondaryHeading: `text-3xl text-center font-ssp font-bold text-secondary mb-4`,
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				className="bg-background p-4 rounded-md">
				<div className="md:flex gap-4">
					<div>
						<h2 className={styles.secondaryHeading}>Welcome to Doughnuts!</h2>
						<p className="mb-4">
							Aside from being a tasty treat, it is also relatively cheap. A
							dessert available to any ages, doughnuts are hugely popular in any
							other parts of the world. In some cases, other variants of
							doughnuts are only exclusive on one place.
						</p>
						<div>
							<h2 className={styles.secondaryHeading}>
								Different Kinds of Doughnuts
							</h2>
							<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
								<div className="w-fit mb-4">
									<h3 className="font-ssp font-bold text-xl text-center bg-secondary text-beige py-2 rounded-md">
										Boston Cream
									</h3>
									<Image
										className="mt-4 rounded-md border border-secondary"
										src="/img/boston-cream.jpg"
										width={160}
										height={160}
										alt="boston cream dougnut"
									/>
								</div>
								<div className="w-fit mb-4">
									<h3 className="font-ssp font-bold text-xl text-center bg-secondary text-beige py-2 rounded-md">
										Jelly
									</h3>
									<Image
										className="mt-4 rounded-md border border-secondary"
										src="/img/jelly.jpg"
										width={160}
										height={160}
										alt="jelly doughnut"
									/>
								</div>
								<div className="w-fit mb-4">
									<h3 className="font-ssp font-bold text-xl text-center bg-secondary text-beige py-2 rounded-md">
										Sprinkled
									</h3>
									<Image
										className="mt-4 rounded-md border border-secondary"
										src="/img/sprinkled-cake.jpg"
										width={160}
										height={160}
										alt="sprinkled doughnut"
									/>
								</div>
								<div className="w-fit mb-4">
									<h3 className="font-ssp font-bold text-xl text-center bg-secondary text-beige py-2 rounded-md">
										Sour Cream
									</h3>
									<Image
										className="mt-4 rounded-md border border-secondary"
										src="/img/sourcream.jpg"
										width={160}
										height={160}
										alt="sour cream doughnut"
									/>
								</div>
							</div>
						</div>
						<p className="mb-3">
							Over the years, many people began experimenting in creating
							different flavors for doughnuts. With more and more ingredients
							discovered, people began changing the traditional doughnut's
							typical bread with hole in the middle with creative kinds of
							flavoring.
						</p>
						<div>
							<h2 className={styles.secondaryHeading}>
								Fun Facts about Doughtnuts
							</h2>
							<ul className="list-disc pl-4 mb-4">
								<li>
									Over 10 billion doughnuts are made in the U.S. each year.
								</li>
								<li>
									Some people even have the word "Doughnut" or "Donut" as their
									last name.
								</li>
								<li>
									"Spudnuts" have dough made of potatoes instead of flour.
								</li>
								<li>Dougnuts were served to soldiers during WWII</li>
								<li>
									There are dates that are reserved for different kinds of
									doughnuts LOL.
								</li>
							</ul>
						</div>
						<NewsAndEvents />
						<div className="mb-4 md:mb-0">
							<h3 className="font-ssp text-secondary text-xl mb-2">
								About the Author
							</h3>
							<p>
								Junnel is a Web Designer and Developer studying on Northern
								Alberta Institure of Technology in Edmonton, Alberta. A
								full-time student and a part-time worker at Papa John's Pizza.
							</p>
						</div>
					</div>
					<SideAd />
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
