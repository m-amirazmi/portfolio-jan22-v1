import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { personalInfo } from "../../utils/aboutInfo";
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
					<div className={styles.subtitle}>
						<h6>Personal Info</h6>
						<div style={{ background: pageInfo?.title?.color.secondary }}></div>
					</div>

					<div className={styles.personalInfoContent}>
						<p className={styles.summary}>
							I am a UI/UX Designer &amp; Web Developer from Silicon Valley, USA. I am very passionate and dedicated to my work. I have 5 years more work experience. And enjoy working in
							a team or individual.
						</p>

						<div className={styles.infoContainer}>{renderPersonalInfo()}</div>
						<div className={styles.infoContainerMobile}>{renderPersonalInfoMobile}</div>

						<div className={styles.buttonContainer}>
							<button className={styles.button}>
								<i className="fas fa-file-pdf"></i>
								<span>Download CV</span>
							</button>
						</div>
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
