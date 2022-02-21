export function sort(chunk: number[]): number[] {
	const merge = (left: number[], right: number[]) => {
		const result: number[] = [];

		const addToResult = (chunk: number[]) => {
			const value = chunk.shift();

			if (value) result.push(value);
		};

		while (left.length && right.length) {
			if (left[0] <= right[0]) addToResult(left);
			else addToResult(right);
		}

		return result.concat(left, right);
	};

	if (chunk.length < 2) return chunk;

	const middle = Math.floor(chunk.length / 2);
	const length = chunk.length;
	const left = chunk.slice(0, middle);
	const right = chunk.slice(middle, length);

	const sortedLeft = sort(left);
	const sortedRight = sort(right);

	return merge(sortedLeft, sortedRight);
}
