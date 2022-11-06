const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const botaoAcessar = document.querySelector("#botao-login");

botaoAcessar.addEventListener("click", function(){
    buscarJson();
});