export default class ArrayList {
	private data: Record<number, unknown> = {};
	private length: number = 0;

	push(value: unknown) {
		this.data[this.length] = value;
		this.length++;

		return this;
	}

	pop() {
		const value = this.data[this.length - 1];
		this.length--;

		return value;
	}

	get(index: number) {
		return this.data[index];
	}

	delete(index: number) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	serialized() {
		return this.data;
	}
}
