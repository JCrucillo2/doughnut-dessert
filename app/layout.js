import "./globals.css";
import { Source_Sans_Pro, Libre_Baskerville } from "next/font/google";
import { Navbar } from "./components/Navbar";

const ssp = Source_Sans_Pro({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-ssp",
});
const libre = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-libre",
});

export const metadata = {
	title: "Doughnuts for Dessert",
	description:
		"Doughnuts For Dessert is a fun website filled with sweet contents that you need to know about Doughnuts!",
	keywords: "doughnuts, doughnut, kinds, cream, facts, recipe, people",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${ssp.variable} ${libre.variable}`}>
			<body className="font-libre">
				<div className="bg-background-main bg-cover bg-center min-h-screen bg-repeat-y">
					<Navbar />
					<div className="max-w-[87.5rem] mx-auto">{children}</div>
				</div>
			</body>
		</html>
	);
}
