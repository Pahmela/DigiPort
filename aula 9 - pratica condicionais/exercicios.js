/* 1. Ferias
Definir destino das ferias de acordo com saldo em conta
Se saldo >= 15k -> Disney;
Se 15k > saldo >= 5k -> Minas Gerais;
Se saldo < 5k -> litoral gaucho.
*/

function destino(saldo) {
    if (saldo >= 15000) {
        console.log("1. Partiu Disney")
    } else if (saldo >= 5000) {
        console.log("1. Bora pra Minas Gerais")
    } else if (saldo < 5000) {
        console.log("1. Cidreira ai vou eu")
    } else {
        console.log("1. Saldo informado invalido")
    }
}

destino(20129);
destino(10129);
destino(2012.9);
destino("valor");
console.log("");


/* 2. Re/aprovado
Se media >= 7 -> Aprovado;
Se media < 7 -> reprovado.
*/

function aprovado(media) {
    if (media >= 7) {
        console.log("2. Aprovado!")
    } else if (media < 7) {
        console.log("2. Reprovado!")
    } else {
        console.log("2. Media informada invalida")
    }
}

aprovado(7);
aprovado(7.01);
aprovado(6.9);
aprovado("10");
aprovado("media");
console.log("");


/* 3. Presente
Definir seu presente de acordo com seu saldo em conta
Se saldo >= 10k -> Computador;
Se 10k > saldo >= 3k -> Smartphone;
Se saldo < 3k -> nada (vai economizar).
*/

function presente(saldo) {
    // if (saldo >= 10000) {
    //     console.log("3. Computador novo!")
    // } else if (saldo >= 3000) {
    //     console.log("3. Celular novo!")
    // } else if (saldo < 3000) {
    //     console.log("3. Melhor economizar...")
    // } else {
    //     console.log("3. Saldo informado invalido")
    // }

    switch (true) {
        case (saldo >= 10000):
            console.log("3. Computador novo!")
            break;
        case (saldo >= 3000):
            console.log("3. Celular novo!")
            break;
        case (saldo < 3000):
            console.log("3. Melhor economizar...")
            break;
        default:
            console.log("3. Saldo informado invalido.")
            break;
    }
}

presente(10129);
presente(3012.9);
presente(1012.9);
presente("valor");
console.log("");


/* 4. Medalha
Se tempo < 1min -> Ouro;
Se 1min < tempo < 2min -> Prata;
Se tempo >= 2min -> n-> Bronze.
*/

function medalha(tempo) {
    // if (tempo < 1) {
    //     console.log("4. Parabens, medalha de ouro!")
    // } else if (tempo < 2) {
    //     console.log("4. Parabens, medalha de prata!")
    // } else if (tempo > 2) {
    //     console.log("4. Parabens, medalha de bronze")
    // } else {
    //     console.log("4. Tempo informado invalido")
    // }

    switch (true) {
        case (tempo < 1):
            console.log("4. Parabens, medalha de ouro!")
            break;
        case (tempo < 2):
            console.log("4. Parabens, medalha de prata!")
            break;
        case (tempo >= 2):
            console.log("4. Parabens, medalha de bronze")
            break;
        default:
            console.log("4. Tempo informado invalido")
            break;
    }
}

medalha(0.9);
medalha(1);
medalha(2);
medalha("1min");
console.log("");


/* 5. Dia da semana
Indicar o dia de acordo com a ordem dos dias (domingo = 1)
*/

function queDiaEhHoje(dia) {
    switch (dia) {
        case 1:
            console.log("5. Hoje eh domingo")
            break;
        case 2:
            console.log("5. Hoje eh segunda")
            break;
        case 3:
            console.log("5. Hoje eh terca")
            break;
        case 4:
            console.log("5. Hoje eh quarta")
            break;
        case 5:
            console.log("5. Hoje eh quinta")
            break;
        case 6:
            console.log("5. Hoje eh sexta")
            break;
        case 7:
            console.log("5. Hoje eh sabado")
            break;
        default:
            console.log("5. Dia informado invalido")
            break;
    }
}

queDiaEhHoje(1);
queDiaEhHoje(2);
queDiaEhHoje(3);
queDiaEhHoje(4);
queDiaEhHoje(5);
queDiaEhHoje(6);
queDiaEhHoje(7);
queDiaEhHoje(3.4);
console.log("");


/* 6. Conceito
Indicar o classificacao de acordo com o conceito
*/

function classificacao(conceito) {
    switch (conceito.toUpperCase()) {
        case "A":
            console.log("6. Excelente")
            break;
        case "B":
            console.log("6. Bom")
            break;
        case "C":
            console.log("6. Regular")
            break;
        case "D":
            console.log("6. Ruim")
            break;
        case "F":
            console.log("6. Insuficiente")
            break;
        default:
            console.log("6. Conceito informado invalido")
            break;
    }
}

classificacao("a");
classificacao("B");
classificacao("C");
classificacao("d");
classificacao("f");
classificacao("FF");
console.log("");


/* 7. Estacao do ano
Indicar a estacao do ano de acordo com a ordem das estacoes (primavera = 1)
*/

function estacao(ordem) {
    switch (ordem) {
        case 1:
            console.log("7. Primavera")
            break;
        case 2:
            console.log("7. Verao")
            break;
        case 3:
            console.log("7. Outono")
            break;
        case 4:
            console.log("7. Inverno")
            break;
        default:
            console.log("7. Numero informado invalido")
            break;
    }
}

estacao(1);
estacao(2);
estacao(3);
estacao(4);
estacao(7.5);
console.log("");


/* 8. Desconto por cliente
Indicar o desconto que o cliente recebe de acordo com sua classificacao
*/

function desconto(cliente) {
    switch (cliente.toLowerCase()) {
        case "bronze":
            console.log("8. Cliente Bronze - 5% de desconto")
            break;
        case "prata":
            console.log("8. Cliente Prata - 10% de desconto")
            break;
        case "ouro":
            console.log("8. Cliente Ouro - 15% de desconto")
            break;
        case "platina":
            console.log("8. Cliente Platina - 20% de desconto")
            break;
        default:
            console.log("8. Cliente informado invalido")
            break;
    }
}

desconto("bronze");
desconto("Prata");
desconto("ouRO");
desconto("PLATINA");
desconto("diamante");
console.log("");
