import React from "react";
import WorkExp from "../../components/workexp";
import PageBack from "../../components/pageback";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import { PagePropsI } from "../../utils/interfaces";
import { experiences } from "../../utils/resumeInfo";
import styles from "./Resume.module.css";

export default function Resume({ pageInfo }: PagePropsI) {
	const renderExperience = () => (
		<Section pageInfo={pageInfo} name="My Work Experiences">
			<div>
				<p className={styles.workExperienceSummary}>{experiences.summary}</p>
				{experiences.jobs.map((exp) => (
					<WorkExp key={exp.id} {...exp} />
				))}
			</div>
		</Section>
	);

	return (
		<>
			<div className={styles.mainContentContainer}>
				<PageTitle {...pageInfo} />
				<div style={{ marginBottom: "20px", width: "100%" }}>{renderExperience()}</div>
				<PageBack />
			</div>
		</>
	);
}
