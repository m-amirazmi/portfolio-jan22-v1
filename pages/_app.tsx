import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import MainLayout from "../components/layouts/main";
import { pagesInfo } from "../utils/pagesInfo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	const { pathname } = useRouter();

	const findPageInfo = pagesInfo.find((p) => pathname === p.path);
	const animatePage = {
		key: router.route,
		initial: "pageInitial",
		animate: "pageAnimate",
		variants: {
			pageInitial: {
				height: "100%",
				opacity: 0,
			},
			pageAnimate: {
				opacity: 1,
			},
		},
	};

	return (
		<>
			<Head>
				<title>Muhamad Amir | {findPageInfo?.name}</title>
			</Head>
			<Script src="https://kit.fontawesome.com/ce9a652be3.js" crossOrigin="anonymous" />
			<MainLayout {...findPageInfo}>
				<motion.div {...animatePage}>
					<Component {...pageProps} />
				</motion.div>
			</MainLayout>
		</>
	);
}

export default MyApp;
