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

// Add website to stack, continue adding for each site. 
// Once clicking back, pop that website off the stack making 
// the previous website the new head and the current location in the browser

// (Actually, use two stacks so that you can go both forward and backward when clicking through.
// when visiting new site, clear forward stack and add current url to back stack. When going back, pop current url from back stack
// and push it on forward stack, peek at back stack. Vice versa for going forward.)
