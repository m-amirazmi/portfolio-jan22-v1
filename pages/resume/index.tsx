import WorkExp from "../../components/workexp";
import PageBack from "../../components/pageback";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import { PagePropsI } from "../../utils/interfaces";
import { certificates, educations, experiences, skills } from "../../utils/resumeInfo";
import styles from "./Resume.module.css";
import Education from "../../components/education";
import Cert from "../../components/certificate";
import Skill from "../../components/skill";
import { socialInfo } from "../../utils/socialInfo";
import SocialIcon from "../../components/socialicon";

export default function Resume({ pageInfo }: PagePropsI) {
	const renderExperience = (
		<Section pageInfo={pageInfo} name="My Work Experiences">
			<p className={styles.workExperienceSummary}>{experiences.summary}</p>
			{experiences.jobs.map((exp) => (
				<WorkExp key={exp.id} {...exp} />
			))}
		</Section>
	);

	const renderEducations = (
		<Section pageInfo={pageInfo} name="My Educational Background">
			{educations.schools.map((ed) => (
				<Education key={ed.id} {...ed} />
			))}
		</Section>
	);

	const renderCertificates = (
		<Section pageInfo={pageInfo} name="My Additional Certificates">
			<p className={styles.workExperienceSummary}>{certificates.summary}</p>
			<div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
				{certificates.certs.map((cert) => (
					<Cert key={cert.id} {...cert} />
				))}
			</div>
		</Section>
	);

	const renderSkills = (
		<Section pageInfo={pageInfo} name="My Skills">
			<p className={styles.workExperienceSummary}>{skills.summary}</p>
			<div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
				{skills.items.map((skill) => (
					<Skill key={skill.id} {...skill} />
				))}
			</div>
		</Section>
	);

	return (
		<div className={styles.mainContentContainer}>
			<PageTitle {...pageInfo} />
			<div className={styles.socialIcons}>
				{socialInfo.map((s) => (
					<SocialIcon key={s.id} {...s} />
				))}
			</div>
			<div className={styles.sections}>
				<div className={styles.section}>{renderSkills}</div>
				<div className={styles.section}>{renderExperience}</div>
				<div className={styles.section}>{renderEducations}</div>
				<div className={styles.section}>{renderCertificates}</div>
			</div>
			<PageBack />
		</div>
	);
}
