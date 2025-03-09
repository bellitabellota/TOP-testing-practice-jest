import {capitalize} from "./capitalize.js";

test("returns a string", () => {
  expect(typeof capitalize("string")).toBe("string");
})

test("capitalizes all letters in 'all caps'", () => {
  expect(capitalize("all caps")).toMatch(/ALL CAPS/);
})

test("capitalizes all letters in 'Title Case'", () => {
  expect(capitalize("Title Case")).toMatch(/TITLE CASE/);
})

test("throws error when input is not a string", () => {
  expect(() => capitalize(3)).toThrow("Parameter must be a string");
})