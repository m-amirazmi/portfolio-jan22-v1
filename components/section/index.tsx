import { motion } from "framer-motion";
import { animateTitle } from "../../utils/animates";
import { PageSectionI } from "../../utils/interfaces";
import styles from "./Section.module.css";

export default function Section({ pageInfo, name, children }: PageSectionI) {
	return (
		<div className={styles.sectionContainer}>
			<motion.div {...animateTitle} className={styles.subtitle}>
				<h6>{name}</h6>
				<div style={{ background: pageInfo.title?.color.secondary }}></div>
			</motion.div>

			<div className={styles.sectionContent}>{children}</div>
		</div>
	);
}
