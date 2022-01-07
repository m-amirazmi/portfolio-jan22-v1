import { ReactNode } from "react";

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
	children: ReactNode;
	name: string;
}

export interface PagePropsI {
	pageInfo: PageInfoI;
	response?: [];
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
	children?: ReactNode;
}

export interface SocialIconI {
	icon: string;
	link: string;
	name: string;
	style?: string;
	expand?: boolean;
}

export interface WorkTasksI {
	tid?: string;
	text?: string;
	ex?: string;
}

export interface WorkExpI {
	employmentDate: {
		start: string;
		end: string;
	};
	id?: string;
	company: string;
	role: string;
	location: string;
	summary: {
		text1?: string;
		text2?: string;
	};
	tasks: WorkTasksI[];
}

export interface WorkI {
	summary: string;
	jobs: WorkExpI[];
}

export interface SchoolI {
	id: string;
	course: string;
	name: string;
	grade: string;
	start: string;
	end: string;
	cert: string;
}

export interface EduI {
	summary: string;
	schools: SchoolI[];
}

export interface CertI {
	id: string;
	course: string;
	organizer: string;
	summary: string;
	date: string;
	cert: string;
}

export interface CertsI {
	summary: string;
	certs: CertI[];
}

export interface SkillI {
	id: string;
	name: string;
	collections: string[];
}

export interface SkillsI {
	summary: string;
	items: SkillI[];
}
