import { reverseString } from "../src/reverse_string";

test("reverse of empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverse of one letter", () => {
  expect(reverseString("t")).toBe("t");
});

test("reverse of one downcase word", () => {
  expect(reverseString("tuna")).toBe("anut");
});

test("reverse of a irregular case word", () => {
  expect(reverseString("tUNa")).toBe("aNUt");
});

test("reverse of multiple irregular case words", () => {
  expect(reverseString("tUNa Yam hAM")).toBe("MAh maY aNUt");
});

test("reverse of string that have letters, digits and unicode characters", () => {
  expect(reverseString("tuna 123 💎")).toBe("💎 321 anut");
});
