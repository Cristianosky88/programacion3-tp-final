// =============================
// Ejercicio 9: Cambiar Título
// =============================
function cambiarTexto() {
    let elTitulo = document.getElementById("miTitulo");
    elTitulo.innerHTML = "¡Hola Mundo con Javascript!";
}

// =============================
// Ejercicio 10: Cambiar Estilo Sencillo
// =============================
function cambiarEstilo() {
    let elTitulo = document.getElementById("tituloEstilo");
    elTitulo.style.color = "green";
    elTitulo.style.textAlign = "center";
}

// =============================
// Ejercicio 11: Crear Div
// =============================
function creaDiv() {
    let nuevoCuadro = document.createElement("div");
    nuevoCuadro.innerHTML = "¡Hola desde JavaScript!";
    nuevoCuadro.classList.add("nuevo-cuadro");

    let contenedor = document.getElementById("dondeVanLosCuadros");
    contenedor.appendChild(nuevoCuadro);
}