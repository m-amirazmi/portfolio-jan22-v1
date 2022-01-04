import { motion } from "framer-motion";
import { animateTitle } from "../../utils/animates";
import { PageInfoI } from "../../utils/interfaces";
import styles from "./PageTitle.module.css";

export default function PageTitle({ title }: PageInfoI) {
	return (
		<div className={styles.titleContainer}>
			<motion.h1 className={styles.title} {...animateTitle}>
				<span>{title?.text.primary}</span>
				<span> {title?.text.secondary}</span>
			</motion.h1>
		</div>
	);
}
