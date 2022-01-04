import Link from "next/link";
import { motion } from "framer-motion";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import SocialIcon from "../../components/socialicon";
import { personalInfo, summary } from "../../utils/aboutInfo";
import { animateButton, animateInfo, animateSummary } from "../../utils/animates";
import { PagePropsI } from "../../utils/interfaces";
import { socialInfo } from "../../utils/socialInfo";
import styles from "./About.module.css";

export default function About({ pageInfo }: PagePropsI) {
	const renderPersonalInfo = () => {
		const positions: (string | undefined)[] = [];
		personalInfo.forEach((p) => {
			if (positions.includes(p?.position)) return;
			return positions.push(p.position);
		});

		return positions.map((p) => (
			<div key={p} className={styles.infoSubContainer}>
				{personalInfo
					.filter((p2) => p2.position === p)
					.map((p3) => (
						<div key={p3.id} className={styles.info}>
							<i className="fas fa-angle-double-right"></i>
							<p>
								<span>{p3.name} -</span>
								<span> {p3.value}</span>
							</p>
						</div>
					))}
			</div>
		));
	};

	const renderPersonalInfoMobile = personalInfo.map((p) => (
		<div key={p.id} className={styles.info}>
			<i className="fas fa-angle-double-right"></i>
			<p>
				<span>{p.name} -</span>
				<span> {p.value}</span>
			</p>
		</div>
	));

	const renderPersonalInfoSection = () => (
		<Section pageInfo={pageInfo} name="My Personal Info">
			<div>
				<motion.p {...animateSummary} className={styles.summary}>
					{summary}
				</motion.p>

				<motion.div {...animateInfo} className={styles.infoContainer}>
					{renderPersonalInfo()}
				</motion.div>
				<motion.div {...animateInfo} className={styles.infoContainerMobile}>
					{renderPersonalInfoMobile}
				</motion.div>

				<div style={{ display: "flex", marginBottom: "24px" }}>
					{socialInfo.map((s) => (
						<SocialIcon key={s.id} style="circle" {...s} />
					))}
				</div>

				<motion.div {...animateButton} className={styles.buttonContainer}>
					<Link href="/documents/resume.pdf">
						<a className={styles.button} target="_blank">
							<i className="fas fa-file-pdf"></i>
							<span>Download CV</span>
						</a>
					</Link>
				</motion.div>
			</div>
		</Section>
	);

	return (
		<>
			<div className={styles.mainContentContainer}>
				<PageTitle {...pageInfo} />
				{renderPersonalInfoSection()}
			</div>
		</>
	);
}
