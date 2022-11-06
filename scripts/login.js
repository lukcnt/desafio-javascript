const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const botaoAcessar = document.querySelector("#botao-login");

async function buscarJson() {
    let url = "./json/usuario.json";
    let dadosFetch = await fetch(url);
    let dadosJson = await dadosFetch.json();
};

botaoAcessar.addEventListener("click", function(){
    buscarJson();
});