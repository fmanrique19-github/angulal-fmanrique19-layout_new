export class SingletonAlgo {
  private static instance: SingletonAlgo;
  private static testCount = 0;
  private constructor() {
    // do something construct...
  }
  static getInstance() {
    if (!SingletonAlgo.instance) {
      SingletonAlgo.instance = new SingletonAlgo();
      // ... any one time initialization goes here ...
      SingletonAlgo.testCount++;
    }
    return SingletonAlgo.instance;
  }
  getCount(): number {
    return SingletonAlgo.testCount;
  }
}

export function testSingletonAlgo() {
  // const something = new SingletonAlgo(); // Error: constructor of 'Singleton' is private.

  const instance1 = SingletonAlgo.getInstance();
  const instance2 = SingletonAlgo.getInstance();
  console.log("count instance1:", instance1.getCount());
  console.log("count instance2:", instance2.getCount());
}
