// =============================
// Ejercicio 9: Cambiar Título
// =============================
/**
 * Función que modifica el contenido de un elemento HTML.
 * Demuestra la manipulación básica del DOM usando getElementById e innerHTML.
 * 
 * Funcionamiento:
 * 1. Busca el elemento con ID "miTitulo" en el documento
 * 2. Cambia su contenido HTML al nuevo texto
 * 
 * Conceptos: DOM manipulation, getElementById, innerHTML
 */
function cambiarTexto() {
    // Obtener referencia al elemento HTML por su ID
    let elTitulo = document.getElementById("miTitulo");
    
    // Cambiar el contenido del elemento
    elTitulo.innerHTML = "¡Hola Mundo con Javascript!";
}

// =============================
// Ejercicio 10: Cambiar Estilo Sencillo
// =============================
/**
 * Función que modifica los estilos CSS de un elemento dinámicamente.
 * Demuestra cómo JavaScript puede cambiar la apariencia de elementos HTML.
 * 
 * Funcionamiento:
 * 1. Selecciona el elemento con ID "tituloEstilo"
 * 2. Modifica sus propiedades CSS (color y alineación)
 * 
 * Nota: Las propiedades CSS en JavaScript usan camelCase (textAlign en lugar de text-align)
 * 
 * Conceptos: style property, CSS manipulation, camelCase notation
 */
function cambiarEstilo() {
    // Seleccionar el elemento a modificar
    let elTitulo = document.getElementById("tituloEstilo");
    
    // Cambiar el color del texto a verde
    elTitulo.style.color = "green";
    
    // Centrar el texto horizontalmente
    elTitulo.style.textAlign = "center";
}

// =============================
// Ejercicio 11: Crear Div
// =============================
/**
 * Función que crea dinámicamente un nuevo elemento HTML y lo añade a la página.
 * Demuestra la creación de elementos DOM desde JavaScript.
 * 
 * Funcionamiento:
 * 1. Crea un nuevo elemento <div> en memoria
 * 2. Le asigna contenido HTML
 * 3. Le añade una clase CSS para estilizado
 * 4. Lo inserta en el contenedor especificado
 * 
 * Uso práctico: Esta técnica es fundamental para crear interfaces dinámicas
 * donde el contenido se genera según las acciones del usuario.
 * 
 * Conceptos: createElement, classList, appendChild, dynamic content
 */
function creaDiv() {
    // Crear un nuevo elemento div (solo existe en memoria por ahora)
    let nuevoCuadro = document.createElement("div");
    
    // Asignar contenido al nuevo div
    nuevoCuadro.innerHTML = "¡Hola desde JavaScript!";
    
    // Añadir una clase CSS para estilizar el elemento
    nuevoCuadro.classList.add("nuevo-cuadro");

    // Buscar el contenedor donde se insertará el nuevo elemento
    let contenedor = document.getElementById("dondeVanLosCuadros");
    
    // Insertar el nuevo div dentro del contenedor (ahora es visible en la página)
    contenedor.appendChild(nuevoCuadro);
}