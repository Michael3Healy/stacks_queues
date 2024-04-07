/** Node: node for a stack. */

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.array = []
	}

	push(val) {
		this.array.push(val)
	}

	pop() {
		return this.array.pop()
	}

	peek() {
		return this.array[this.array.length - 1]
	}

	isEmpty() {
		return this.array.length === 0;
	}
}

class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const node = new Node(val, this.head);
		this.head = node;
		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (this.size < 1) {
			throw new Error('Stack is empty');
		} else {
			const poppedNode = this.head;
			this.head = this.head.next;
			poppedNode.next = null;
			return poppedNode.val;
		}
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this.head.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Stack;
