// import { stringify } from "@angular/core/src/util";

/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
export function repeatedItemLoops<T>(array: T[]): string {
  array.forEach(i => console.log("item array", i));

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return String(array[i] + " is a duplicate item");
      }
    }
  }
  return "No item duplicate found";
}

/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
export function repeatedItem<T>(array: T[]): string {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) {
      return String(item + " is a duplicate item");
    } else {
      set.add(item);
    }
  }
  // throw new Error("No item repetition");
  return "No item duplicate found";
}
