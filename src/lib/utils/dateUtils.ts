export function getCurrentWorkingDayFormatted() {
	const currentDate = new Date();
	const lastDayOfPreviousMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		0
	);

	let workingDay = currentDate.getDate();

	while (workingDay >= 1) {
		const currentDay = new Date(
			lastDayOfPreviousMonth.getFullYear(),
			lastDayOfPreviousMonth.getMonth(),
			workingDay
		).getDay();

		if (currentDay !== 0 && currentDay !== 6) {
			break;
		}

		workingDay--;
	}

	const nearestWorkingDay = new Date(
		lastDayOfPreviousMonth.getFullYear(),
		lastDayOfPreviousMonth.getMonth(),
		workingDay
	);

	// Format the current date as "dd MMM, yyyy"
	const formattedDate = nearestWorkingDay.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});

	return `${formattedDate}`;
}
