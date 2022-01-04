import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./SocialIcon.module.css";

interface SocialIcon {
	icon: string;
	link: string;
	name: string;
	style?: string;
}

export default function SocialIcon({ icon, link, name, style }: SocialIcon) {
	const renderIcon = () => {
		if (style === "circle")
			return (
				<a className={styles.containerCircle} target="_blank">
					<i className={icon}></i>
				</a>
			);
		return (
			<a className={styles.container} target="_blank">
				<i className={icon}></i>
				<span>{name}</span>
			</a>
		);
	};

	const animateIcon = {
		initial: "hidden",
		animate: "visible",
		variants: {
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
		},
	};

	return (
		<motion.div {...animateIcon}>
			<Link href={link}>{renderIcon()}</Link>
		</motion.div>
	);
}
