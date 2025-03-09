export function capitalizeFirstLetter(string){
  if(typeof string !== "string") {
    throw new Error("Parameter must be a string");
  }

 return string.split("").map((letter, index) => { return (index === 0) ? letter.toUpperCase() : letter}).join("");
}