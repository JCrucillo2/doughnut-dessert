import Image from "next/image";
import Link from "next/link";

const SideAd = () => {
	const adItems = [
		{
			id: 1,
			title: "Featured Dougnut",
			src: "/img/coffee-glazed.jpg",
			content: "Coffee-Glazed Doughnut",
			link: "https://www.foodbanjo.com/easy-coffee-glazed-donuts/",
		},
		{
			id: 2,
			title: "Recipe Zone",
			src: "/img/bacon_donuts.jpg",
			content: "Make doughnuts at home with these simple instructions",
			link: "https://www.delish.com/cooking/recipe-ideas/a24788319/how-to-make-donuts-at-home/",
		},
	];

	return (
		<div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center items-center md:justify-normal">
			{adItems.map((item) => (
				<div
					key={item.id}
					className="bg-secondary text-beige p-4 rounded-md text-center w-[12rem]">
					<h3 className="font-ssp text-xl font-bold">{item.title}</h3>
					<Link href={item.link}>
						<Image
							className="w-[10rem] h-[10rem] my-2 rounded-md"
							src={item.src}
							alt={item.title}
							width={500}
							height={500}
							priority
						/>
					</Link>
					<p>{item.content}</p>
				</div>
			))}
		</div>
	);
};
export default SideAd;
