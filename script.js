let contatos = [];

function adicionarContato(nome, telefone) {
    contatos.push({ nome, telefone });
    atualizarTela();
}

function removerContato(index) {
    contatos.splice(index, 1); 
    atualizarTela();
}

function editarContato(index) {
    let novoNome = prompt("Digite o novo nome: ", contatos[index].nome);
    let novoTelefone = prompt("Digite o novo telefone: ", contatos[index].telefone);

    if (novoNome && novoTelefone) {
        contatos[index] = { nome: novoNome, telefone: novoTelefone };
        atualizarTela();
    }
}

function atualizarTela() {
    let saida = "<h1>Lista de contatos</h1>";

    if (contatos.length === 0) {
        saida += "<p>Nenhum contato cadastrado.</p>";
    } else {
        saida += "<ul>";
        contatos.forEach((contato, index) => {
            saida += `<li>${contato.nome} - ${contato.telefone}
                    <button onclick="editarContato(${index})">
                    Editar</button>
                    <button onclick="removerContato(${index})">
                    Remover</button>
                    </li>`;
        });
        saida += "</ul>";
    }
    saida += '<button onclick="novoContato()">Adicionar Contato</button>';

    document.body.innerHTML = saida;
}

function novoContato() {
    let nome = prompt("Digite o nome do novo contato: ");
    let telefone = prompt("Digite o telefone do novo contato: ");

    if (nome && telefone) {
        adicionarContato(nome, telefone);
    }
}


adicionarContato("Maria", "99999-1111");
adicionarContato("João", "98888-2222");
