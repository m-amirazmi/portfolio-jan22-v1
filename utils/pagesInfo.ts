import { PageInfoI } from "./interfaces";

export const pagesInfo: PageInfoI[] = [
	{
		id: 0,
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
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
		path: "/blogs",
		name: "My Blogs",
		icon: "fas fa-keyboard",
		title: {
			text: {
				primary: "MY",
				secondary: "BLOGS",
			},
			color: {
				primary: "#666",
				secondary: "#4a9dcb",
			},
		},
		showOnHome: true,
	},
];
