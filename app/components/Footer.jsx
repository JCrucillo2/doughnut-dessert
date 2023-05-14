// react icons
import { BsFacebook, BsTwitter, BsInstagram, BsCardList } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
	const socialLinks = [
		{
			id: 1,
			icon: <BsFacebook size={30} />,
			link: "https://facebook.com",
		},
		{
			id: 2,
			icon: <BsTwitter size={30} />,
			link: "https://twitter.com",
		},
		{
			id: 3,
			icon: <BsInstagram size={30} />,
			link: "https://instagram.com",
		},
		{
			id: 4,
			icon: <BsCardList size={30} />,
			link: "https://randomlicense.com",
		},
		{
			id: 5,
			icon: <MdEmail size={30} />,
			link: "mailto:yoru.com",
		},
	];

	return (
		<div className="bg-secondary text-beige text-center relative bottom-0">
			<div className="max-w-[87.5rem] mx-auto px-4 py-8">
				<p className="mb-4">
					&copy; 2021 Doughnuts. For educational purposes only. All images are
					property of linked sites.
				</p>
				<p>Follow us on:</p>
				<div className="flex items-center gap-4 justify-center my-4">
					{socialLinks.map((s) => (
						<Link href={s.link} key={s.id}>
							{s.icon}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default Footer;
