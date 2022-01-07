import Link from "next/link";
import { SchoolI } from "../../utils/interfaces";
import styles from "./Education.module.css";

export default function Education({ course, name, grade, start, end, cert }: SchoolI) {
	return (
		<div className={styles.container}>
			<div className={styles.education}>
				<p className={styles.schoolName}>{name}</p>
				<p className={styles.startend}>
					<span>
						{start} - {end}
					</span>
					<span>|</span>
					<span>CGPA {grade}</span>
				</p>
			</div>
			<div className={styles.content}>
				<p className={styles.course}>
					<i className="fas fa-angle-double-right"></i>
					<span>{course}</span>
				</p>
				<Link href={cert}>
					<a target="_blank" className={styles.download}>
						<i className="fas fa-file-pdf"></i>
						<span>Certificate</span>
					</a>
				</Link>
			</div>
		</div>
	);
}
