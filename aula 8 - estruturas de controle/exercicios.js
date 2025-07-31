/* 1. Maior e menor 
input: 3 inteiros
imprime: o maior e o menor
*/

let n1 = 23, n2 = 33, n3 = 3;
let biggest = smallest = n1;
if (n3 >= n2) {
    if (n3 >= n1) {
        biggest = n3
        if (n2 <= n1) {
            smallest = n2;
        }
    } else {
        smallest = n2;
    }    
} else if (n2 >= n1) {
    biggest = n2;
    if (n3 <= n1) {
        smallest = n3;
    }
}
console.log(`1. Dos numeros ${n1}, ${n2} e ${n3}, o maior eh ${biggest} e o menor eh ${smallest}`)


function smallestBiggest(nums) {
    let smallest = biggest = nums[0];
    for (let i in nums) {
        if (nums[i] < smallest) {
            smallest = nums[i];
        } else if (nums[i] > biggest) {
            biggest = nums[i];
        }
    }
    console.log(`1. Dos numeros ${nums}, o maior eh ${biggest} e o menor eh ${smallest}`);
}

let numsList = [7,4,5,6];
smallestBiggest(numsList);


/* 2. Positivo, negativo ou zero
input: 1 inteiro
imprime: se o numero eh positivo, negativo ou zero
*/

function esseNumEh(n) {
    if (n === 0) {
        console.log(`2. O numero ${n} eh igual a zero`);
    } else if (n > 0) {
        console.log(`2. O numero ${n} eh positivo`);
    } else if (n < 0) {
        console.log(`2. O numero ${n} eh negativo`);
    } else {
        console.log(`2. O valor (${n}) eh invalido`);
    }
}

esseNumEh(-21);
esseNumEh(3902321);
esseNumEh(0);
esseNumEh("boo");


/* 3. Em que turno voce estuda?
input: char representando o turno
imprime: saudacao de acordo com o turno
*/

function saudacao (turno) {
    switch (turno.toLowerCase()) {
        case "m":
            console.log(`3. Bom dia!`);
            break;
        case "v":
            console.log(`3. Boa tarde!`);
            break;
        case "n":
            console.log(`3. Boa noite!`);
            break;
        default:
            console.log(`3. Turno invalido`);
            break;
    }
}

saudacao("m");
saudacao("V");
saudacao("n");
saudacao("noturno");
  
