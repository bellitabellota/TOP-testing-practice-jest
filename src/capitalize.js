export function capitalize(string) {
  if (typeof(string) !== "string") {
    throw new Error("Parameter must be a string");
  }
 return string.toUpperCase();
}