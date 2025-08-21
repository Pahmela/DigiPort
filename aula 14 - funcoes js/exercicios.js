// 1. Calculadora
const calcula = (prompt) => {
    console.log("1. Calculadora");
    const num1 = parseFloat(prompt("Digite o primeiro numero: "));
    const num2 = parseFloat(prompt("Digite o segundo numero: "));
    const operacao = prompt("Digite a operacao (+, -, *, /): ");
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;      
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;    
            break;  
        case "/":
            if (num2 === 0) {
                console.log("Divisao por zero nao eh permitida.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            console.log("Operacao invalida.");
            return;
    }
    console.log(`Resultado: ${resultado}`);
}

// 2. Conversor de string para caixa alta
const converteString = (prompt) => {
    console.log("2. Conversor de string para caixa alta");
    const texto = prompt("Digite um texto: ");
    const palavras = texto.split(" ");
    const palavrasCaixaAlta = palavras.map(palavra => {return palavra.toUpperCase();});
    const resultado = palavrasCaixaAlta.join(" ");
    console.log(`Texto convertido: ${resultado}`);
}

// 3. Calculadora de idade
const calculaIdade = (prompt) => {
    console.log("3. Calculadora de idade");
    const anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    console.log(`Sua idade eh: ${idade} anos`);
}

// 4. Paridade de numeros
const paridade = (prompt) => {
    console.log("4. Paridade de numeros");
    const numero = parseInt(prompt("Digite um numero: "));
    if (numero % 2 === 0) {
        console.log("O numero eh par.");
    } else {
        console.log("O numero eh impar.");
    }
}

// 5. Media aritmetica
const mediaAritimetica = (prompt) => {
    console.log("5. Media aritmetica");
    const numeros = prompt("Digite os numeros separados por virgula: ");
    const listaNumeros = numeros.split(",").map(num => parseFloat(num.trim()));
    const soma = listaNumeros.reduce((acc, num) => acc + num, 0);
    const media = soma / listaNumeros.length;
    console.log(`A media aritmetica eh: ${media}`);
}

// Funcao que roda os exercicios
function main() {
    const prompt = require("prompt-sync")()
    console.log("+----------------------------+");
    console.log("| Exercicios Arrow Functions |");
    console.log("+----------------------------+");
    let testando = true
    while (testando) {
        console.log("\nEscolha o exercicio que deseja testar: ");
        console.log("1. Calculadora");
        console.log("2. Conversor de strings");
        console.log("3. Calculadora de idade");
        console.log("4. Paridade de numeros");
        console.log("5. Media aritmetica");
        console.log("6. Concluir testes")
        exercicio = prompt();

        switch (parseInt(exercicio)) {
            case 1:
                calcula(prompt);
                break;
            case 2:
                converteString(prompt);
                break;
            case 3:
                calculaIdade(prompt);
                break;
            case 4:
                paridade(prompt);
                break;
            case 5:
                mediaAritimetica(prompt);
                break;
            case 6:
                console.log("Encerrando testes... ate logo.")
                testando = false;
                break;
            default:
                console.log("Exercicio invalido\n")
                break;
        }
    }
}

main();