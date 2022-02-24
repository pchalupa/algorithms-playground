import Node from './Node';

export default class BinnarySeachTree {
	public root?: Node;

	find(index: number) {
		let current = this.root;

		while (true) {
			console.log(current);
			if (!current) break;
			if (index === current?.index) return current;
			// @ts-ignore
			else if (index > current?.left?.index) {
				current = current?.left;
			} else {
				current = current?.right;
			}
		}
	}

	add(value: number) {
		if (!this.root) this.root = new Node(value);
		else {
			let current = this.root;
			while (true) {
				if (value < current.index) {
					if (current.left) current = current.left;
					else {
						current.left = new Node(value);
						break;
					}
				} else {
					if (current.right) current = current.right;
					else {
						current.right = new Node(value);
						break;
					}
				}
			}
		}

		return this;
	}

	get(index: number) {}

	delete(index: number) {}
}
