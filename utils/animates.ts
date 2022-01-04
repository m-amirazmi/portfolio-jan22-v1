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
