import { clientes } from "../scripts/clientes.js";
import { produtos } from "../scripts/produtos.js";

let fecharJanela = document.querySelectorAll(".fechar");
let abrirJanela = document.querySelectorAll("#menu li");
const proximoCliente = document.querySelector("#botao-proximo");
const anteriorCliente = document.querySelector("#botao-anterior");
const botaoNovoCliente = document.querySelector("#botao-novo-cliente");
const botaoSalvarCliente = document.querySelector("#botao-salvar-cliente");
var clientesIndex = 1;

for(let i = 0; i < fecharJanela.length; i++) {
    fecharJanela[i].addEventListener("click", function() {
        document.querySelector("#janela-clientes").style.display = "none";
        document.querySelector("#janela-produtos").style.display = "none";
        document.querySelector("#janela-pedidos").style.display = "none";
    });
}

for(let i = 0; i < abrirJanela.length; i++) {
    abrirJanela[i].addEventListener("click", function(){
        if(abrirJanela[i].id == "menu-clientes") {
            document.querySelector("#janela-clientes").style.display = "flex";
            document.querySelector("#janela-produtos").style.display = "none";
            document.querySelector("#janela-pedidos").style.display = "none";
            dadosIniciaisCliente()
        } else if (abrirJanela[i].id == "menu-produtos") {
            document.querySelector("#janela-produtos").style.display = "flex";
            document.querySelector("#janela-clientes").style.display = "none";
            document.querySelector("#janela-pedidos").style.display = "none";
        } else {
            document.querySelector("#janela-pedidos").style.display = "flex";
            document.querySelector("#janela-clientes").style.display = "none";
            document.querySelector("#janela-produtos").style.display = "none";
        }
    });
}

function dadosIniciaisCliente(){
    clientesIndex = 1;
    document.querySelector("#codigo-cliente").value = clientes[0].codCliente;
    document.querySelector("#nome-cliente").value = clientes[0].nomeCliente;
    document.querySelector("#data-cadastro-cliente").value = clientes[0].dataCadCli;
}

function listarClientes(){
    if(clientesIndex > clientes.length || clientesIndex <= 0){
        dadosIniciaisCliente();
        alert("Fim do registro");
    } else {
        for(let cliente of clientes){
            if(cliente.codCliente == clientesIndex){
                var nomeCliente = cliente.nomeCliente;
                var dataCadastro = cliente.dataCadCli;
            }
        }
        document.querySelector("#codigo-cliente").value = clientesIndex;
        document.querySelector("#nome-cliente").value = nomeCliente;
        document.querySelector("#data-cadastro-cliente").value = dataCadastro;
    }
}

proximoCliente.addEventListener("click", function(){
    clientesIndex += 1;
    listarClientes();
})

anteriorCliente.addEventListener("click", function(){
    clientesIndex -= 1;
    listarClientes();
})

function novoCliente(){
    document.querySelector("#codigo-cliente").value = clientes.length + 1;
    document.querySelector("#nome-cliente").value = "";
    let dataDeCadastro = new Date();
    let dataDeCadastroCorreta = dataDeCadastro.toLocaleDateString("pt-BR");
    document.querySelector("#data-cadastro-cliente").value = dataDeCadastroCorreta;
}

botaoSalvarCliente.addEventListener("click", function(){
    let novoCadastro = {
        "codCliente":"",
        "nomeCliente":"",
        "dataCadCli":"",
    };
    novoCadastro.codCliente = parseInt(document.querySelector("#codigo-cliente").value);
    novoCadastro.nomeCliente = document.querySelector("#nome-cliente").value;
    novoCadastro.dataCadCli = document.querySelector("#data-cadastro-cliente").value;
    clientes.push(novoCadastro);
    dadosIniciaisCliente()
});

botaoNovoCliente.addEventListener("click", novoCliente);