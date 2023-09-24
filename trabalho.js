class Tarefa{
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = 'A fazer';
    }
}

class Gerenciador{
    listaTarefas = [];

    adicionarTarefa(tarefa){
        this.listaTarefas.push(tarefa)
        console.log('Tarefa adicionado a lista!');
    }

    exibirLista (){
        return this.listaTarefas
    }

    atualizarStatus(titulo,opc){
        for (let i = 0; i < this.listaTarefas.length; i++) {
            if (this.listaTarefas[i].titulo === titulo){
                if (opc === '1') {
                    this.listaTarefas[i].status = 'A fazer'
                    console.log("Atualizado");
                } else if (opc === '2'){
                    this.listaTarefas[i].status = 'Em andamento'
                    console.log("Atualizado");
                } else if (opc === '3'){
                    this.listaTarefas[i].status = 'Concluída'
                    console.log("Atualizado");
                } else {
                    console.log("Opção Invalida");
                }
                break
            }   
        }
    }

    excluirTarefa(titulo){
        for (let i = 0; i < this.listaTarefas.length; i++) {
            if (this.listaTarefas[i].titulo === titulo){
                this.listaTarefas.splice(i,1)
                console.log('Tarefa excluida');
                break
            }   
        }
    }
}

const readline = require('readline');
const gerenciador = new Gerenciador();

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
                                gerenciador.adicionarTarefa(tarefa)
                                iniciarMenu()
                    });
                });
                break;
    
            case '2':
                console.log(gerenciador.exibirLista());
                iniciarMenu()
                break;

            case '3':              
                rl.question('Entre com o titulo da tarefa: ', function(titulo) {
                    rl.question('Escolha o status: \n1-A Fazer \n2-Em Andamento \n3-Concluída\n', function(opc) {
                        gerenciador.atualizarStatus(titulo,opc)
                        iniciarMenu()
                    });
                });
                break;
            
            case '4':            
                rl.question('Entre com o titulo da tarefa: ', function(titulo) {
                        gerenciador.excluirTarefa(titulo)
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
