import { CertsI, EduI, SkillsI, WorkI } from "./interfaces";

export const experiences: WorkI = {
	summary: "I have started working professionally as Frontend Developer since Jun 2020. From knowing nothing about Web Development until becoming a full fledged Frontend Developer.",
	jobs: [
		{
			id: "1",
			employmentDate: {
				start: "Sep 2021",
				end: "Present",
			},
			company: "Fashion Valet Sdn Bhd",
			role: "Frontend Developer",
			location: "Kuala Lumpur",
			summary: {
				text1: "In FashionValet, I started to learn how to use NextJS framework to real project. Since FashionValet is a ecommerce company, most of my tasks are bug fixing and developing new features either on store front or CMS front end.",
			},
			tasks: [
				{
					tid: "1",
					text: "Develop review & rating features for dUCk and LILIT. web applications.",
				},
				{
					tid: "2",
					text: "Develop dUCk Tutorial page and CMS.",
				},
				{
					tid: "3",
					text: "Develop Special Pages for product launching for LILIT. and dUCk.",
					ex: "eg: LILITxFiziWoo, RE:LIT, Pinktober, 11.11 Special Page",
				},
				{
					tid: "4",
					text: "Regular bug fixing.",
				},
			],
		},
		{
			id: "2",
			employmentDate: {
				start: "Jun 2020",
				end: "Jun 2021",
			},
			company: "REKA Studios",
			role: "Front End Web Developer",
			location: "Kuala Lumpur",
			summary: {
				text1: "Here was the place that I have started my web development journey. From knowing nothing until quite proficient in ReactJS. I also learnt how to connect with Firebase and exploring latest web technologies to be used in projects.",
			},
			tasks: [
				{
					tid: "1",
					text: "Maintain, clean up & write documentation for existing codebase.",
				},
				{
					tid: "2",
					text: "Develop new features and fix bugs.",
				},
				{
					tid: "3",
					text: "Implementing web security.",
				},
				{
					tid: "4",
					text: "Developing some of major features in SERV Merchant Dashboard.",
					ex: "eg: Manual Input, Job Calendar, Microservices",
				},
			],
		},
	],
};

export const educations: EduI = {
	summary: "",
	schools: [
		{
			id: "1",
			course: "Bachelor in Electronics Engineering Technology",
			name: "University Kuala Lumpur British Malaysian Institute",
			grade: "3.06",
			start: "Jan 2015",
			end: "Jun 2019",
			cert: "/documents/bachelor.pdf",
		},
		{
			id: "2",
			course: "Diploma in Electrical and Electronics Engineering Technology",
			name: "University Kuala Lumpur British Malaysian Institute",
			grade: "3.57",
			start: "Jan 2013",
			end: "Dec 2015",
			cert: "/documents/diploma.pdf",
		},
	],
};

export const certificates: CertsI = {
	summary: "Aside of my bachelor degree and diploma, I also take some Web Development and Programming courses to improve my skills.",
	certs: [
		{
			course: "Combat of Web Application - Hacker vs. Developer",
			id: "1",
			organizer: "Condition Zebra Online Training Centre",
			summary: "Learned about web security, OWASP and a little bit about BurpSuite.",
			date: "Jan 2021",
			cert: "/documents/thecombat.pdf",
		},
		{
			course: "Programming Foundations: Object-Oriented Design",
			id: "3",
			organizer: "LinkedIn Learning",
			summary: "Learned on designing a software based on Object Oriented Design.",
			date: "Jun 2021",
			cert: "/documents/oodcert.pdf",
		},
	],
};

export const skills: SkillsI = {
	summary: "Throughout my web development journey, I have focused more into frontend or UI/UX development. My main tech stack is revolving around ReactJS.",
	items: [
		{
			id: "1",
			name: "Web Development",
			collections: ["HTML/CSS", "Javascript", "ReactJS", "NextJS", "Typescript", "Framer Motion", "NodeJS", "ExpressJS", "MongoDB"],
		},
		{
			id: "3",
			name: "Tools",
			collections: ["GIT", "Figma", "GitLab/GitHub"],
		},
	],
};
