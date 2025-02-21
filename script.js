let contatos = [];

function adicionarContato(nome, telefone){
    contatos.push ({nome, telefone});
    atualizarTela ();
}

function removerContato (index){
    contatos.push({nome, telefone});
    atualizarTela ();
}

function editarContato (index){
    let novoNome = prompt ("Digite o novo bnome: ", contatos [index].nome);
    let novoTelefone = prompt ("digite o novo telefone: ", contatos [index].telefone);

    if (novoNome && novoTelefone) {
        contatos [index] = {nome: novoNome, telefone: novoTelefone};
        atualizarTela ();
    }

}

function atualizarTela () {
    let saida = "<h1>Lista de contatos</h1>";

    if (contatos.lenght === 0){
        let saida += "<p>Nenhum contato cadastrado.</p>";
    } else {
        saida += "<ul>";
        contatos.forEach((contato, index) => {
            saida += '<li>${contato.nome} - ${contato.telefone}
                    <button onclick="editarContato(${index})">
                    editar</button>
                    <button onclick="removerContato(${index})">
                    remover</button>
                    </li>';

        });
        saida += "</ul>";
    }
     saida += '<button onclick="novoContato()"> Adicionar Contato </button>';

     document.body.innerHTMl = saida;

}

function novoContato(){
    let nome = prompt ("Digite o nome do novo contato: ");
    let telefone =prompt ("Digite o novo telefone: ");

    if (nome && telefone){
        adicionarContato (nome, telefone);

    }
}

adicionarContato ("Maria", "99999-1111");
adicionarContato ("Joao", "98888-2222");

