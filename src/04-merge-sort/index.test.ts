import { describe, it, expect } from '@jest/globals';
import { sort } from '.';

describe('Merge sort', () => {
	const data = [1, 5, 3, 2, 4, 7, 9, 8];
	const sortedData = [1, 2, 3, 4, 5, 7, 8, 9];

	it('should sort an array of numbers', () => {
		expect(sort(data)).toEqual(sortedData);
	});
});
