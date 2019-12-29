const compareMatrix = (a, b) => {
  console.log("a", a, "b", b);
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return a === b;
  }
  let out = true;
  for (let index = 0; index < Math.max(a.length, b.length); index++) {
    if (out) {
      out = compareMatrix(a[index], b[index]);
    } else {
      return false;
    }
  }
  return out;
};

export function compareMatrixTest() {
  console.log(
    "compareMatrixTest ",
    compareMatrix([], []) === true,
    compareMatrix([[]], [[]]) === true,
    compareMatrix([[1]], [[1]]) === true,
    compareMatrix([[1, 2, 3]], [[1, 2, 3]]) === true,
    compareMatrix([[1, 2, 3]], [[1, 2, "3"]]) === true,
    compareMatrix(
      [[[1], 2, [3, 2, 2, [1, 2, 3]]]],
      [[[1], 2, [3, 2, 2, [1, 2, 3]]]]
    ) === true
  );
}
