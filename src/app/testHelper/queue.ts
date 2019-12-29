export class Queue<T> {
  private data: T[] = [];

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data.push(item);
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    return this.data.shift();
  }

  size(): number {
    return this.data.length;
  }

  log() {
    console.log("size", this.size());
    console.log("data", this.data);
    this.data.forEach((item, x) => console.log(item, x));
  }
}

export function testQueue() {
  const testS = new Queue<String>();
  testS.enqueue("test1");
  testS.enqueue("test2");
  testS.enqueue("test3");
  testS.enqueue("test4");
  testS.enqueue("test5");
  testS.log();
  testS.dequeue();
  testS.log();

  // setInterval(() => {
  //   testS.dequeue();
  //   testS.log();
  // }, 300);
  // setTimeout(() => {
  //   testS.dequeue();
  //   testS.log();
  // }, 3000);

  // const testS2 = new Queue<{ code: Number }>();
  // testS2.enqueue({ code: 1 });
  // testS2.enqueue({ code: 2 });
  // testS2.enqueue({ code: 3 });
  // testS2.enqueue({ code: 4 });
  // testS2.enqueue({ code: 5 });
  // testS2.log();
  // testS2.dequeue();
  // testS2.log();
}
