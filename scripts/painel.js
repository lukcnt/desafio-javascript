import { clientes } from "../scripts/clientes.js";
import { produtos } from "../scripts/produtos.js";

function fecharJanela(className, event) {
    let list = document.querySelectorAll(className);
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener(event, function() {
            document.querySelector("#janela-clientes").style.display = "none";
            document.querySelector("#janela-produtos").style.display = "none";
            document.querySelector("#janela-pedidos").style.display = "none";
        });
    };
};

function abrirJanela(idName, event) {
    let list = document.querySelectorAll(idName);
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener(event, function(){
            if(list[i].id == "menu-clientes") {
                document.querySelector("#janela-clientes").style.display = "flex";
                document.querySelector("#janela-produtos").style.display = "none";
                document.querySelector("#janela-pedidos").style.display = "none";
            } else if (list[i].id == "menu-produtos") {
                document.querySelector("#janela-produtos").style.display = "flex";
                document.querySelector("#janela-clientes").style.display = "none";
                document.querySelector("#janela-pedidos").style.display = "none";
            } else {
                document.querySelector("#janela-pedidos").style.display = "flex";
                document.querySelector("#janela-clientes").style.display = "none";
                document.querySelector("#janela-produtos").style.display = "none";
            };
        });
    };
};

abrirJanela("#menu li", "click");
fecharJanela('.fechar', 'click');