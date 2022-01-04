export interface PageInfoI {
	id: number;
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

export interface PageSectionI {
	pageInfo: PageInfoI;
	children: JSX.Element;
	name: string;
}

export interface PagePropsI {
	pageInfo: PageInfoI;
}

export interface HomeNavI {
	id: number;
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
export interface LayoutI {
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
	children?: JSX.Element;
}

export interface SocialIconI {
	icon: string;
	link: string;
	name: string;
	style?: string;
}