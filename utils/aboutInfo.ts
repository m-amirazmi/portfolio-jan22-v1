interface PersonalInfo {
	id?: number;
	name?: string;
	value?: string;
	position?: string;
}

export const personalInfo: PersonalInfo[] = [
	{
		id: 1,
		name: "First Name",
		value: "Muhamad Amir",
		position: "left",
	},
	{
		id: 2,
		name: "Last Name",
		value: "Azmi",
		position: "left",
	},
	{
		id: 3,
		name: "Phone Number",
		value: "+601119821105",
		position: "left",
	},
	{
		id: 4,
		name: "Email",
		value: "m.amirazmi@hotmail.com",
		position: "left",
	},
	{
		id: 5,
		name: "Date of Birth",
		value: "27 August 1995",
		position: "right",
	},
	{
		id: 6,
		name: "Location",
		value: "Ampang, Selangor",
		position: "right",
	},
	{
		id: 7,
		name: "Nationality",
		value: "Malaysia",
		position: "right",
	},
	{
		id: 8,
		name: "Languages",
		value: "Malay, English",
		position: "right",
	},
];

// export const summary =
// 	"I am a UI/UX Designer & Web Developer from Silicon Valley, USA. I am very passionate and dedicated to my work. I have 5 years more work experience. And enjoy working in a team or individual.";

const today = new Date().getTime();
// const currentMonth = today.getMonth();
// const currentYear = today.getFullYear();

const duration = today - 1592182800000;
const differences = duration / (1000 * 2629743 * 12);
const year = parseInt(differences.toString());
const month = parseInt(((differences - year) * 12).toString());
const durationText = month > 1 ? `${year} year${year > 1 ? "s" : ""} and ${month} month${month > 1 ? "s" : ""}` : `${year} year${year > 1 && "s"}`;

export const summary = {
	text1: "I am a Frontend Web Developer from Kuala Lumpur, Malaysia. I am very passionate and dedicated to my work. I love exploring new front end tech to improve my knowledge to the next level.",
	text2: `I have ${durationText} professional work experiences in startup and ecommerce company. I also enjoy working in a team and individual.`,
};
