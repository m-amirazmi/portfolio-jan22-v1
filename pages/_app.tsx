import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import MainLayout from "../components/layouts/main";
import { pagesInfo } from "../utils/pagesInfo";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();

	const findPageInfo = pagesInfo.find((p) => pathname === p.path);

	return (
		<>
			<Head>
				<title>Muhamad Amir | {findPageInfo?.name}</title>
			</Head>
			<Script src="https://kit.fontawesome.com/ce9a652be3.js" crossOrigin="anonymous" />
			<MainLayout {...findPageInfo}>
				<Component {...pageProps} />
			</MainLayout>
		</>
	);
}

export default MyApp;
