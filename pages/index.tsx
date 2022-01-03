import { motion } from "framer-motion";
import Head from "next/head";
import HomeNav from "../components/homenav";
import SocialIcon from "../components/socialicon";
import { pagesInfo } from "../utils/pagesInfo";
import { socialInfo } from "../utils/socialInfo";
import styles from "./Home.module.css";

export default function Home(): JSX.Element {
	const renderHomeNavs = pagesInfo.map((p) => p.showOnHome && <HomeNav key={p.path} {...p} />);
	const renderSocialIcons = socialInfo.map((s) => <SocialIcon key={s.id} {...s} />);

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

	return (
		<>
			<Head>
				<title>Muhamad Amir | Frontend Developer</title>
			</Head>
			<div className={styles.mainContentContainer}>
				<div className={styles.container}>
					<motion.h1 className={styles.title} {...animateTitle}>
						<span>I&apos;M</span>
						<span> MUHAMAD AMIR</span>
						<p className={styles.subtitle}>
							<span>As a</span>
							<span> Frontend Developer</span>
						</p>
					</motion.h1>
					<div className={styles.socialIcons}>{renderSocialIcons}</div>
				</div>
				<div className={styles.homeNavs}>{renderHomeNavs}</div>
			</div>
		</>
	);
}
