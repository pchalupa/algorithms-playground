import { describe, it, expect } from '@jest/globals';
import LinkedList from '.';

describe('Linked list', () => {
	it('should create linked list', () => {
		const list = new LinkedList();

		list.push('a').push('b').push('c').push('d');

		expect(list.get(1)).toBe('b');
		expect(list.lenght).toBe(4);
	});

	it('should inster value to the list', () => {
		const list = new LinkedList();

		list.push('a').push('b').push('c').push('e');
		list.insert(3, 'd');

		expect(list.get(2)).toBe('c');
		expect(list.get(3)).toBe('d');
		expect(list.get(4)).toBe('e');
		expect(list.lenght).toBe(5);
	});

	it('should pop value from the list', () => {
		const list = new LinkedList();

		list.push('a').push('b').push('c').push('d');

		expect(list.pop()).toBe('d');
		expect(list.lenght).toBe(3);
	});

	it('should delete item from list', () => {
		const list = new LinkedList();

		list.push('a').push('b').push('c').push('d');
		list.delete(1);

		expect(list.get(1)).toBe('c');
		expect(list.lenght).toBe(3);
	});
});
