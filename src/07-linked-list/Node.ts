export default class Node {
	value: unknown;
	next?: Node;

	constructor(value: unknown, next?: Node) {
		this.value = value;
		this.next = next;
	}
}
