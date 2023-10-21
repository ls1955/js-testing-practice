import { capitalize } from "../src/capitalize";

test("capitalize of empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize of one letter", () => {
  expect(capitalize("t")).toBe("T");
});

test("capitalize of one downcase word", () => {
  expect(capitalize("tuna")).toBe("Tuna");
});

test("capitalize of a irregular case word", () => {
  expect(capitalize("tUNa")).toBe("Tuna");
});

test("capitalize of multiple irregular case words", () => {
  expect(capitalize("tUNa Yam hAM")).toBe("Tuna yam ham");
});

test("capitalize of string that have letters, digits and unicode characters", () => {
  expect(capitalize("tuna 123 💎")).toBe("Tuna 123 💎");
});
