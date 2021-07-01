const {sum, subtraction} = require("./index")
const assert = require("assert").strict;

describe("Sum Test", function () {
    it("return the sum from values a & b", () => {
        let res = sum(1, 2);
        assert.deepEqual(res, 3);
    });
});

describe("Substraction Test", function () {
    it("return the subtraction from values a & b", () => {
        let res = subtraction(2, 2);
        assert.deepEqual(res, 0);
    });
});

