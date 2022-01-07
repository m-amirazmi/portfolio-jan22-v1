import { motion } from "framer-motion";
import Link from "next/link";
import PageBack from "../../components/pageback";
import PageTitle from "../../components/pagetitle";
import Section from "../../components/section";
import SocialIcon from "../../components/socialicon";
import { animateInfo } from "../../utils/animates";
import { PagePropsI } from "../../utils/interfaces";
import { socialInfo } from "../../utils/socialInfo";
import styles from "./Blogs.module.css";

export default function Contact({ pageInfo, response }: PagePropsI) {
	const renderContent = (
		<Section pageInfo={pageInfo} name="My Blogs">
			<div style={{ width: "100%", display: "flex", flexWrap: "wrap", height: "inherit" }}>
				{response?.map((blog: any) => (
					<div key={blog.id} style={{ padding: "20px", width: "100%", height: "inherit" }}>
						<Link href={blog.canonical_url}>
							<a target="_blank">
								<div style={{ padding: "24px", borderRadius: "4px", cursor: "pointer", border: "1px solid rgba(0, 128, 128, 0.4)", height: "100%" }}>
									<h2 style={{ fontSize: "24px", fontWeight: "500", color: "var(--primary)" }}>{blog.title}</h2>
									<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "6px 0px 20px 0px" }}>
										{blog.tag_list.map((t: any) => (
											<span key={t} style={{ padding: "2px 8px", fontSize: "12px", borderRadius: "4px", background: "rgba(137, 213, 210, 0.5)" }}>
												{t}
											</span>
										))}
									</div>
									<p style={{ fontStyle: "italic", color: "#666" }}>{blog.description}</p>
								</div>
							</a>
						</Link>
					</div>
				))}
			</div>
		</Section>
	);

	return (
		<div className={styles.mainContentContainer}>
			<PageTitle {...pageInfo} />
			<div className={styles.socialIcons}>
				{socialInfo.map((s) => (
					<SocialIcon key={s.id} {...s} />
				))}
			</div>
			<motion.div {...animateInfo} style={{ marginBottom: "20px", width: "100%" }}>
				{renderContent}
			</motion.div>
			<PageBack />
		</div>
	);
}

export async function getServerSideProps() {
	const response = await fetch("https://dev.to/api/articles/?username=mamirazmi").then((r) => r.json());

	return {
		props: {
			response,
		},
	};
}
