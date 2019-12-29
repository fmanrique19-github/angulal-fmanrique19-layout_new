/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determines if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */
export function areAnagrams(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split("")) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split("")) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}

export function areAnagramsNew(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split("")) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  console.log("charCount", charCount);
  const charCountNew = new Map<string, number>();

  const charCountNew2 = s1.split("").reduce((prev, current) => {
    prev.set(current, (prev.get(current) || 0) + 1);
    // prev
    return prev;
  }, new Map<string, number>());
  console.log("charCountNew2", charCountNew2);

  for (const char of s2.split("")) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}


export function areAnagrams2(s1: string, s2: string): boolean {
  const charArr1: string[] = s1.toLowerCase().split("");
  const charArr2: string[] = s2.toLowerCase().split("");

  const charSort1 = charArr1.sort();
  const charSort2 = charArr2.sort();

  console.log("Are anagrams?");
  console.log("s1", s1);
  console.log("s2", s2);

  console.log("charSort1", charSort1);
  console.log("charSort2", charSort2);

  const newS1: string = charSort1.join("");
  const newS2: string = charSort2.join("");

  console.log("newS1", newS1);
  console.log("newS2", newS2);

  return newS1 === newS2;
}
