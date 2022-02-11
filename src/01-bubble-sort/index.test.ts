import { describe, it, expect } from '@jest/globals';
import { sort } from '.';

describe('Bubble sort', () => {
	const data = [1, 5, 3, 2, 4];
	const sortedData = [1, 2, 3, 4, 5];

	it('should sort an array of numbers', () => {
		expect(sort(data)).toEqual(sortedData);
	});
});
