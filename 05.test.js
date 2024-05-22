const test = require("node:test");
const assert = require("node:assert");

const { isPalindrome } = require("./05.js");

test("Checking whether it is a palindrome or not", () => {
    assert.strictEqual(isPalindrome('Потоп'), true);
    assert.strictEqual(isPalindrome('Квас'), false);
    assert.strictEqual(isPalindrome('шалАШ'), true);
    assert.strictEqual(isPalindrome('А роза упала на лапу Азора'), true);
  });

