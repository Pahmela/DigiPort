// 1. Planner
const planner = (prompt) => {
    console.log("\nBem-vindo ao seu Planner");
    console.log("------------------------");

    let inPlanner = true
    let tarefas = []

    function adiciona(tarefa) {
        tarefas.push(tarefa.toLowerCase());
        console.log(`Tarefa <${(tarefas.indexOf(tarefa)+1)}. ${tarefa}> adicionada.`);
    }
    
    function remove(tarefaInformada) {
        const tarefa = tarefaInformada.toLowerCase();
        const indexTarefa = tarefas.indexOf(tarefa);
        if (tarefas.includes(tarefa)) {
            tarefas.splice(indexTarefa, 1);
            console.log(`Tarefa <${indexTarefa + 1}. ${tarefaInformada}> removida.`);
        } else {
            console.log(`Tarefa <${tarefaInformada}> nao encontrada no seu planner.`);
        }
    }
    
    while (inPlanner) {
        console.log("Digite a opccao desejada: ");
        console.log("1. Adicionar tarefa");
        console.log("2. Remover tarefa");
        console.log("3. Sair");
        operacao = prompt();
        switch (parseInt(operacao)) {
            case 1:
                const novaTarefa = prompt("Digite a tarefa que deseja adicionar: ");
                adiciona(novaTarefa);
                break;
            case 2:
                const tarefaLixo = prompt("Digite a tarefa que deseja remover: ");
                remove(tarefaLixo);
                break
            case 3:
                console.log("Fechando Planner... ate logo.")
                inPlanner = false;
                break;
            default:
                console.log("Opcao invalida\n")
                break;
        }
    }
}

// 2. Lista de Compras
const listarCompras = (prompt) => {
    console.log("\nBem-vindo a sua Lista de Compras");
    console.log("--------------------------------");
    
    let listando = true
    let listaCompras = []

    function adiciona(item) {
        listaCompras.push(item.toLowerCase());
        console.log(`Item <${(listaCompras.indexOf(item)+1)}. ${item}> adicionado a sua lista de compras.`);
    }
    
    function remove(itemInformado) {
        const item = itemInformado.toLowerCase();
        const indexItem = listaCompras.indexOf(item);
        if (listaCompras.includes(item)) {
            listaCompras.splice(indexItem, 1);
            console.log(`Item <${indexItem + 1}. ${itemInformado}> removido da sua lista de compras.`);
        } else {
            console.log(`Item <${itemInformado}> nao encontrado na sua lista de compras.`);
        }
    }
    
    function mostra() {
        console.log("\nSua lista de compras:");
        listaCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
        console.log("");
    }

    while (listando) {
        console.log("Digite a opccao desejada: ");
        console.log("1. Adicionar item");
        console.log("2. Remover item");
        console.log("3. Mostrar lista");
        console.log("4. Sair");
        operacao = prompt();
        switch (parseInt(operacao)) {
            case 1:
                const novoItem = prompt("Digite o item que deseja adicionar: ");
                adiciona(novoItem);
                break;
            case 2:
                const itemLixo = prompt("Digite o item que deseja remover: ");
                remove(itemLixo);
                break
            case 3:
                mostra();
                break;
            case 4:
                console.log("Fechando Lista de Compras... ate logo.")
                listando = false;
                break;
            default:
                console.log("Opcao invalida\n")
                break;
        }
    }
}

// Funcao que roda os exercicios
function main() {
    const prompt = require("prompt-sync")()
    console.log("+--------------------+");
    console.log("| Exercicios Funcoes |");
    console.log("+--------------------+");
    let testando = true
    while (testando) {
        console.log("\nEscolha o exercicio que deseja testar: ");
        console.log("1. Planner");
        console.log("2. Lista de Compras");
        console.log("3. Sair");
        exercicio = prompt();

        switch (parseInt(exercicio)) {
            case 1:
                planner(prompt);
                break;
            case 2:
                listarCompras(prompt);
                break;
            case 3:
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