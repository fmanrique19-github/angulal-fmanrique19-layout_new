/**
 * Last In First Out (LIFO) with O(1) for key operations
 */
export class Stack<T> {
  private data: T[] = [];

  /** Adds the item in O(1) */
  push(item: T): void {
    this.data.push(item);
  }

  /**
   * Pops the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  pop(): T | undefined {
    return this.data.pop();
  }

  log() {
    console.log("size", this.size());
    this.data.forEach(item => console.log(item));
  }

  /**
   * Returns the number of elements in the stack in O(1)
   */
  size(): number {
    return this.data.length;
  }
}

export function testStack() {
  const testS = new Stack<String>();
  testS.push("test1");
  testS.push("test2");
  testS.push("test3");
  testS.push("test4");
  testS.push("test5");
  testS.log();
  testS.pop();
  testS.log();

  const testS2 = new Stack<{ code: Number }>();
  testS2.push({ code: 5 });
  testS2.push({ code: 5 });
  testS2.push({ code: 5 });
  testS2.push({ code: 5 });
  testS2.push({ code: 5 });
  testS2.log();
  testS2.pop();
  testS2.log();
}
