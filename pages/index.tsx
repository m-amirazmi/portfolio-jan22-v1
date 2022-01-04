import { motion } from "framer-motion";
import Head from "next/head";
import HomeNavigation from "../components/homenav";
import SocialIcon from "../components/socialicon";
import { animateTitle } from "../utils/animates";
import { pagesInfo } from "../utils/pagesInfo";
import { socialInfo } from "../utils/socialInfo";
import styles from "./Home.module.css";

export default function Home(): JSX.Element {
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
					<div className={styles.socialIcons}>
						{socialInfo.map((s) => (
							<SocialIcon key={s.id} {...s} />
						))}
					</div>
				</div>
				<div className={styles.homeNavs}>{pagesInfo.map((p) => p.showOnHome && <HomeNavigation key={p.path} {...p} />)}</div>
			</div>
		</>
	);
}
