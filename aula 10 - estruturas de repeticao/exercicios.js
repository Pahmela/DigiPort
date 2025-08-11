// 1.1 Loop com map
const dict = {
  "Ana": "amora",
  "Beatriz": "baunilha",
  "Carla": "chocolate",
  "Daniela" : "danoninho"
};
for (nome in dict) {
    console.log(`1.1 O sorvete favorito da ${nome} eh ${dict[nome]}`)
}
console.log()


// 1.2 Loop com array de elementos complexos
const lista = [
    {nome: "Ana", sorvete: "amora"},
    {nome: "Beatriz", sorvete: "baunilha"},
    {nome: "Carla", sorvete: "chocolate"},
    {nome: "Daniela", sorvete: "danoninho"}
];
for (const elemento of lista) {
    console.log(`1.2 O sorvete favorito da ${elemento.nome} eh ${elemento.sorvete}`)
}
console.log()


// 1.3 Loop com string
const str = "Ana, amora; Beatriz, baunilha; Carla, chocolate; Daniela, danoninho"
const pares = str.split(';');
for (const par of pares) {
    let [nome, sorvete] = par.trim().split(',');
    console.log(`1.3 O sorvete favorito da ${nome} eh ${sorvete}`);
}

// 2.1 Loop 
for (i = 1; i <= 10; i++) {
    if ((i % 3) === 0) {
        console.log(`2.1 O recheio do ${i}o donout eh chocolate`)
    } else {
        console.log(`2.1 O recheio do ${i}o donout eh baunilha`)
    }
}
console.log()


// 3. Loop com saida de acordo com input
const prompt = require("prompt-sync")();
let emAtendimento = true
console.log("3. Bem-vindo a nossa lancheria!");
while (emAtendimento) {
    console.log("\nComo podemos te ajudar?");
    console.log("-----------------------");
    console.log("A: Ver cardapio");
    console.log("B: Realizar pedido");
    console.log("C: Falar com um atendente");
    console.log("D: Sair");
    opcao = prompt();
    
    if (typeof opcao !== "string") {
        console.log("\nOpcao invalida!");
        continue;
    }

    switch (opcao.toUpperCase()) {
        case "A":
            console.log("\nCardapio");
            console.log("--------");
            console.log("Hamburguer.......R$15,00");
            console.log("Dogao............R$12,00");
            console.log("Refri.............R$5,00");
            console.log("Agua..............R$5,00");
            console.log("Docinho...........R$2,00");
            break;
        case  "B":
            console.log("\nQual eh o seu pedido?");
            console.log("---------------------");
            pedido = prompt();
            console.log(`Pedido realizado com sucesso: ${pedido}`)
            break;
        case  "C":
            console.log(`\nIremos te direcionar para um dos nossos atendentes, por favor aguarde...`)
            console.log("------------------------------------------------------------------------");
            break;
        case  "D":
            console.log("\nAgradecemos pela preferencia, ate logo!")
            emAtendimento = false;
            break;
        default:
            console.log("\nOpcao invalida!")
            break;
    }
}
