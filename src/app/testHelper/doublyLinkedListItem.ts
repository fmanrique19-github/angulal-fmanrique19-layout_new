/**
 * Linked list node
 */
export interface DoublyLinkedListNode<T> {
  value: T;
  next?: DoublyLinkedListNode<T>;
  prev?: DoublyLinkedListNode<T>;
}

/**
 * Linked list for items of type T
 */
export class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T> = undefined;
  public tail?: DoublyLinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node: DoublyLinkedListNode<T> = {
      value,
      next: undefined,
      prev: undefined
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | undefined {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
      return value;
    }
  }

  /**
   * LIFO removal in O(1)
   */
  pop(): T | undefined {
    if (this.tail) {
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = undefined;
      } else {
        this.tail.next = undefined;
      }
      return value;
    }
  }

  /**
   * Returns an iterator over the values
   */
  *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  log() {
    console.log("list.values");
    Array.from(this.values()).forEach(item => console.log(item));
  }
}

export function testDoublyLinkedListNode() {
  const list = new DoublyLinkedList<number>();
  list.add(1);
  list.add(10);
  list.add(5);

  list.log();
  console.log("item dequeue", list.dequeue());
  list.log();
  console.log("item dequeue", list.dequeue());
  list.log();
  console.log("item dequeue", list.dequeue());
  list.log();
  console.log("item dequeue", list.dequeue());
  list.log();
  list.add(5);
  list.add(10);
  list.add(1);
  list.log();
  console.log("item dequeue", list.pop());
  list.log();
  console.log("item dequeue", list.pop());
  list.log();
  // expect(list.pop()).toBe(1);
  // expect(list.dequeue()).toBe(5);
  // expect(list.pop()).toBe(10);
  // expect(list.pop()).toBe(undefined);
  // expect(list.dequeue()).toBe(undefined);
  // expect(Array.from(list.values())).toMatchObject([]);
}
