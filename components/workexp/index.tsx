import { useState } from "react";
import { WorkExpI } from "../../utils/interfaces";
import styles from "./WorkExp.module.css";

export default function WorkExp({ employmentDate, company, role, location, summary, tasks, id }: WorkExpI) {
	const [show, setShow] = useState(false);

	const renderTasks = tasks.map((t) => (
		<li key={t.tid} className={styles.task}>
			<i className="fas fa-circle"></i>
			<span>
				<span className={styles.taskText}>{t.text}</span>
				<span className={styles.taskEx}>{t.ex}</span>
			</span>
		</li>
	));

	const renderDetail = () => (
		<div className={styles.detail}>
			{summary.text1 && <p className={styles.summary}>{summary.text1}</p>}
			{summary.text2 && <p className={styles.summary}>{summary.text2}</p>}
			{show && <p className={styles.taskTitle}>Tasks</p>}
			{show && <ul className={styles.taskContainer}>{renderTasks}</ul>}
		</div>
	);

	return (
		<div className={styles.container}>
			<div className={styles.company}>
				<p className={styles.companyTitle}>{company}</p>
				<p className={styles.employmentDate}>
					<span>
						{employmentDate.start} - {employmentDate.end}
					</span>
					<span>|</span>
					<span>{location}</span>
				</p>
			</div>
			<div className={styles.content}>
				<p className={styles.role}>
					<i className="fas fa-angle-double-right"></i>
					<span>{role}</span>
					<button className={styles.showBtn} onClick={() => setShow(!show)}>
						<i className={`fas ${show ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
					</button>
				</p>
				{renderDetail()}
				<div className={styles.showBtnMobileContainer}>
					<button className={styles.showBtnMobile} onClick={() => setShow(!show)}>
						<i className={`fas ${show ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
					</button>
				</div>
			</div>
		</div>
	);
}
