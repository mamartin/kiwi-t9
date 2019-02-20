const fs = require("fs");

const keypad = {
  2: "(a|b|c)",
  3: "(d|e|f)",
  4: "(g|h|i)",
  5: "(j|k|l)",
  6: "(m|n|o)",
  7: "(p|q|r|s)",
  8: "(t|u|v)",
  9: "(w|x|y|z)"
};

module.exports = function(app) {
  app.get("/suggestions", (req, res) => {
    if (!req.body.numbers) {
      return res.status(400).send("Numbers is a required parameter.");
    }

    const numbers = req.body.numbers;
    // @TODO validate

    const allWords = fs
      .readFileSync("./app/wordlists/en.txt", "utf8")
      .split("\n");
    const words = [];

    let wordPattern = "^";

    numbers.split("").forEach(number => {
      wordPattern += keypad[number];
    });

    wordPattern += "$";

    allWords.forEach(word => {
      if (RegExp(wordPattern).test(word)) {
        words.push(word);
      }
    });

    res.send({ numbers: req.body.numbers, words });
  });
};
