const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))))
const cartesianProduct = (a, b, ...c) =>
  b ? cartesianProduct(f(a, b), ...c) : a

const keypad = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
}

const getKeypadCharsFromNumbers = numbers =>
  numbers.split("").map(number => keypad[number].split(""))

const getFakeWordsFromNumbers = numbers => {
  if (numbers === "") {
    return []
  }

  const keypadChars = getKeypadCharsFromNumbers(numbers)

  const charsCartesianProduct = cartesianProduct(...keypadChars)
  const words = charsCartesianProduct.map(x => Array.prototype.join.call(x, ""))

  return words
}
module.exports = getFakeWordsFromNumbers
