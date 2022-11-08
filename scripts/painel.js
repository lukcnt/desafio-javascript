import { clientes } from "../scripts/clientes.js";
import { produtos } from "../scripts/produtos.js";

let fecharJanela = document.querySelectorAll(".fechar");
let abrirJanela = document.querySelectorAll("#menu li");

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