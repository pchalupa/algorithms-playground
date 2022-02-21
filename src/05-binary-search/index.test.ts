import { describe, it, jest, expect } from '@jest/globals';
import { search } from '.';

describe('Binary search', () => {
	it('should find index of number', () => {
		const data = [0, 5, 10, 12, 15, 19, 21, 22, 24, 30];

		expect(search(data, 24)).toBe(9);
	});
});
