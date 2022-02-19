export const generateRandomArray = (length: number, multiplier: number = 100) =>
	Array(length)
		.fill(undefined)
		.map(() => Math.floor(Math.random() * multiplier));
