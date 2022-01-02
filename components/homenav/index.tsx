import Link from "next/link";
import styles from "./HomeNav.module.css";

interface HomeNav {
	path: string;
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
}

export default function HomeNav({ title, icon, path }: HomeNav) {
	return (
		<div key={path} className={styles.container}>
			<div className={styles.subcontainer}>
				<Link href={path}>
					<a className={styles.layout}>
						<div className={styles.icon} style={{ color: title?.color.secondary }}>
							<i className={icon}></i>
						</div>
						<h3 className={styles.pageName}>
							<span>{title?.text.primary} </span>
							<span style={{ color: title?.color.secondary }}>{title?.text.secondary}</span>
						</h3>
					</a>
				</Link>
			</div>
		</div>
	);
}
