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
const selecionarClientePedidos = document.querySelector("#codigo-cliente-pedidos");
const selecionarProdutoPedidos = document.querySelector("#codigo-produto-pedidos");
const botaoLancarPedido = document.querySelector("#botao-lancar-pedido");
var clientesIndex = 1;
var produtosIndex = 1;
var listaPedido = [];

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

selecionarClientePedidos.addEventListener("blur", function(){
    for(let cliente of clientes){
        if(cliente.codCliente == document.querySelector("#codigo-cliente-pedidos").value){
            document.querySelector("#nome-cliente-pedidos").value = cliente.nomeCliente;
        }
    }
})

selecionarProdutoPedidos.addEventListener("blur", function(){
    for(let produto of produtos){
        if(produto.codProduto == document.querySelector("#codigo-produto-pedidos").value){
            document.querySelector("#descricao-produto-pedidos").value = produto.descProduto;
            document.querySelector("#preco-produto-pedidos").value = produto.precoProduto;
        }
    }
})

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

botaoLancarPedido.addEventListener("click", function(){
    for(let produto of produtos){
        if(produto.codProduto == document.querySelector("#codigo-produto-pedidos").value){
            var itemPedido = document.querySelector("#codigo-produto-pedidos").value;
            var descricaoPedido = produto.descProduto;
            var precoPedido = produto.precoProduto;
        }
    }
    let produtoR = produtoRepetido();
    let temEst = temEstoque();

    if(produtoR == false && temEst == true){
        listaPedido.push(itemPedido);
        let itemTabela = document.createElement("p");
        let descricaoTabela = document.createElement("p");
        let precoTabela = document.createElement("p");
        let quantidadeTabela = document.createElement("p");
        let subtotalTabela = document.createElement("p");
        document.querySelector("#celula-item").appendChild(itemTabela).textContent = itemPedido;
        document.querySelector("#celula-descricao").appendChild(descricaoTabela).textContent = descricaoPedido;
        document.querySelector("#celula-preco").appendChild(precoTabela).textContent = precoPedido.toFixed(2);
        document.querySelector("#celula-quantidade").appendChild(quantidadeTabela).textContent = document.querySelector("#quantidade-produto-pedidos").value;
        document.querySelector("#celula-subtotal").appendChild(subtotalTabela).setAttribute("class", "ccvSubtotal");
        document.querySelector("#celula-subtotal").appendChild(subtotalTabela).textContent = (precoPedido * document.querySelector("#quantidade-produto-pedidos").value).toFixed(2);
    }
    valorTotal();
})

function produtoRepetido(){
    if(listaPedido.indexOf(document.querySelector("#codigo-produto-pedidos").value) !== -1){
        alert("O item já está no pedido");
        return true;
    } else {
        return false;
    }
}

function temEstoque(){
    for(let produto of produtos){
        if(produto.codProduto == document.querySelector("#codigo-produto-pedidos").value){
            var estoquePedido = produto.qtdEstoqueProd;
        }
    }
    if(document.querySelector("#quantidade-produto-pedidos").value > estoquePedido){
        alert("Esse item não possui a quantidade solicitada");
    } else {
        return true;
    }
}

function valorTotal(){
    let subtotal1 = document.querySelectorAll(".ccvSubtotal");
    let valorFinal = 0;
    for(let subtotal of subtotal1){
        valorFinal += parseFloat(subtotal.textContent);
    }
    console.log(valorFinal);
    document.querySelector("#valor-total-pedido").innerHTML = "Valor Total: R$" + valorFinal.toFixed(2);
}