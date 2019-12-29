// Given a string of words (x), you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lower case and all inputs will be valid

export function highWord(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  console.log("words: ", words);

  let l = words.map(word => word.split(""));
  console.log("l: ", l);

  l = l.map(arr =>
    arr.reduce((prev, char) => {
      console.log("char: ", char);
      console.log("alphabet.indexOf(char): ", alphabet.indexOf(char));
      console.log("prev: ", prev);

      return prev + alphabet.indexOf(char);
    }, 0)
  );

  console.log("l map reduce: ", l);

  const max = Math.max(...l);
  console.log("max: ", max);
  return x.split(" ")[l.indexOf(max)];
}

export function testHighWord() {
  console.log("Max: ", highWord("test test1 test2"));
}
