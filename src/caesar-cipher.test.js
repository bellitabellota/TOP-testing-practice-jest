import { caesarCipher } from "./caesar-cipher";

describe("caesar-cipher", () => {
  test("returns 'bcd' when given the string 'abc' and a shift factor of 2", () => {
    expect(caesarCipher("abc", 1)).toMatch("bcd");
  })

  test("returns 'abc' when given the string 'xyz' and a shift factor of 3", () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
  })

  test("returns 'KhOOr' when given the string 'HeLLo' and a shift factor of 3", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
  })

  test("returns 'KhOOr' when given the string 'HeLLo' and a shift factor of 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
  })
})