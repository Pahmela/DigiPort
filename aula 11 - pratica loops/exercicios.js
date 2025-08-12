function paridade(prompt) {
    let inicio = prompt("Digite o numero em que deseja iniciar a contagem: ");
    let fim = prompt("Digite o numero em que deseja finalizar a contagem: ");
    for (num = inicio; num <= fim; num++) {
        if (num % 2 === 0) {
            console.log(`O numero ${num} eh par`)
        } else {
            console.log(`O numero ${num} eh impar`)
        }
    }
}


function contadorSemanal(prompt) {
    let total = 0;
    let quantidadeDoDia;

    for (let dia = 1; dia <= 7; dia++) {
        quantidadeDoDia = parseInt(prompt(`Quantas maca(s) voce colheu no ${dia}o dia? `));
        total += quantidadeDoDia;
        console.log(`Voce colheu ${quantidadeDoDia} maca(s) no ${dia}o dia`);
    }
    console.log(`E ao total, voce colheu ${total} maca(s) na semana`);
}


function contadorPositivosNegativosZeros(prompt) {
    let positivos = negativos = zeros = 0;
    const strNums = prompt("Informe os numeros que deseja identificar (separados por virgula): ");
    const listaNums = strNums.split(",");
    for (let num of listaNums) {
        if (num == 0) { zeros++; } 
        else if (num > 0) { positivos++; } 
        else if (num < 0) { negativos++; } 
        else { console.log(`Numero ${num} invalido`) }
    }
    return [positivos, negativos, zeros];
}


function contadorCores(prompt) {
    let cor;
    let verdes = vermelhas = 0
    let quantidadeFrutas = prompt("Digite o numero de frutas que deseja identificar: ");
    for (let i = 1; i <= quantidadeFrutas; i++) {
        cor = prompt(`A ${i} fruta eh verde ou vermelha? `);
        if (cor.toLowerCase() == "vermelha") { vermelhas++ }
        else if (cor.toLowerCase() == "verde") { verdes++ }
        else { console.log(`Cor ${cor} invalida`) }
    }
    return { vd: verdes, vm: vermelhas };
}


function somador(prompt){
    let soma = 0;
    let parcela;
    do {
        parcela = prompt("Informe um numero positivo que deseja adicionar a soma ou envive um numero negativo para saber a total somado: ");
        if (parcela >= 0) {
            soma += parseInt(parcela)
        }
    }
    while (parcela >= 0) 
    console.log(`A soma dos numeros informados eh ${soma}`); 
}


function validadorSenha(prompt) {
    let senha;
    const conncetPassword = 1234;
    do {
        senha = prompt("Digite sua senha: ");
    } while (senha != conncetPassword)
    console.log("Senha correta! Acesso concedido");
}


function pamBank(prompt) {
    let saldo = 1000
    let operacao;
    let parcela;

    let pamBankOn = true;
    console.log("Bem-vindo ao PamBank!");
    while (pamBankOn) {
        console.log("\nEscolha uma operacao:");
        console.log("---------------------");
        console.log("A: Verificar saldo;");
        console.log("B: Depositar; ");
        console.log("C: Sacar ");
        console.log("D: Sair ");
        operacao = prompt();
        if (typeof operacao !== "string") {
            console.log("Operacao invalida!");
            continue;
        }

        switch (operacao.toUpperCase()) {
            case "A":
                console.log(`Seu saldo atual eh de R${saldo}`)
                break;
            case "B":
                parcela = prompt("Quanto voce dejesa depositar? ");
                saldo += Number(parcela);
                console.log(`Deposito bem-sucedido! Saldo atual: R$${saldo}`)
                break;
            case "C":
                parcela = prompt("Quanto voce dejesa sacar? ");
                saldo -= Number(parcela);
                console.log(`Saque bem-sucedido! Saldo atual: R$${saldo}`)
                break;
            case "D":
                console.log("Obrigada por usar o PamBank, ate logo!")
                pamBankOn = false;
                break;
            default:
                console.log("Operacao invalida!")
                break;
        }
    }
}


function main() {
    const prompt = require("prompt-sync")()
    console.log("+------------------+");
    console.log("| Exercicios loops |");
    console.log("+------------------+");
    let testando = true
    while (testando) {
        console.log("\nEscolha o exercicio que deseja testar: ");
        console.log("1. Verificador de paridade");
        console.log("2. Contador semanal");
        console.log("3. Contador de positivos, negativos e zeros");
        console.log("4. Contador de cores");
        console.log("5. Somador");
        console.log("6. Validador de senha ");
        console.log("7. PamBank");
        console.log("8. Concluir testes")
        exercicio = prompt();

        switch (parseInt(exercicio)) {
            case 1:
                paridade(prompt);
                break;
            case 2:
                contadorSemanal(prompt);
                break;
            case 3:
                let [pos, neg, zer] = contadorPositivosNegativosZeros(prompt);
                console.log(`Dentre numeros informados, ha ${pos} positivo(s), ${neg} negativo(s) e ${zer} zero(s)`);
                break;
            case 4:
                let {vm, vd} = contadorCores(prompt);
                console.log(`Dentre as frutas identificadas, ha ${vd} verde(s) e ${vm} vermelha(s)`);
                break;
            case 5:
                somador(prompt);
                break;
            case 6:
                validadorSenha(prompt);
                break;
            case 7:
                pamBank(prompt);
                break;
            case 8:
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