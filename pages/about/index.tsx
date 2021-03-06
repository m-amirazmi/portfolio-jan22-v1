import Link from "next/link";
import { motion } from "framer-motion";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import SocialIcon from "../../components/socialicon";
import { personalInfo, summary } from "../../utils/aboutInfo";
import { animateInfo } from "../../utils/animates";
import { PagePropsI } from "../../utils/interfaces";
import { socialInfo } from "../../utils/socialInfo";
import styles from "./About.module.css";
import PageBack from "../../components/pageback";

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
				<div className={styles.summary}>
					<p>{summary.text1}</p>
					<p>{summary.text2}</p>
				</div>

				<div className={styles.infoContainer}>{renderPersonalInfo()}</div>
				<div className={styles.infoContainerMobile}>{renderPersonalInfoMobile}</div>
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
			<motion.div {...animateInfo} style={{ marginBottom: "20px" }}>
				{renderPersonalInfoSection()}
			</motion.div>
			<PageBack />
		</div>
	);
}
