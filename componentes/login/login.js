import { cargarDOM } from "../../main.js";

// FUNCIONES

export function cargarLogin() {
    let root = document.querySelector("#root");
    root.innerHTML = "";
    document.body.className = "login-body";

    let contenedor = document.createElement("div");
    contenedor.className = "login-container";

    let titulo = document.createElement("h1");
    titulo.textContent = "MAESTROS";
    titulo.className = "login-title";
    contenedor.appendChild(titulo);

    let imgProfesor = document.createElement("img");
    imgProfesor.src = "https://cdn-icons-png.freepik.com/256/3750/3750020.png?semt=ais_hybrid";
    imgProfesor.alt = "Imagen profesor";
    imgProfesor.className = "img-profesor";
    contenedor.appendChild(imgProfesor);

    let labelUser = document.createElement("label");
    labelUser.textContent = "Usuario:";
    contenedor.appendChild(labelUser);

    let inputUser = document.createElement("input");
    inputUser.type = "text";
    inputUser.className = "login-input";
    contenedor.appendChild(inputUser);

    let labelPass = document.createElement("label");
    labelPass.textContent = "Contraseña:";
    contenedor.appendChild(labelPass);

    let inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.className = "login-input";
    contenedor.appendChild(inputPass);

    let botones = document.createElement("div");
    botones.className = "login-buttons";

    let btnIniciar = document.createElement("button");
    btnIniciar.textContent = "Iniciar Sesion";
    btnIniciar.className = "login-button";
    btnIniciar.onclick = function () {
        if (inputUser.value && inputPass.value) {
            document.body.className = "";
            cargarDOM();
        } else {
            alert("Completa todos los campos");
        }
    };

    let btnRegistrar = document.createElement("button");
    btnRegistrar.textContent = "Registrarse";
    btnRegistrar.className = "login-button";
    btnRegistrar.onclick = function () {
        cargarRegistro();
    };

    botones.appendChild(btnIniciar);
    botones.appendChild(btnRegistrar);
    contenedor.appendChild(botones);

    let monstruo = document.createElement("img");
    monstruo.src = ""; 
    monstruo.alt = "Monstruo";
    monstruo.className = "monstruo-img";

    root.appendChild(monstruo);
    root.appendChild(contenedor);
}

export function cargarRegistro() {
    let root = document.querySelector("#root");
    root.innerHTML = "";
    document.body.className = "registro-body";

    let contenedor = document.createElement("div");
    contenedor.className = "registro-container";

    let titulo = document.createElement("h1");
    titulo.textContent = "REGÍSTRATE";
    titulo.className = "registro-title";
    contenedor.appendChild(titulo);

    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre completo:";
    contenedor.appendChild(labelNombre);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.className = "registro-input";
    contenedor.appendChild(inputNombre);

    let labelCorreo = document.createElement("label");
    labelCorreo.textContent = "Correo Electrónico:";
    contenedor.appendChild(labelCorreo);

    let inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.className = "registro-input";
    contenedor.appendChild(inputCorreo);

    let labelPass = document.createElement("label");
    labelPass.textContent = "Contraseña:";
    contenedor.appendChild(labelPass);

    let inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.className = "registro-input";
    contenedor.appendChild(inputPass);

    let botones = document.createElement("div");
    botones.className = "registro-botones";

    let btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver al login";
    btnVolver.className = "registro-button";
    btnVolver.onclick = () => cargarLogin();

    let btnEnviar = document.createElement("button");
    btnEnviar.textContent = "Registrar";
    btnEnviar.className = "registro-button";
    btnEnviar.onclick = () => alert("Aquí se registraría al usuario");

    botones.appendChild(btnVolver);
    botones.appendChild(btnEnviar);
    contenedor.appendChild(botones);

    let monstruo = document.createElement("img");
    monstruo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgqrziBfg2GQkzGhDJJ-eVLVeDxqGWdEBQA&s"; // Reemplaza por la ruta correcta
    monstruo.alt = "Monstruo";
    monstruo.className = "registro-monstruo";

    root.appendChild(monstruo);
    root.appendChild(contenedor);
}
