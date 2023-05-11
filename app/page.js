"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}>
				<h1>Hello World</h1>
			</motion.div>
		</AnimatePresence>
	);
}
