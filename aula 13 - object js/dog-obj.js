// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

let dog = {
    name: "Raio de sol",
    breed: "Golden",
    bark: function (){
        console.log("Woof!")
    }
}

console.log("\nPropriedades do doguinho: ");
console.log("-------------------------");
console.log(`Nome: ${dog.name}`);
console.log(`Raca: ${dog.breed}`);

console.log("\nFuncoes do doguinho: ");
console.log("--------------------");
console.log(`Latir: ${dog.bark()}`);