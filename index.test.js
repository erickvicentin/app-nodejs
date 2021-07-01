const {sum, subtraction} = require("./index")
const assert = require("assert").strict;
const crypto = require('crypto')

const buf = crypto.pseudoRandomBytes(2); // Compliant for security-sensitive use cases

let a = parseInt(buf[0]); let b = parseInt(buf[1])

describe("Sum Test", function () {
    it("return the sum from random values a & b", () => {
        const expected = a+b
        let result = sum(a, b);
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        assert.deepEqual(result, expected);
    });
});

describe("Substraction Test", function () {
    it("return the subtraction from random values a & b", () => {
        const expected = a-b
        let result = subtraction(a, b);
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        assert.deepEqual(result, expected);
    });
});

