// Exercicio 1 - Calculo de Salario (teste = R$ 30/h, 160h)
const valorHora = 30;
console.log(`Exercicio 1: Amanda trabalhou por 160h, quanto ela recebeu? ${(160 * valorHora)}`)
console.log(`Exercicio 1: Amanda trabalhou por 200h, quanto ela recebeu? ${(200 * valorHora) }\n`)


// Exercicio 2 - Desconto de 10% (teste = 200)
function desconto(valorInicial) {
    return valorInicial * 0.1
}
function valorFinal (valorInicial) {
    return valorInicial - desconto(valorInicial)
}
console.log(`Exercicio 2: A jaqueta de R$$200 tera desconto de R$${(desconto(200))} e valor final de R$${valorFinal(200)}`)
console.log(`Exercicio 2: A jaqueta de R$$350 tera desconto de R$${(desconto(350))} e valor final de R$${valorFinal(350)}\n`)



// Exercicio 3 - Verificacao de maioridade (teste = 17)
const maioridade = 18
console.log(`Exercicio 3: Julia tem 17 anos, ela tem permissao para acessar ao site? ${(17 >= maioridade)}`)
console.log(`Exercicio 3: Julia tem 20 anos, ela tem permissao para acessar ao site? ${(20 >= maioridade)}\n`)


// Exercicio 4 - Verificacao de paridade (teste = 22)
function paridade(num) {
    if (num % 2 === 0) {
        console.log(`Exercicio 4: O numero ${num} eh par`)
    } else {
        console.log(`Exercicio 4: O numero ${num} eh impar`)
    }
}
paridade(22)
paridade(15)
console.log()


// Exercicio 5 - "==" vs "===" 
// Qual operador de comparacao deve ser utilizado para verificar os tipos? -> "==="


/* 
Exercicio 6 - Larissa e a festa
Larissa so sai se nao estiver chovendo e se ela tem guarda-chuva.
*/

function mamaePossoIr(chuva, guardaChuva) {
    if (!chuva || guardaChuva) {
        console.log("Exercicio 6: Larissa pode ir pra festa")
    } else {
        console.log("Exercicio 6: Larissa NAO pode ir pra festa")
    } 
}

mamaePossoIr(true, false) // esta chovendo e ela NAO tem guarda-chuva
mamaePossoIr(false, true) // NAO esta chovendo e ela tem guarda-chuva
mamaePossoIr(true, true) // esta chovendo e ela tem guarda-chuva
mamaePossoIr(false, false) // NAO esta chovendo e ela NAO tem guarda-chuva
console.log()

// Exercicio 7 - Media simples (teste = 6, 7.5, 8)
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}
function conceito(notaFinal) {
    const notaMinima = 7
    if (notaFinal >= notaMinima) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
let p1 = 6, p2 = 7.5, p3 = 8
notaFinal = media(p1, p2, p3)
console.log(`Exercicio 7: Notas parciais: ${p1}, ${p2} e ${p3}, Nota final: ${notaFinal}, Conceito: ${conceito(notaFinal)}`)
p1 = 10, p2 = 3, p3 = 6
notaFinal = media(p1, p2, p3)
console.log(`Exercicio 7: Notas parciais: ${p1}, ${p2} e ${p3}, Nota final: ${notaFinal}, Conceito: ${conceito(notaFinal)}\n`)


/* 
Exercicio 8 - Meia-entrada
Condicoes: ter menos de 21 anos OU ter carteira de estudante
teste 1 = 18 com carteira
teste 2 = 24 sem carteira
teste 3 = 26 com carteira
*/
function meiaEntrada(nome, idade, carteira) {
    if (idade < 21 || carteira) {
        console.log(`Exercicio 8: ${nome} pode pagar meia-entrada`)
    } else {
        console.log(`Exercicio 8: ${nome} NAO pode pagar meia-entrada`)
    }
}

meiaEntrada("Mariana", 18, true)
meiaEntrada("Carlos", 24, false)
meiaEntrada("Maria", 26, true)
console.log()


/* 
Exercicio 9 - Biblioteca
Condicoes: para acessar a biblio a pessoa precisa ser um aluno matriculado ou ser professor
*/

function acessoBiblio(matricula, ehProf) {
    if (matricula || ehProf) {
        console.log("Exercicio 9: Bem-vindo a biblioteca!")
    } else {
        console.log("Exercicio 9: Acesso negado.")
    }
}

acessoBiblio(false, true) // NAO esta matriculado mas eh professor
acessoBiblio(false, false) // NAO esta matriculado e NAO eh professor
acessoBiblio(true, false) // esta matriculado e NAO professor
