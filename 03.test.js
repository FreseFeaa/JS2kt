const test = require("node:test");
const assert = require("node:assert");

const { createIterations } = require("./03.js");

test("Iterations is ok", () => {
    assert.strictEqual(createIterations(5), '1 12 123 1234 12345');
    assert.strictEqual(createIterations(10), '1 12 123 1234 12345 123456 1234567 12345678 123456789 12345678910');
    assert.strictEqual(createIterations(1), '1');
    assert.strictEqual(createIterations(7), '1 12 123 1234 12345 123456 1234567');
  });

