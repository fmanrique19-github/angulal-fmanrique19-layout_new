const person1 = { hair: "brown", age: 23, children: ["a", "b", "c"] };
const person2 = { hair: "brown", age: 23, children: ["a", "b", "c"] };
const person3 = { hair: "blonde", age: 27, children: null };
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];
const nested1 = { a: { b: { c: { d: null } } } };
const nested2 = { a: { b: { c: { d: null } } } };
const nested3 = { a: { b: { c: { d: "bilal" } } } };
const s = "how are you";
const a = { s: s };
const b = { s: "how are you" };
const order1 = { a: "apple", b: "banana" };
const order2 = { b: "banana", a: "apple" };

const deepEqualsOrderMatters = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b);

const deepEquals = (a, b) => {
  if (a === b) {
    return true;
  } else if (
    a &&
    b &&
    typeof a === "object" &&
    typeof b === "object" &&
    Object.keys(a).length === Object.keys(b).length
  ) {
    if (Array.isArray(a) === Array.isArray(b)) {
      for (const key in a) {
        if (key in b) {
          if (!deepEquals(a[key], b[key])) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    }
  }
  return false;
};

export function compare() {
  console.log("Equals deepEqualsOrderMatters ");
  console.log(deepEqualsOrderMatters(person1, person2)); // true
  console.log(deepEqualsOrderMatters(person2, person3)); // false
  console.log(deepEqualsOrderMatters(array1, array2)); // true
  console.log(deepEqualsOrderMatters(array2, array3)); // false
  console.log(deepEqualsOrderMatters(nested1, nested2)); // true
  console.log(deepEqualsOrderMatters(nested2, nested3)); // false
  console.log(deepEqualsOrderMatters(order1, order2)); // false
  console.log(deepEqualsOrderMatters(a, b)); // true

  console.log("Equals deepEquals ");

  console.log(deepEquals(person1, person2)); // true
  console.log(deepEquals(person2, person3)); // false
  console.log(deepEquals(array1, array2)); // true
  console.log(deepEquals(array2, array3)); // false
  console.log(deepEquals(nested1, nested2)); // true
  console.log(deepEquals(nested2, nested3)); // false
  console.log(deepEquals(order1, order2)); // false
  console.log(deepEquals(a, b)); // true
  // throw new Error("No item repetition");
  return "No item duplicate found";
}
