import { motion } from "framer-motion";
import Link from "next/link";
import { animateNavCard } from "../../utils/animates";
import { HomeNavI } from "../../utils/interfaces";
import styles from "./HomeNav.module.css";

export default function HomeNavigation({ title, icon, path, id }: HomeNavI) {
	return (
		<motion.div className={styles.container} {...animateNavCard(id)}>
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
