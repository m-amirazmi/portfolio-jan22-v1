import { motion } from "framer-motion";
import Link from "next/link";
import { animateIcon } from "../../utils/animates";
import { SocialIconI } from "../../utils/interfaces";
import styles from "./SocialIcon.module.css";

export default function SocialIcon({ icon, link, name, style }: SocialIconI) {
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

	return (
		<motion.div {...animateIcon}>
			<Link href={link}>{renderIcon()}</Link>
		</motion.div>
	);
}
