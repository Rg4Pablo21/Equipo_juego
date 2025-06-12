import { createHeader } from "./componentes/header/header.js";
import { cargarLogin } from "./componentes/login/login.js";

cargarLogin();
export function cargarDOM(){
    let DOM = document.querySelector("#root");
    DOM.innerHTML = "";  // Limpia cualquier contenido previo
    DOM.appendChild(createHeader());

}

