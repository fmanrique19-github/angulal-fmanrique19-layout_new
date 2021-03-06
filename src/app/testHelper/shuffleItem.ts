import { randomInt } from "./randomItem";

/**
 * Returns a shuffled version of the input array
 */

export function testShuffle() {
  shuffle(["a", "b", "c", "d", "e"]);
}

export function shuffle<T>(array: T[]): T[] {
  console.log("array", array);
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomChoiceIndex = randomInt(i, array.length);
    console.log("randomChoiceIndex", randomChoiceIndex);

    console.log(
      "i randomChoiceIndex array[i] array[randomChoiceIndex]",
      i,
      randomChoiceIndex,
      array[i],
      array[randomChoiceIndex]
    );
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    // console.log("array", array);
  }
  console.log("array", array);
  return array;
}
