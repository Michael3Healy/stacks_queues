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
    removeNode(val) {
        let prev = this.findPrev(val)
        if (!prev) {
            throw new Error('Node does not exist')
        } else if (prev.next === this.tail) {
            this.tail = prev;
            prev.next = null;
        } else {
            prev.next = prev.next.next
        }
        this.size--;
    }
    findPrev(val) {
        let cur = new Node(null, this.head)
        while (cur.next && cur.next.val != val) {
            cur = cur.next
        }
        if (cur === this.tail) {
            return null
        } else {
            return cur
        }
    }
    traverse(curNode, skips) {
        let cur = curNode
        for (let i = 0; i < skips; i++) {
            cur = cur.next
        }
        return cur
    }
}

function josephus(numPeople, skip) {
    let survivors = new LinkedList()
    for (let i = 1; i <= numPeople; i++) {
        survivors.addToTail(i)
    }
    survivors.tail.next = survivors.head
    let cur = new Node(null, survivors.head)
    while (survivors.size > 1) {
        cur = survivors.traverse(cur, skip)
        survivors.removeNode(cur.val)
    }
    return survivors.head.val
}