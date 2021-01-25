const { test, expect } = require('@jest/globals');
const { add, substract,  multiply, divide } = require('../app');

// unit testing add
test("test add function", () => {
    expect(add(1 + 4 + 5 + 2 + 3)).toBe(15);
    expect(() => add(a + b + c + d + e)).toThrow(TypeError);
});

// unit testing substract
test("test substract function", () => {
    expect(substract(10 - 2 - 4)).toBe(4);
    expect(() => add(a - b - c)).toThrow(TypeError);
});

// unit testing multiply
test("test multiply function", () => {
    expect(multiply(3 * 5 * 8)).toBe(120);
    expect(() => add(a * b * c)).toThrow(TypeError);
});

// unit testing divide
test("test divide function", () => {
    expect(divide(100 / 5 / 2)).toBe(10);
    expect(() => add(a / b / c)).toThrow(TypeError);
});

