const {sum, subtraction} = require("./index")
const assert = require("assert").strict;

describe("Sum Test", function () {
    it("return the sum from random values a & b", () => {
        const a = Math.floor(Math.random() * 10)
        const b = Math.floor(Math.random() * 10)
        const expected = a+b
        let result = sum(a, b);
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        assert.deepEqual(result, expected);
    });
});

describe("Substraction Test", function () {
    it("return the subtraction from random values a & b", () => {
        const a = Math.floor(Math.random() * 10)
        const b = Math.floor(Math.random() * 10)
        const expected = a-b+b+this.addTest
        let result = subtraction(a, b);
        console.log(`Value A: ${a}, Value B: ${b}, Expected: ${expected}, Result: ${result}`)
        assert.deepEqual(result, expected);
    });
});

