const numbersToRealWords = require("../utils/numbersToRealWords")
const numbersToFakeWords = require("../utils/numbersToFakeWords")

module.exports = function suggestions(app) {
  app.get("/suggestions", (req, res) => {
    const { numbers, realWordsOnly } = req.query

    if (numbers === undefined) {
      return res.status(400).send("Numbers is a required parameter.")
    }
    if (!RegExp("^[2-9]{0,10}$").test(numbers)) {
      return res
        .status(400)
        .send(
          "Numbers numbers can only contain digits 2-9, maximum length is 10.",
        )
    }

    // @TODO validate

    const words =
      realWordsOnly === "true"
        ? numbersToRealWords(numbers)
        : numbersToFakeWords(numbers)

    return res.send({ numbers: req.body.numbers, words })
  })
}
