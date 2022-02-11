export function sort(data: Number[]) {
	let sorted = false;

	while (!sorted) {
		sorted = true;
		for (let i = 0; i < data.length; i++) {
			if (data[i] > data[i + 1]) {
				const temp = data[i];

				data[i] = data[i + 1];
				data[i + 1] = temp;
				sorted = false;
			}
		}
	}

	return data;
}
