export class QueueOptimized<T> {
  private data: { [index: number]: T } = Object.create(null);
  private nextEnqueueIndex = 0;
  private lastDequeuedIndex = 0;

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.lastDequeuedIndex];
      delete this.data[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }

  log() {
    console.log("size", this.size());
    console.log("data", this.data);
    // this.data. .forEach((item, x) => console.log(item, x));
    Object.values(this.data).forEach((item, x) => console.log(item, x));
    Object.keys(this.data).forEach(key =>
      console.log("this.data[key] key", this.data[key], key)
    );
  }
}

export function testQueueOptimized() {
  const testS = new QueueOptimized<String>();
  testS.enqueue("test1");
  testS.enqueue("test2");
  testS.enqueue("test3");
  testS.enqueue("test4");
  testS.enqueue("test5");
  testS.log();
  testS.dequeue();
  testS.log();
}
