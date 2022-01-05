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
import { useRouter } from "next/router";
import PageBack from "../../components/pageback";

export default function About({ pageInfo }: PagePropsI) {
	const { back } = useRouter();

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
		<div key={p.id} className={styles.infoMobile}>
			<i className="fas fa-angle-double-right"></i>
			<div>
				<p>{p.name}</p>
				<p> {p.value}</p>
			</div>
		</div>
	));

	const renderPersonalInfoSection = () => (
		<Section pageInfo={pageInfo} name="My Personal Info">
			<div>
				<motion.div {...animateSummary} className={styles.summary}>
					<p>{summary.text1}</p>
					<p>{summary.text2}</p>
				</motion.div>

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
				<div style={{ marginBottom: "20px" }}>{renderPersonalInfoSection()}</div>
				<PageBack />
			</div>
		</>
	);
}
