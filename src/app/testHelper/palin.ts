/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 * test tset
 */

/**
 * Returns true if the string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  console.log("Is Palindrome?", str);

  const reversed = str
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  return reversed === str.toLowerCase();
}

/**
 * Returns true if ANY permutation of the string is a palindrome
 * civic true
 * vicic true
 * toot true
 * toto true
 * civil false
 * aadmm mmdaa aadmm madam
 */
export function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split("").forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char);
    } else {
      unmatched.add(char);
    }
  });
  return unmatched.size <= 1;
}
