import { capitalizeFirstLetter } from "./capitalize-first-letter";

test("capitalizes first letter", () => {
  expect(capitalizeFirstLetter("string")[0]).toMatch(/[A-Z]/);
})

test("does not change capitalization of other letters", () => {
  expect(capitalizeFirstLetter("rAnDoMsTrIng")).toMatch("RAnDoMsTrIng");
})

test("capitalizes any string", () =>
  expect(capitalizeFirstLetter("anyString")).toMatch("AnyString")
)

test("throws error if parameter is not a string", () => {
  expect(() => capitalizeFirstLetter(45)).toThrow(Error);
})