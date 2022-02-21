import { describe, it, expect } from '@jest/globals';
import { addNumbers, factorial } from '.';

describe('Recursion', () => {
	it('should add numbers in array', () => {
		expect(addNumbers([10, 5, 2, 3, 5])).toBe(25);
	});

	it('should add numbers in nested array', () => {
		expect(addNumbers([10, [5], 2, [[[3]]], 5])).toBe(25);
		expect(addNumbers([10, [5], 2, [[[3, 2, 1]]], 5, [[[[[[[[1, 1, 1]]]]]]]]])).toBe(31);
	});

	it('should return factorial of given number', () => {
		expect(factorial(3)).toBe(6);
		expect(factorial(1)).toBe(1);
	});
});
