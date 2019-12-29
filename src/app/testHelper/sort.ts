const words = ["B", "hello", "apple", "A", "candy"];
const nums = [3, 0, 1, 4, 7, 22, 100, 9];

export function sortMethod() {
  words.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  console.log("words", words);
  console.log("nums", nums);
  nums.sort((a, b) => {
    console.log("a b a - b", a, b, a - b);
    return a - b;
  });
  console.log("nums", nums);
}
