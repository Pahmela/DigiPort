// Strings possuem indices

let umaString = "um texto" 
// indices ->    01234567

console.log(umaString[4])                           // Retorna char no indice indicado → t
console.log(umaString.charAt(4))                    // Retorna char no indice indicado → t
console.log(umaString.concat(" um", " texto", ""))  // Concatena varias strings → "Um texto um texto"
console.log(umaString.replace("um", "outro"))       // Substitui um pedaco da str por outro → "outro texto"
console.log(umaString.length)                       // Retorna o comprimento da string → 8
console.log(umaString.slice(0, 2))                  // Corta do índice 0 ao 2 (exclusivo) → "um"
console.log(umaString.slice(2, 4))                  // Corta do índice 2 ao 4 (exclusivo) → " t" (espaço + "t")
console.log(umaString.split(" "))                   // //Corta do índice 2 ao 4 (exclusivo) → " t" (espaço + "t")