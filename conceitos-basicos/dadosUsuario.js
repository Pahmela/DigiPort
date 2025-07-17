// Exercicio aula 4
const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const anoNascimento = 1980;
let anoAtual = 2010;
let idade = anoAtual - anoNascimento;
let altura = 1.8;
let peso = 84;
let imc = peso / (altura * altura);

// Concatenacao de strings e conversao para minusculas
// let str1 = nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg " + "\n";
// let str2 = "tem " + altura + " de altura e seu IMC eh de " + imc + "\n";
// let str3 = nome.split(' ')[0] + " " + sobrenome + "e nasceu em " + anoNascimento;
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase())

// Formatacao de string e apenas "nome comercial" minusculo
let nomeComercial = nome.split(' ')[0] + " " + sobrenome //primeiro e ultimo nome
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${altura} de altura e seu IMC eh de ${imc}`)
console.log(`${nomeComercial.toLowerCase()} ${sobrenome} e nasceu em ${anoNascimento}`)
