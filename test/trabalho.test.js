const { expect } = require('chai');
const { Tarefa, Gerenciador } = require('../src/trabalho');

describe('Gerenciador de tarefas', () => {
    let listaTarefas_esperada = [];
    let gerenciador = new Gerenciador();
    let tarefa1 = new Tarefa('Tarefa1', 'Descrição1')
    let tarefa2 = new Tarefa('Tarefa2', 'Descrição2')
    let tarefa3 = new Tarefa('Tarefa3', 'Descrição3')

    beforeEach(function () {
        listaTarefas_esperada = []
        gerenciador.listaTarefas = []

        listaTarefas_esperada.push(tarefa1)
        listaTarefas_esperada.push(tarefa2)
        listaTarefas_esperada.push(tarefa3)

        gerenciador.adicionarTarefa(tarefa1)
        gerenciador.adicionarTarefa(tarefa2)
        gerenciador.adicionarTarefa(tarefa3)
    });

    it('Adicionar uma tarefa, OK', () => {
        const tarefa = new Tarefa('Teste', 'Descrição');

        listaTarefas_esperada.push(tarefa)
        gerenciador.adicionarTarefa(tarefa)

        expect(listaTarefas_esperada).to.contain(tarefa);
    });

    it('Visualizar tarefas, OK', () => {
        expect(listaTarefas_esperada).deep.to.equal(gerenciador.exibirLista())
    });

    it('Atualizar , OK', () => {
        let nome_tarefa = 'Tarefa2'
        let index_tarefa = gerenciador.procurarTarefa(nome_tarefa)
        let tarefa = gerenciador.listaTarefas[index_tarefa]
        gerenciador.atualizarStatus(nome_tarefa, '2')

        expect(tarefa.status).to.equal('Em andamento');
    });

    it('Atualizar tarefas, Status inválido', () => {
        let nome_tarefa = 'Tarefa1'
        let resposta = gerenciador.atualizarStatus(nome_tarefa, '5')

        expect(resposta).to.equal("Opção Invalida");
    });

    it('Excluir tarefas, OK', () => {
        gerenciador.excluirTarefa('Tarefa1');

        expect(gerenciador.listaTarefas).to.not.contain(tarefa1);
    });

    it('Procurar tarefas, tarefa não encontrada', () => {
        let nome_tarefa = 'TarefaNãoExistente'
        let index_tarefa = gerenciador.procurarTarefa(nome_tarefa)

        expect(index_tarefa).to.equal(-1);
    });

});

