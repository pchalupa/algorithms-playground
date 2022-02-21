export function sort(data: number[]) {
	data.forEach((value, index) => {
		let j = index - 1;

		while (data[j] > value) {
			data[j + 1] = data[j];
			j--;
		}

		data[j + 1] = value;
	});

	return data;
}
