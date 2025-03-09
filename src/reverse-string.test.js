import { reverseString } from "./reverse-string";

test("returns the string in reverse order", () => {
  expect(reverseString("string")).toMatch("gnirts");
})

test("returns another string in reverse order", () => {
  expect(reverseString("randomString")).toMatch("gnirtSmodnar");
})

test("throws error if parameter is not a string", () => {
  expect(() => reverseString(45)).toThrow("Parameter must be a string");
})