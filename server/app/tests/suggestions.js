const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../index");

chai.use(chaiHttp);
chai.should();

describe("t9 word suggestions", () => {
  it("should return t9 real word suggestions", done => {
    chai
      .request(app)
      .get("/suggestions?numbers=43556&realWordsOnly=true")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql({
          words: ["hello"]
        });
        done();
      });
  });

  it("should return t9 fake word suggestions", done => {
    chai
      .request(app)
      .get("/suggestions?numbers=23")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql({
          words: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
        });
        done();
      });
  });

  it("should require parameter 'numbers'", done => {
    chai
      .request(app)
      .get("/suggestions")
      .end((err, res) => {
        res.should.have.status(400);
        res.error.text.should.be.eql("Numbers is a required parameter.");
        done();
      });
  });

  it("should not allow long input", done => {
    chai
      .request(app)
      .get("/suggestions?numbers=2222222222222")
      .end((err, res) => {
        res.should.have.status(400);
        res.error.text.should.be.eql(
          "Numbers numbers can only contain digits 2-9, maximum length is 10."
        );
        done();
      });
  });

  it("should not allow string input", done => {
    chai
      .request(app)
      .get("/suggestions?numbers=abc")
      .end((err, res) => {
        res.should.have.status(400);
        res.error.text.should.be.eql(
          "Numbers numbers can only contain digits 2-9, maximum length is 10."
        );
        done();
      });
  });
});
