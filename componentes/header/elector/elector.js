// Crear botón de menú hamburguesa
const toggleBtn = document.createElement("div");
toggleBtn.id = "menu-toggle";
toggleBtn.innerHTML = "<span></span><span></span><span></span>";
document.body.appendChild(toggleBtn);

// Crear menú lateral
const menu = document.createElement("div");
menu.id = "menu";

// Botón: Generar códigos
const botonCodigos = document.createElement("button");
botonCodigos.textContent = "🎫 Generar códigos";
botonCodigos.onclick = () => mostrarCodigos();
menu.appendChild(botonCodigos);

// Contenedor para mostrar códigos generados
const areaCodigos = document.createElement("textarea");
areaCodigos.id = "area-codigos";
areaCodigos.readOnly = true;
areaCodigos.placeholder = "Aquí aparecerán los códigos...";
menu.appendChild(areaCodigos);

// Campo para ingresar códigos
const inputCodigo = document.createElement("input");
inputCodigo.type = "text";
inputCodigo.id = "input-codigo";
inputCodigo.placeholder = "Introduce un código...";
menu.appendChild(inputCodigo);

// Botón para verificar código
const botonVerificar = document.createElement("button");
botonVerificar.textContent = "✅ Verificar código";
botonVerificar.onclick = () => verificarCodigo();
menu.appendChild(botonVerificar);

// Mensaje de validación
const mensajeCodigo = document.createElement("div");
mensajeCodigo.id = "mensaje-codigo";
menu.appendChild(mensajeCodigo);

// Insertar menú y contenedor del juego
document.body.appendChild(menu);
const contenedor = document.createElement("div");
contenedor.id = "contenedor-juego";
document.body.appendChild(contenedor);

// Mostrar/ocultar menú
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
});

// Función para mostrar los códigos
function mostrarCodigos() {
  const juego = juegos[Math.floor(Math.random() * juegos.length)];
  const codigo = `${juego.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  areaCodigos.value = `${juego.replace("juego", "Juego ")} → ${codigo}`;
  areaCodigos.select();
  document.execCommand("copy");
}

// Función para cargar juegos dinámicamente
function cargarJuego(nombre) {
  contenedor.innerHTML = "";

  document.querySelectorAll("link[data-juego]").forEach(e => e.remove());

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `./juegos/${nombre}/${nombre}.css`;
  link.setAttribute("data-juego", "true");
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = `./juegos/${nombre}/${nombre}.js`;
  script.defer = true;
  contenedor.appendChild(script);
}

// Función para verificar código
function verificarCodigo() {
  const valor = inputCodigo.value.trim();
  const regex = /^JUEGO[1-4]-\d{4}$/;
  if (regex.test(valor)) {
    mensajeCodigo.textContent = "✅ Código válido. ¡Acceso permitido!";
    mensajeCodigo.style.color = "green";
  } else {
    mensajeCodigo.textContent = "❌ Código inválido. Intenta de nuevo.";
    mensajeCodigo.style.color = "red";
  }
}

// NUEVO: Crear contenedor para los botones de juegos fuera del menú
const juegosCentrales = document.createElement("div");
juegosCentrales.id = "juegos-centrales";
document.body.appendChild(juegosCentrales);

// Lista de juegos
const juegos = ["juego1", "juego2", "juego3", "juego4"];
juegos.forEach(nombre => {
  const btn = document.createElement("button");
  btn.textContent = nombre.replace("juego", "Juego ");
  btn.className = "boton-juego"; // NUEVO: para estilos
  btn.onclick = () => {
    cargarJuego(nombre);
  };
  juegosCentrales.appendChild(btn);
});
