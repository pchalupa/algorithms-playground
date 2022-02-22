import { describe, it, expect } from '@jest/globals';
import ArrayList from '.';

describe('Array list', () => {
	it('should create an array', () => {
		const array = new ArrayList();
		array.push('a').push('b').push('c').push('d');

		expect(array.get(0)).toBe('a');
		expect(array.get(1)).toBe('b');
		expect(array.get(2)).toBe('c');
		expect(array.get(3)).toBe('d');
	});

	it('should delte item from array', () => {
		const array = new ArrayList();
		array.push('a').push('b').push('c').push('d');
		array.delete(1);

		expect(array.get(1)).toBe('c');
	});

	it('should pop item from array', () => {
		const array = new ArrayList();
		array.push('a').push('b').push('c').push('d');

		expect(array.pop()).toBe('d');
	});

	it('should serializaze data', () => {
		const array = new ArrayList();
		array.push('a').push('b').push('c').push('d');

		expect(array.serialized()).toMatchInlineSnapshot(`
Object {
  "0": "a",
  "1": "b",
  "2": "c",
  "3": "d",
}
`);
	});
});
