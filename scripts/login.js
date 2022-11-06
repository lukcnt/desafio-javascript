const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const botaoAcessar = document.querySelector("#botao-login");

function compararDados(dadosJson){
    let acessoLiberado = false;
    for(let i = 0; i < dadosJson.users.length; i++){
        if(usuario.value == dadosJson.users[i].user && senha.value == dadosJson.users[i].pws){
            acessoLiberado = true;
        }
    }
    return acessoLiberado;
};

async function buscarJson() {
    let url = "./json/usuario.json";
    let dadosFetch = await fetch(url);
    let dadosJson = await dadosFetch.json();
};

botaoAcessar.addEventListener("click", function(){
    buscarJson();
});