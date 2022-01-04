import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialIcon from "../../components/socialicon";
import { personalInfo, summary } from "../../utils/aboutInfo";
import { socialInfo } from "../../utils/socialInfo";
import styles from "./About.module.css";

interface PageInfo {
	id: number;
	path: string;
	name: string;
	icon: string;
	showOnHome: boolean;
	title?: {
		text: {
			primary: string;
			secondary: string;
		};
		color: {
			primary: string;
			secondary: string;
		};
	};
}

interface PageProps {
	pageInfo: PageInfo;
}

export default function About({ pageInfo }: PageProps) {
	const { back } = useRouter();

	const animateTitle = {
		initial: "hidden",
		animate: "visible",
		variants: {
			hidden: {
				scale: 0.9,
				opacity: 0,
			},
			visible: {
				scale: 1,
				opacity: 1,
			},
		},
	};

	const animateButton = {
		initial: "hidden",
		animate: "visible",
		variants: {
			hidden: {
				scale: 0.9,
				opacity: 0,
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					delay: 0.2,
				},
			},
		},
	};

	const animateSummary = {
		initial: "hidden",
		animate: "visible",
		variants: {
			hidden: {
				scale: 0.9,
				opacity: 0,
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					delay: 0.1,
				},
			},
		},
	};

	const animateInfo = {
		initial: "hidden",
		animate: "visible",
		variants: {
			hidden: {
				scale: 0.9,
				opacity: 0,
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					delay: 0.2,
				},
			},
		},
	};

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

	const renderSocialIcons = socialInfo.map((s) => <SocialIcon key={s.id} style="circle" {...s} />);

	return (
		<>
			<div className={styles.mainContentContainer}>
				<div className={styles.titleContainer}>
					<motion.h1 className={styles.title} {...animateTitle}>
						<span>ABOUT</span>
						<span> ME</span>
					</motion.h1>
				</div>
				<div className={styles.personalInfoContainer}>
					<motion.div {...animateTitle} className={styles.subtitle}>
						<h6>My Personal Info</h6>
						<div style={{ background: pageInfo?.title?.color.secondary }}></div>
					</motion.div>

					<div className={styles.personalInfoContent}>
						<motion.p {...animateSummary} className={styles.summary}>
							{summary}
						</motion.p>

						<motion.div {...animateInfo} className={styles.infoContainer}>
							{renderPersonalInfo()}
						</motion.div>
						<div className={styles.infoContainerMobile}>{renderPersonalInfoMobile}</div>

						<div style={{ display: "flex", marginBottom: "24px" }}>{renderSocialIcons}</div>

						<motion.div {...animateButton} className={styles.buttonContainer}>
							<Link href="/documents/resume.pdf">
								<a className={styles.button} target="_blank">
									<i className="fas fa-file-pdf"></i>
									<span>Download CV</span>
								</a>
							</Link>
						</motion.div>
					</div>
					<div className={styles.back} onClick={back}>
						<i className="fas fa-long-arrow-alt-left"></i>
						<span>Go Back</span>
					</div>
				</div>
			</div>
		</>
	);
}
