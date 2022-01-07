import { useEffect, useState } from "react";
import { SkillI } from "../../utils/interfaces";
import styles from "./Skill.module.css";

export default function Skill({ name, collections }: SkillI) {
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setInnerWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<div className={styles.container} style={{ width: innerWidth > 1080 ? (collections.length > 4 ? "66%" : "33%") : "100%" }}>
			<div className={styles.subcontainer}>
				<div className={styles.skill}>
					<p className={styles.skillTitle}>{name}</p>
				</div>
				<div className={styles.content}>
					{collections.map((item) => (
						<span key={item} className={styles.item}>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
