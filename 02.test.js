const test = require("node:test");
const assert = require("node:assert");

const { DividebyThreeUptoNum } = require("./02.js");

test("Divides by three to num", () => {
    assert.strictEqual(DividebyThreeUptoNum(40), '36912151821242730333639');
    assert.strictEqual(DividebyThreeUptoNum(30), '36912151821242730');
    assert.strictEqual(DividebyThreeUptoNum(20), '369121518');
    assert.strictEqual(DividebyThreeUptoNum(10), '369');
  });

