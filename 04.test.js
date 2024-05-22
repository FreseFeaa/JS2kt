const test = require("node:test");
const assert = require("node:assert");

const { factorial , sumOfFactorials  } = require("./04.js");

test("factorial done correctly", () => {
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(3), 6);
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(6), 720);
  });

  test("sum of factorials done correctly", () => {
    assert.strictEqual(sumOfFactorials(4), 33);
    assert.strictEqual(sumOfFactorials(1), 1);
    assert.strictEqual(sumOfFactorials(6), 873);
    assert.strictEqual(sumOfFactorials(8), 46233);
  });

