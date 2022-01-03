import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./HomeNav.module.css";

interface HomeNav {
	id: number;
	path: string;
	icon?: string;
	title?: {
		text: {
			primary: string;
			secondary: string;
		};
		color: {
			primary: string;
			secondary: string;
		};
	};
}

export default function HomeNav({ title, icon, path, id }: HomeNav) {
	const animateNavCard = {
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
					delay: id / 20,
				},
			},
		},
	};

	return (
		<motion.div className={styles.container} {...animateNavCard}>
			<div className={styles.subcontainer}>
				<Link href={path}>
					<a className={styles.layout}>
						<div className={styles.icon} style={{ color: title?.color.secondary }}>
							<i className={icon}></i>
						</div>
						<h3 className={styles.pageName}>
							<span>{title?.text.primary} </span>
							<span style={{ color: title?.color.secondary }}>{title?.text.secondary}</span>
						</h3>
					</a>
				</Link>
			</div>
		</motion.div>
	);
}
