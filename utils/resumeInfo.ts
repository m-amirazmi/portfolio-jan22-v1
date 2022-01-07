import { EduI, WorkI } from "./interfaces";

export const experiences: WorkI = {
	summary: "I have started working professionally as Frontend Developer since June 2020. From knowing nothing about Web Development until becoming a full fledged Frontend Developer.",
	jobs: [
		{
			id: "1",
			employmentDate: {
				start: "Sept 2021",
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
				start: "June 2020",
				end: "June 2021",
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
			end: "June 2019",
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
