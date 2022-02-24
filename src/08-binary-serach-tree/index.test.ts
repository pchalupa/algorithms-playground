import { describe, it, expect } from '@jest/globals';
import BinnarySearchTree from '.';

describe('Binnary search tree', () => {
	it('should create linked list', () => {
		const tree = new BinnarySearchTree();

		tree.add(8).add(4).add(12).add(3);

		expect(tree).toMatchInlineSnapshot(`
BinnarySeachTree {
  "root": Node {
    "index": 8,
    "left": Node {
      "index": 4,
      "left": Node {
        "index": 3,
      },
    },
    "right": Node {
      "index": 12,
    },
  },
}
`);
		console.log(tree.find(4));
	});
});
