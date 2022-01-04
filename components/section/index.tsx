import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { animateTitle } from "../../utils/animates";
import { PageSection } from "../../utils/interfaces";
import styles from "./Section.module.css";

export default function Section({ pageInfo, name, children }: PageSection) {
	const { back } = useRouter();
	return (
		<div className={styles.sectionContainer}>
			<motion.div {...animateTitle} className={styles.subtitle}>
				<h6>{name}</h6>
				<div style={{ background: pageInfo.title?.color.secondary }}></div>
			</motion.div>

			<div className={styles.sectionContent}>{children}</div>
			<div className={styles.back} onClick={back}>
				<i className="fas fa-long-arrow-alt-left"></i>
				<span>Go Back</span>
			</div>
		</div>
	);
}
