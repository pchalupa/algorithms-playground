import Node from './Node';

export default class LinkedList {
	private head?: Node;
	private tail?: Node;
	public lenght: number = 0;

	private find(index: number) {
		let item = this.head;

		for (let i = 0; i < this.lenght; i++) {
			if (i === index) return item;
			item = item?.next;
		}
	}

	push(value: unknown) {
		const node = new Node(value);

		if (!this.head) this.head = node;
		else if (this.tail) this.tail.next = node;

		this.tail = node;
		this.lenght++;

		return this;
	}

	insert(index: number, value: unknown) {
		if (index > this.lenght) return;
		const prevtNode = this.find(index - 1);
		const nextNode = this.find(index);
		const node = new Node(value, nextNode);

		if (prevtNode) prevtNode.next = node;
		this.lenght++;

		return this;
	}

	pop() {
		const item = this.tail;
		this.tail = this.find(this.lenght - 1);
		if (this.tail) {
			this.tail.next = undefined;
			this.lenght--;

			return item?.value;
		}
	}

	get(index: number) {
		const item = this.find(index);

		if (item) return item.value;

		return undefined;
	}

	delete(index: number) {
		if (index > this.lenght) return;
		const prevNode = this.find(index - 1);
		const nextNode = this.find(index + 1);

		if (prevNode) {
			prevNode.next = nextNode;
			this.lenght--;
		}

		return this;
	}
}
