var challenge = "Suffering JavaScript everyday";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 9));
console.log(challenge.substring(9, 29));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));
console.log(challenge.replace("everyday", "sometimes"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("10"));  //74//
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log('No puedes terminar una oración con porque, porque, porque es una conjunción'.indexOf("porque"));
console.log("No puedes terminar una oración con porque, porque, porque es una conjunción".lastIndexOf("porque"));
console.log("No puedes terminar una oración con porque, porque, porque es una conjunción".search("porque"));
console.log(challenge.trimEnd());
console.log(challenge.startsWith("Suffering"));
console.log(challenge.endsWith("everyday"));
console.log(challenge.match("a"));
let part1 = "Suffering Javascript"
let part2 = "everyday"
let result = part1.concat(" ", part2);
console.log(result);
console.log(challenge.repeat(2));