import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./SocialIcon.module.css";

interface SocialIcon {
	icon: string;
	link: string;
	name: string;
}

export default function SocialIcon({ icon, link, name }: SocialIcon) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					scale: 0.9,
					opacity: 0,
				},
				visible: {
					scale: 1,
					opacity: 1,
					transition: {
						delay: 0.3,
					},
				},
			}}
		>
			<Link href={link}>
				<a className={styles.container} target="_blank">
					<i className={icon}></i>
					<span>{name}</span>
				</a>
			</Link>
		</motion.div>
	);
}
