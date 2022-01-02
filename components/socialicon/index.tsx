import Link from "next/link";
import styles from "./SocialIcon.module.css";

interface SocialIcon {
	icon: string;
	link: string;
	name: string;
}

export default function SocialIcon({ icon, link, name }: SocialIcon) {
	return (
		<Link href={link}>
			<a className={styles.container} target="_blank">
				<i className={icon}></i>
				<span>{name}</span>
			</a>
		</Link>
	);
}
