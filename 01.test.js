const test = require("node:test");
const assert = require("node:assert");

const { WordWithoutAaOo } = require("./01.js");

test("Works with capital A and O", () => {
    assert.strictEqual(WordWithoutAaOo('Арзбуз'), 'рзбуз');
    assert.strictEqual(WordWithoutAaOo('Овощ'), 'вщ');
    assert.strictEqual(WordWithoutAaOo('АЭО'), 'Э');
  });

  test("Works with  a and o", () => {
    assert.strictEqual(WordWithoutAaOo('арка'), 'рк');
    assert.strictEqual(WordWithoutAaOo('олень'), 'лень');
    assert.strictEqual(WordWithoutAaOo('ладонь'), 'лднь');
  });
  