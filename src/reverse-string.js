export function reverseString(string) {
  if (typeof(string) !== "string") {
    throw new Error("Parameter must be a string");
  }
  
 return string.split("").reverse().join("");
}