export const animateTitle = {
	initial: "hidden",
	animate: "visible",
	variants: {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
		},
	},
};

export const animateButton = {
	initial: "hidden",
	animate: "visible",
	variants: {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.2,
			},
		},
	},
};

export const animateSummary = {
	initial: "hidden",
	animate: "visible",
	variants: {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.1,
			},
		},
	},
};

export const animateInfo = {
	initial: "hidden",
	animate: "visible",
	variants: {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.2,
			},
		},
	},
};

export const animateIcon = {
	initial: "hidden",
	animate: "visible",
	variants: {
		hidden: {
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.3,
			},
		},
	},
};

export const animateNavCard = (id: number) => {
	return {
		initial: "hidden",
		animate: "visible",
		variants: {
			hidden: {
				scale: 0.9,
				opacity: 0,
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					delay: id / 20,
				},
			},
		},
	};
};

export const animateReveal = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true },
	transition: { duration: 0.3 },
	variants: {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.9 },
	},
};
