# Programação Orientada a Objetos (POO) em JavaScript

## O que é POO?
Programação Orientada a Objetos é um paradigma que organiza o código em **objetos**, facilitando o reuso e a manutenção.

---

## Principais Conceitos

### 1. Objeto
Um objeto é uma coleção de dados (propriedades) e funções (métodos).

```js
const animal = {
    nome: "Cachorro",
    falar: function() {
        console.log("Au au!");
    }
};
```

---

### 2. Classe
Classe é um molde para criar objetos com as mesmas propriedades e métodos.

```js
class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log("Au au!");
    }
}
```

---

### 3. Instância
Instância é um objeto criado a partir de uma classe.

```js
const rex = new Cachorro("Rex");
rex.falar(); // Au au!
```

---

### 4. Herança
Permite criar novas classes baseadas em outras, reutilizando código.

```js
class Cachorro extends Animal {
    cavar() {
        console.log("Cavando...");
    }
}
```

---

### 5. Encapsulamento
Controla o acesso aos dados do objeto, protegendo informações internas.

```js
class Conta {
    #saldo = 0; // privado
    depositar(valor) {
        this.#saldo += valor;
    }
}
```

---

### 6. Polimorfismo
Permite que métodos com o mesmo nome tenham comportamentos diferentes em classes diferentes.

```js
class Animal {
    falar() {
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("Au au!");
    }
}
```

---

## Resumo
- **Objeto:** conjunto de dados e funções.
- **Classe:** molde para objetos.
- **Instância:** objeto criado da classe.
- **Herança:** reaproveitamento de código.
- **Encapsulamento:** proteção dos dados.
- **Polimorfismo:** métodos com comportamentos diferentes.
