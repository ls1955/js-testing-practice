import { calculator } from "../src/calculator";

describe("calculator could add two number", () => {
  test("1 + 2 == 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
});

describe("calculator could subtract two number", () => {
  test("1 - 2 == -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
});

describe("calculator could multiply two number", () => {
  test("3 * 7 == 21", () => {
    expect(calculator.multiply(3, 7)).toBe(21);
  });
});

describe("calculator could divide two number", () => {
  test("10 / 3 == 3.33", () => {
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
  });
});
