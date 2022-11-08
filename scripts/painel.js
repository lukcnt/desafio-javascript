import { clientes } from "../scripts/clientes.js";
import { produtos } from "../scripts/produtos.js";

let fecharJanela = document.querySelectorAll(".fechar");
let abrirJanela = document.querySelectorAll("#menu li");
const proximoCliente = document.querySelector("#botao-proximo");
const anteriorCliente = document.querySelector("#botao-anterior");
const botaoNovoCliente = document.querySelector("#botao-novo-cliente");
const botaoSalvarCliente = document.querySelector("#botao-salvar-cliente");
const proximoProduto = document.querySelector("#botao-proximo-produto");
const anteriorProduto = document.querySelector("#botao-anterior-produto");
const botaoNovoProduto = document.querySelector("#botao-novo-produto");
const botaoSalvarProduto = document.querySelector("#botao-salvar-produto");
var clientesIndex = 1;
var produtosIndex = 1;

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
            dadosIniciaisProdutos()
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

function dadosIniciaisProdutos(){
    produtosIndex = 1;
    document.querySelector("#codigo-produto").value = produtos[0].codProduto;
    document.querySelector("#descricao-produto").value = produtos[0].descProduto;
    document.querySelector("#preco-produto").value = produtos[0].precoProduto;
    document.querySelector("#quantidade-produto").value = produtos[0].qtdEstoqueProd;
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

function listarProdutos(){
    if(produtosIndex > produtos.length || produtosIndex <= 0){
        dadosIniciaisProdutos();
        alert("Fim do registro");
    } else {
        for(let produto of produtos){
            if(produto.codProduto == produtosIndex){
                var descricaoProduto = produto.descProduto;
                var precoProduto = produto.precoProduto;
                var quantidadeEstoque = produto.qtdEstoqueProd;
            }
        }
        document.querySelector("#codigo-produto").value = produtosIndex;
        document.querySelector("#descricao-produto").value = descricaoProduto;
        document.querySelector("#preco-produto").value = precoProduto;
        document.querySelector("#quantidade-produto").value = quantidadeEstoque;
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

proximoProduto.addEventListener("click", function(){
    produtosIndex += 1;
    listarProdutos();
})

anteriorProduto.addEventListener("click", function(){
    produtosIndex -= 1;
    listarProdutos();
})

function novoCliente(){
    document.querySelector("#codigo-cliente").value = clientes.length + 1;
    document.querySelector("#nome-cliente").value = "";
    let dataDeCadastro = new Date();
    let dataDeCadastroCorreta = dataDeCadastro.toLocaleDateString("pt-BR");
    document.querySelector("#data-cadastro-cliente").value = dataDeCadastroCorreta;
}

function novoProduto(){
    document.querySelector("#codigo-produto").value = produtos.length + 1;
    document.querySelector("#descricao-produto").value = "";
    document.querySelector("#preco-produto").value = "";
    document.querySelector("#quantidade-produto").value = "";
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

botaoSalvarProduto.addEventListener("click", function(){
    let novoProduto = {
        "codProduto" : "",
        "descProduto" : "",
        "precoProduto" : "",
        "qtdEstoqueProd" : "",
    };
    novoProduto.codProduto = parseInt(document.querySelector("#codigo-produto").value);
    novoProduto.descProduto = document.querySelector("#descricao-produto").value;
    novoProduto.precoProduto = parseFloat(document.querySelector("#preco-produto").value);
    novoProduto.qtdEstoqueProd = parseInt(document.querySelector("#quantidade-produto").value);
    produtos.push(novoProduto);
    dadosIniciaisProdutos();
})

botaoNovoCliente.addEventListener("click", novoCliente);

botaoNovoProduto.addEventListener("click", novoProduto);