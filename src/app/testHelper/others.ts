export function reverseNew(arr: string[]) {
  console.log("before", arr);
  let arrNew: string[] = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    arrNew.push(arr[index]);
  }
}

export function testReverse() {
  return reverseNew(["3", "2", "1"]);
}
