import { CertI } from "../../utils/interfaces";
import styles from "./Cert.module.css";

export default function Cert({ course, organizer, date, summary }: CertI) {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<div className={styles.education}>
					<p className={styles.schoolName}>{course}</p>
					<p className={styles.startend}>{date}</p>
				</div>
				<div className={styles.content}>
					<p>
						<span className={styles.course}>
							<i className="fas fa-angle-double-right"></i>
							<span>{organizer}</span>
						</span>
						<span className={styles.summary}>{summary}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
