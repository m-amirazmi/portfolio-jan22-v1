interface PageInfo {
	path: string;
	name: string;
	icon: string;
	showOnHome: boolean;
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

export const pagesInfo: PageInfo[] = [
	{
		path: "/",
		name: "Home",
		icon: "fas fa-home",
		title: {
			text: {
				primary: "WELCOME TO",
				secondary: "MY SITE",
			},
			color: {
				primary: "#666",
				secondary: "var(--primary)",
			},
		},
		showOnHome: false,
	},
	{
		path: "/about",
		name: "About Me",
		icon: "fas fa-id-card",
		title: {
			text: {
				primary: "ABOUT",
				secondary: "ME",
			},
			color: {
				primary: "#666",
				secondary: "#d9778b",
			},
		},
		showOnHome: true,
	},
	{
		path: "/resume",
		name: "My Resume",
		icon: "fas fa-newspaper",
		title: {
			text: {
				primary: "MY",
				secondary: "RESUME",
			},
			color: {
				primary: "#666",
				secondary: "#be8b4c",
			},
		},
		showOnHome: true,
	},
	{
		path: "/portfolio",
		name: "My Portfolio",
		icon: "fas fa-toolbox",
		title: {
			text: {
				primary: "MY",
				secondary: "PORTFOLIO",
			},
			color: {
				primary: "#666",
				secondary: "#52a746",
			},
		},
		showOnHome: true,
	},
	{
		path: "/contact",
		name: "My Contact",
		icon: "fas fa-envelope",
		title: {
			text: {
				primary: "MY",
				secondary: "CONTACT",
			},
			color: {
				primary: "#666",
				secondary: "#4a9dcb",
			},
		},
		showOnHome: true,
	},
];
