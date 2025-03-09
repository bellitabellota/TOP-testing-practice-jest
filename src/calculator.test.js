import {calculator} from "./calculator.js";

test("calculator.add() sums 2 and 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
})

test("calculator.add() sums 13 and 12", () => {
  expect(calculator.add(13, 12)).toBe(25);
})

test("calculator.multiply multiplies 2 and 3", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
})

test("calculator.multiply multiplies 5 and 3", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
})

test("calculator.divide divides 6 by 3", () => {
  expect(calculator.divide(6, 3)).toBe(2);
})

test("calculator.divide divides 12 by 3", () => {
  expect(calculator.divide(12, 3)).toBe(4);
})

test("calculator.subtract subtracts 2 from 3", () => {
  expect(calculator.substract(3, 2)).toBe(1);
})

test("calculator.subtract subtracts 11 from 10", () => {
  expect(calculator.substract(10, 11)).toBe(-1);
})