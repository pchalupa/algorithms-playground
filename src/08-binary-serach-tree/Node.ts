export default class Node {
	left?: Node;
	right?: Node;
	index: number;
	value?: unknown;

	constructor(index: number) {
		this.index = index;
	}
}
