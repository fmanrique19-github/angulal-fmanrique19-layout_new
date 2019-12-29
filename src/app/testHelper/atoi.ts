export function atoiItemTest() {
  const a = "123";
  const b = "test";
  // console.log("a to i", parseInt(a, 10));
  // console.log("b to i", Number.parseInt(b) ? Number.parseInt(b) : "Not number");
  console.log(basicAtoi("123")); // 123
  console.log(basicAtoi("-123")); // -123
  console.log(basicAtoi("-123Extra")); // NaN
  console.log(basicAtoi("-123.456")); // NaN
  console.log(basicAtoi("Does not start with a digit 123")); // NaN

  console.log(atoiItemParseInt("123")); // 123
  console.log(atoiItemParseInt("-123")); // -123
}

export function basicAtoi(str: string): number {
  console.log("basicAtoi", str);
  if (/^\-?([0-9]+)$/.test(str)) {
    return Number.parseInt(str);
  }
  return NaN;
}

export function atoiItemParseInt(str: string): number {
  console.log("atoiItemParseInt", str);
  const zeroCode = "0".charCodeAt(0);

  let sign = 1;
  if (str[0] === "-") {
    str = str.substring(1);
    sign = -1;
  }

  let acc = 0;
  for (const char of str) {
    acc = acc * 10 + (char.charCodeAt(0) - zeroCode);
  }

  return sign * acc;
}
