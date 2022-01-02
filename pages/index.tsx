import Head from "next/head";
import HomeNav from "../components/homenav";
import SocialIcon from "../components/socialicon";
import { pagesInfo } from "../utils/pagesInfo";
import { socialInfo } from "../utils/socialInfo";
import styles from "./Home.module.css";

export default function Home(): JSX.Element {
	const renderHomeNavs = pagesInfo.map((p) => p.showOnHome && <HomeNav key={p.path} {...p} />);
	const renderSocialIcons = socialInfo.map((s) => <SocialIcon key={s.id} {...s} />);

	return (
		<>
			<Head>
				<title>Muhamad Amir | Frontend Developer</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>
					<span>I&apos;M</span>
					<span> MUHAMAD AMIR</span>
				</h1>
				<p className={styles.subtitle}>
					<span>As a</span>
					<span> Frontend Developer</span>
				</p>
				<div className={styles.socialIcons}>{renderSocialIcons}</div>
			</div>
			<div className={styles.homeNavs}>{renderHomeNavs}</div>
		</>
	);
}
