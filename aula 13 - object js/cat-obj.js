// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.


let cat = {    
    name: "Pata fofa",
    color: "Laranja",
    age: 1
};

console.log("Propriedades do gatinho: ");
console.log("------------------------");
console.log(`Nome: ${cat.name}`);
console.log(`Cor: ${cat.color}`);
console.log(`Idade: ${cat.age}`);

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat.toy = "Box";
cat.age += 1;

console.log(`Brinquedo: ${cat.toy}`);
console.log(`Idade: ${cat.age}`);

console.log("-----------------------\n");
console.log("Printando o objeto 'cat':");
console.log(cat);