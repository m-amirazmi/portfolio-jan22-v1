import { useRouter } from "next/router";
import styles from "./PageBack.module.css";

export default function PageBack() {
	const { back } = useRouter();
	return (
		<div className={styles.back} onClick={back}>
			<i className="fas fa-long-arrow-alt-left"></i>
			<span>Go Back</span>
		</div>
	);
}
