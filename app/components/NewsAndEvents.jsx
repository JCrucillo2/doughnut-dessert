import Link from "next/link";

const NewsAndEvents = () => {
	const news = [
		{
			id: 1,
			title: "Make this unique type of doughnut",
			content:
				"Seeing this article made me realize that there is more than just a way to make unique kinds of doughnuts. Chabad.org has a new recipe that will make your mouth water for one. I am very excited to announce that I have found a new recipe that will make your doughnut making needs much more interesting and fun.\n Yes, doughnuts are traditionally sweet, but the dough itself is akin to a bread dough, so it can go either way. In Philippines, all ages love to eat doughnut. I will always know the difference of the doughnuts they sell here in Canada and the ones they sell back in my country. Stores there loves giving a basic doughnuts bunch of sweet flavors that they think will sell successfully.\n If you are creative enough, you will never run out of ideas on spicing things up especially in a dessert food. Downside of wanting more doughnuts to eat in Philippines is how expensive each doughnut is. With only a limited budget, once a month my Grandmother always buys us doughnuts from Dunkin' Donuts after going to church. As I grow up, I always wonder why buy doughnuts when there is recipe out there that makes it easier to make them.\n Anyway, I tasted many doughnuts over the years, and I am really interested in creating unique flavors that everyone can enjoy. With this unique doughnut recipe, it could be the start of your journey in exploring more about doughnuts. The recipe and directions for this recipe is not as hard as you think, although sometimes they can be hard to understand as a beginner. This recipe is not the only unique ones out there. There are many more kinds of doughnut recipe you should try that might impress you even more. Always be ready in trying out new stuff!",
			link: "https://www.chabad.org/recipes/recipe_cdo/aid/5320070/jewish/Savory-Tomato-Zaatar-Doughnuts.htm",
		},
	];

	return (
		<div>
			<h2 className="text-3xl text-center font-ssp font-bold text-secondary mb-4">
				News and Events
			</h2>
			{news.map((n) => (
				<div key={n.id}>
					<h3 className="font-ssp text-xl text-secondary mb-3">{n.title}</h3>
					<p>{n.content}</p>
					<Link
						href={n.link}
						className="bg-secondary text-beige py-2 px-4 rounded-md my-4 inline-block">
						Read More
					</Link>
				</div>
			))}
		</div>
	);
};
export default NewsAndEvents;
