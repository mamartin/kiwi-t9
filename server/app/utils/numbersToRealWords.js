const fs = require("fs")

const keypad = {
  2: "(a|b|c)",
  3: "(d|e|f)",
  4: "(g|h|i)",
  5: "(j|k|l)",
  6: "(m|n|o)",
  7: "(p|q|r|s)",
  8: "(t|u|v)",
  9: "(w|x|y|z)",
}

const numbersToRealWords = numbers => {
  const allWords = fs.readFileSync("./app/wordlists/en.txt", "utf8").split("\n")
  const words = []
  let wordPattern = "^"

  numbers.split("").forEach(number => {
    wordPattern += keypad[number]
  })

  wordPattern += "$" // @TODO add as a param

  allWords.forEach(word => {
    if (RegExp(wordPattern).test(word)) {
      words.push(word)
    }
  })
  return words
}

module.exports = numbersToRealWords
