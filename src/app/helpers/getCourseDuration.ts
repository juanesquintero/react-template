const getCourseDuration = (minutes: number) => {
	const hours = Math.trunc((minutes as number) / 60);
	const remaining = (minutes as number) % 60;
	return `${hours} h ${remaining} min`;
};

export default getCourseDuration;
