import React from "react";
import PageBack from "../../components/pageback";
import PageTitle from "../../components/pagetitle";
import SocialIcon from "../../components/socialicon";
import { PagePropsI } from "../../utils/interfaces";
import { socialInfo } from "../../utils/socialInfo";
import styles from "./Contact.module.css";

export default function Contact({ pageInfo }: PagePropsI) {
	return (
		<div className={styles.mainContentContainer}>
			<PageTitle {...pageInfo} />
			<div className={styles.socialIcons}>
				{socialInfo.map((s) => (
					<SocialIcon key={s.id} {...s} />
				))}
			</div>
			<div style={{ marginBottom: "20px" }}></div>
			<PageBack />
		</div>
	);
}
