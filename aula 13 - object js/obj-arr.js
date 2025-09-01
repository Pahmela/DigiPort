// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
    {name: "Sorvete", price: 20.0},
    {name: "Chocolate", price: 6.5},
    {name: "Acai", price: 28.78}
];

// for (let i = 0; i< market.length; i++) {
//     console.log(`Produto: ${market[i].name}, Preco: ${market[i].price}`);
// }

console.log("\nLista de produtos:");
console.log("------------------");
market.forEach( (item) => {
    console.log(`Produto: ${item.name}, Preco: ${item.price}`);
});