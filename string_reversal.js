class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
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

// function reverseString(string) {
// 	let revString = '';
// 	let stack = new Stack();
// 	for (let char of string) {
// 		stack.push(char);
// 	}
// 	while (!stack.isEmpty()) {
// 		revString += stack.pop();
// 	}
// 	return revString;
// }

function balancedString(string) {
	let stack = new Stack();
	for (let char of string) {
		if (char in ['(', '[', '{']) {
			stack.push(char);
		} else if (char in [')', ']', '}']) {
			if (isClosingBracket(stack.peek(), char)) {
                stack.pop()
			} else {
                return false
            }
		}
	}
    if (stack.size > 0) {
        return false
    } else {
        return true
    }
}

function isClosingBracket(openB, closeB) {
	if (openB === '(') {
		return closeB === ')';
	} else if (openB === '[') {
		return closeB === ']';
	} else if (openB === '{') {
		return closeB === '}';
	}
}
