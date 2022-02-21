export function sort(data: number[]) {
	let sorted = false;
	let iterations = 0;

	while (!sorted) {
		sorted = true;
		for (let i = 0; i < data.length - iterations; i++) {
			if (data[i] > data[i + 1]) {
				const temp = data[i];

				data[i] = data[i + 1];
				data[i + 1] = temp;
				sorted = false;
			}
		}

		iterations++;
	}

	return data;
}
