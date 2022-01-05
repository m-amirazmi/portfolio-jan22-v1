import React from "react";
import PageBack from "../../components/pageback";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import { PagePropsI } from "../../utils/interfaces";
import styles from "./Resume.module.css";

export default function Resume({ pageInfo }: PagePropsI) {
	const renderExperience = () => (
		<Section pageInfo={pageInfo} name="My Work Experiences">
			<div>
				<p style={{ marginBottom: "16px" }}>
					I have started working professionally as Frontend Developer since June 2020. From knowing nothing about Web Development until becoming a full fledged Frontend Developer.
				</p>
				<div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p>Frontend Developer</p>
						<p>FashionValet Sdn Bhd, Kuala Lumpur, MY</p>
						<p>Oct 2021 - Present</p>
					</div>

					{/* <div style={{ display: "flex", alignItems: "flex-end" }}>
						<h6 style={{ marginLeft: "auto", fontSize: "14px", fontWeight: "500", color: "var(--primary)", letterSpacing: "0.2px" }}>Sept 2020 - Present</h6>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<h3 style={{ fontWeight: "500", fontSize: "20px" }}>Frontend Web Developer</h3>
						<h4 style={{ marginLeft: "auto" }}>REKA Studios, Kuala Lumpur</h4>
					</div> */}
				</div>
			</div>
		</Section>
	);

	return (
		<>
			<div className={styles.mainContentContainer}>
				<PageTitle {...pageInfo} />
				<div style={{ marginBottom: "20px", width: "100%" }}>{renderExperience()}</div>
				<PageBack />
			</div>
		</>
	);
}
