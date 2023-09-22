class Tarefa{
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = 'A fazer';
    }

    atualizarStatus(opc){
        if (opc === '1') {
            this.status = 'A fazer'
            console.log("Atualizado");
        } else if (opc === '2'){
            this.status = 'Em andamento'
            console.log("Atualizado");
        } else if (opc === '3'){
            this.status = 'Concluída'
            console.log("Atualizado");
        } else {
            console.log("Opção Invalida");
        }
    }

}

const readline = require('readline');
const listaTarefas = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciarMenu(){
    console.log('\n1 - Adicionar nova tarefa');
    console.log('2 - Exibir lista de tarefas');
    console.log('3 - Atualizar status de uma tarefa');
    console.log('4 - Excluir uma tarefa');
    console.log('5 - Sair do programa');

    rl.question('Escolha uma das opções: ', (entrada) => {
        
        switch (entrada) {
            case '1':
                
                rl.question('Entre com o titulo da tarefa: ', (titulo) => {
                    rl.question('Entre com a descrição: ', (descricao) => {
                                const tarefa = new Tarefa (titulo,descricao);
                                listaTarefas.push(tarefa)
                                console.log('Tarefa adicionado a lista!');
                                iniciarMenu()
                    });
                });
                break;
    
            case '2':
                console.log(listaTarefas);
                iniciarMenu()
                break;

            case '3':              
                rl.question('Entre com o titulo da tarefa: ', function(titulo) {
                    rl.question('Escolha o status: \n1-A Fazer \n2-Em Andamento \n3-Concluída\n', function(opc) {
                        for (let i = 0; i < listaTarefas.length; i++) {
                            if (listaTarefas[i].titulo === titulo){
                                listaTarefas[i].atualizarStatus(opc)
                                break
                            }   
                        }
                        iniciarMenu()
                    });
                });
                break;
            
            case '4':            
                rl.question('Entre com o titulo da tarefa: ', function(titulo) {
                        for (let i = 0; i < listaTarefas.length; i++) {
                            if (listaTarefas[i].titulo === titulo){
                                listaTarefas.splice(i,1)
                                console.log('Tarefa excluida');
                                break
                            }   
                        }
                        iniciarMenu()
                });
                break;
    
            case '5':
                console.log('Saindo do menu.');
                rl.close();
                break;
            
            default:
              console.log('Opção inválida.');
              iniciarMenu()
              break;
        }
    });

}

iniciarMenu()
