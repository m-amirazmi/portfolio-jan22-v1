import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MainLayout.module.css";

interface Layout {
	icon?: string;
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
	children?: JSX.Element;
}

export default function MainLayout({ icon, title, children }: Layout) {
	const { pathname } = useRouter();
	return (
		<div className={styles.mainContainer}>
			<div className={styles.container}>
				<div className={styles.background}>
					<div className={styles.subContainer}>
						<div className={styles.mainContent}>
							<div className={styles.sideContent}>
								<div className={styles.sideContentLayout}>
									<div className={styles.sideContentIcon} style={{ color: title?.color.secondary }}>
										<i className={`${icon}`}></i>
									</div>
									{pathname !== "/" && (
										<Link href="/">
											<a className={styles.backIcon}>
												<i className="fas fa-long-arrow-alt-left"></i>
											</a>
										</Link>
									)}
									<div className={styles.sideContentTitleContainer}>
										<p className={styles.sideContentTitle}>
											<span style={{ color: title?.color.primary }}>{title?.text.primary}</span>
											<span style={{ color: title?.color.secondary }}> {title?.text.secondary}</span>
										</p>
									</div>
								</div>
							</div>

							<div className={styles.mainContentLayout}>{children}</div>
						</div>
						<div className={styles.rightContent}>
							<div className={styles.rightContentContainer}>
								<Image layout="fill" objectFit="cover" src="/images/cover.jpeg" alt="placeholder" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
