class Node {
	constructor(val, prev = null, next = null) {
		this.val = val;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
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
	removeFromTail() {
		const poppedNode = this.tail;
		if (!this.tail) {
			throw new Error('List is empty');
		} else {
			this.tail = this.tail.prev;
			poppedNode.prev = null;
			this.size--;
			return poppedNode.val;
		}
	}
}

class Deque {
	constructor() {
		this.list = new DoublyLinkedList();
	}
	appendLeft(val) {
		this.list.addToHead(val);
	}
	appendRight(val) {
		this.list.addToTail(val);
	}
	popLeft() {
		return this.list.removeFromHead();
	}
	popRight() {
		return this.list.removeFromTail();
	}
	peekLeft() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty')
        }
		return this.list.head.val;
	}
	peekRight() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty')
        }
		return this.list.tail.val;
	}
	isEmpty() {
		return this.list.size === 0;
	}
}
