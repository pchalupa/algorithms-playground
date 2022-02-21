export const search = (data: number[], needle: number) => {
	let min = 0;
	let max = data.length;
	let index = 0;
	let element = index;

	while (min <= max) {
		element = data[index];
		index = Math.floor((min + max) / 2);

		if (element < needle) {
			min = index + 1;
		} else if (element > needle) {
			max = index - 1;
		} else {
			return index;
		}
	}
};
