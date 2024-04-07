/** Node: node for a queue. */

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	addToHead(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size++;
	}
	removeFromHead() {
		const poppedNode = this.head;
		if (!this.head) {
			throw new Error('Linked List is empty');
		} else if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			poppedNode.next = null;
		}
		this.size--;
		return poppedNode.val;
	}
	addToTail(val) {
		const newNode = new Node(val);
		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = this.tail.next;
		}
		this.size++;
	}
}

class Queue {
	constructor() {
		this.list = new LinkedList();
	}
	enqueue(val) {
		this.list.addToTail(val);
	}
	dequeue() {
		return this.list.removeFromHead();
	}
	peek() {
		return this.list.head.val;
	}
	isEmpty() {
		return this.list.size === 0;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = this.tail.next;
		}
		this.size++;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		const poppedNode = this.head;
		if (this.size === 0) {
			throw new Error('Queue is empty');
		} else if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			poppedNode.next = null;
		}
		this.size--;
		return poppedNode.val;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		return this.head.value;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Queue;
