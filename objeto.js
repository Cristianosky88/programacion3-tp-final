// =============================
// Ejercicio 6: Ficha de Ejercicios
// =============================
/**
 * Clase Ficha: Registra sesiones de ejercicio y calcula estadísticas.
 * 
 * Esta clase demuestra:
 * - Programación Orientada a Objetos en JavaScript
 * - Uso de constructores para inicializar objetos
 * - Métodos de instancia para manipular datos
 * - Validación de datos de entrada
 * - Uso de arrays y el método reduce()
 * 
 * Uso práctico: Sistema de seguimiento de ejercicio físico
 */
class Ficha {
  /**
   * Constructor: Inicializa una nueva ficha de ejercicios
   * @param {string} nombre - Nombre de la persona que hará ejercicio
   */
  constructor(nombre) {
    this.nombre = nombre;              // Nombre de la persona
    this.sesiones = [];                // Array para almacenar kilómetros de cada sesión
    this.numsesiones = 0;              // Contador de sesiones registradas
  }

  /**
   * Método para registrar una nueva sesión de ejercicio
   * @param {number} kilometros - Kilómetros recorridos en la sesión
   * 
   * Validaciones:
   * - Verifica que el parámetro sea un número
   * - Verifica que el valor sea positivo o cero
   */
  anotar(kilometros) {
    // Validar que sea un número válido y no negativo
    if (typeof kilometros === "number" && kilometros >= 0) {
      this.sesiones.push(kilometros);   // Añadir kilómetros al array
      this.numsesiones++;                // Incrementar contador
    } else {
      alert("Kilómetros inválidos.");
    }
  }

  /**
   * Método para calcular el promedio de kilómetros recorridos
   * @returns {number} - Promedio de kilómetros por sesión
   * 
   * Funcionamiento:
   * - Si no hay sesiones, retorna 0
   * - Usa reduce() para sumar todos los kilómetros
   * - Divide el total entre el número de sesiones
   */
  media() {
    // Si no hay sesiones registradas, el promedio es 0
    if (this.numsesiones === 0) return 0;
    
    // Sumar todos los kilómetros usando reduce()
    // reduce toma una función que acumula valores: (acumulador, valorActual) => nuevoAcumulador
    let total = this.sesiones.reduce((suma, kms) => suma + kms, 0);
    
    // Calcular y retornar el promedio
    return total / this.numsesiones;
  }
}

// Variable global para almacenar la ficha actual
let ficha;

/**
 * Función para crear una nueva ficha de ejercicios
 * Se ejecuta cuando el usuario hace clic en el botón "Crear Ficha"
 * 
 * Proceso:
 * 1. Obtiene el nombre del input
 * 2. Valida que no esté vacío
 * 3. Crea una instancia de la clase Ficha
 * 4. Muestra la sección de registro
 */
function crearFicha() {
  // Obtener el valor del input y eliminar espacios al inicio/final con trim()
  const nombre = document.getElementById('nombre').value.trim();
  
  // Validar que el nombre no esté vacío
  if (nombre === "") {
    alert("Por favor ingresa un nombre.");
    return;
  }
  
  // Crear una nueva instancia de Ficha con el nombre proporcionado
  ficha = new Ficha(nombre);
  
  // Mostrar la sección de registro (estaba oculta)
  document.getElementById('registro').style.display = "block";
  
  // Mostrar mensaje de confirmación usando template literals (backticks)
  document.getElementById('info').innerText = `Ficha creada para: ${nombre}`;
}

/**
 * Función para registrar kilómetros en la ficha actual
 * Se ejecuta cuando el usuario hace clic en "Anotar"
 * 
 * Proceso:
 * 1. Obtiene los kilómetros del input
 * 2. Los convierte a número decimal con parseFloat()
 * 3. Valida que sea un número válido
 * 4. Los registra en la ficha
 * 5. Actualiza la información mostrada
 */
function anotarKilometros() {
  // Obtener el valor y convertirlo a número decimal
  const kms = parseFloat(document.getElementById('kms').value);
  
  // Validar que sea un número válido y no negativo
  if (isNaN(kms) || kms < 0) {
    alert("Por favor ingresa un número válido de kilómetros.");
    return;
  }
  
  // Registrar los kilómetros en la ficha
  ficha.anotar(kms);
  
  // Actualizar la información mostrada
  // join(", ") convierte el array en un string separado por comas
  document.getElementById('info').innerText = `${ficha.nombre} ha registrado ${ficha.numsesiones} sesión(es): ${ficha.sesiones.join(", ")} km`;
}

/**
 * Función para mostrar el promedio de kilómetros
 * Se ejecuta cuando el usuario hace clic en "Mostrar Media"
 * 
 * Proceso:
 * 1. Calcula el promedio llamando al método media() de la ficha
 * 2. Añade la información al texto existente
 * 3. Usa toFixed(2) para mostrar solo 2 decimales
 */
function mostrarMedia() {
  // Calcular el promedio
  const media = ficha.media();
  
  // Añadir la información del promedio al texto existente
  // += añade al final del texto actual
  // toFixed(2) formatea el número con 2 decimales
  document.getElementById('info').innerText += `\nMedia de kilómetros recorridos: ${media.toFixed(2)} km`;
}

// =============================
// Ejercicio 7: Factura para Clientes
// =============================
/**
 * Array de clientes: Base de datos simple de clientes
 * 
 * Cada cliente es un objeto con:
 * - nombre: Nombre completo del cliente
 * - email: Correo electrónico de contacto
 * - telefono: Número de teléfono
 * 
 * Este array simula una base de datos. En una aplicación real,
 * estos datos vendrían de un servidor o base de datos.
 */
const clientes = [
  { nombre: "Cristian", email: "cristian_2@mail.com", telefono: "4256304" },
  { nombre: "Carlos", email: "Carlos_ska@mail.com", telefono: "387541235" },
  { nombre: "Martina", email: "marutcha@mail.com", telefono: "3875412687" }
];

/**
 * Clase Factura: Gestiona facturas para clientes
 * 
 * Esta clase demuestra:
 * - Relación entre objetos (Factura usa datos de clientes)
 * - Gestión de estados (pendiente/pagada)
 * - Métodos que cambian el estado del objeto
 * - Formateo de texto con template literals
 * 
 * Uso práctico: Sistema de facturación básico
 */
class Factura {
  /**
   * Constructor: Crea una nueva factura
   * @param {number} idCliente - Índice del cliente en el array clientes (0, 1 o 2)
   * @param {number} total - Monto total de la factura
   */
  constructor(idCliente, total) {
    this.idCliente = idCliente;        // ID del cliente (índice en el array)
    this.total = total;                // Monto de la factura
    this.estado = "pendiente";         // Estado inicial: pendiente de pago
  }

  /**
   * Método para marcar la factura como pagada
   * Cambia el estado de "pendiente" a "pagada"
   */
  cobrar() {
    this.estado = "pagada";
  }

  /**
   * Método para generar un texto formateado con toda la información
   * @returns {string} - Texto con los datos del cliente y la factura
   * 
   * Demuestra:
   * - Acceso a datos de otro array usando el ID
   * - Template literals multilínea
   * - Formateo de información para mostrar al usuario
   */
  imprimir() {
    // Obtener los datos del cliente desde el array usando el ID
    const cliente = clientes[this.idCliente];
    
    // Retornar string formateado con toda la información
    // Los template literals (backticks) permiten texto multilínea
    return `Factura:
Cliente: ${cliente.nombre}
Email: ${cliente.email}
Teléfono: ${cliente.telefono}
Total: $${this.total}
Estado: ${this.estado}`;
  }
}

/**
 * Función de prueba para demostrar el uso de la clase Factura
 * Se ejecuta cuando el usuario hace clic en el botón "Facturas"
 * 
 * Proceso:
 * 1. Crea tres facturas para diferentes clientes
 * 2. Marca todas las facturas como cobradas
 * 3. Genera un reporte completo
 * 4. Muestra el resultado en la página
 */
function probarFacturas() {
  // Crear facturas para cada cliente
  // El primer parámetro es el índice del cliente en el array (0, 1, 2)
  // El segundo parámetro es el monto de la factura
  const factura1 = new Factura(0, 1200); // Factura para Cristian: $1200
  const factura2 = new Factura(1, 800);  // Factura para Carlos: $800
  const factura3 = new Factura(2, 1500); // Factura para Martina: $1500
  
  // Marcar las facturas como cobradas (cambia estado a "pagada")
  factura1.cobrar();
  factura2.cobrar();
  factura3.cobrar(); 

  // Crear un array con las impresiones de todas las facturas
  // join("\n") une los elementos del array con saltos de línea
  // Los strings vacíos "" crean líneas en blanco entre facturas
  const resultado = [
    factura1.imprimir(),
    "",
    factura2.imprimir(),
    "",
    factura3.imprimir()
  ].join("\n");

  // Mostrar el resultado en el elemento <pre> de la página
  // textContent se usa para texto plano (más seguro que innerHTML)
  document.getElementById("salida_ej7").textContent = resultado;
}

// =============================
// Ejercicio 8: Artículo y Proveedor
// =============================
/**
 * Clase Proveedor: Representa un proveedor de artículos
 * 
 * Esta clase demuestra:
 * - Encapsulación de datos relacionados
 * - Constructor simple con múltiples parámetros
 * 
 * Un proveedor tiene información de contacto que será usada
 * por los artículos que suministra.
 */
class Proveedor {
  /**
   * Constructor: Crea un nuevo proveedor
   * @param {string} nombre - Nombre de la empresa proveedora
   * @param {string} email - Correo electrónico de contacto
   * @param {string} telefono - Teléfono de contacto
   */
  constructor(nombre, email, telefono) {
    this.nombre = nombre;      // Nombre del proveedor
    this.email = email;        // Email de contacto
    this.telefono = telefono;  // Teléfono de contacto
  }
}

/**
 * Clase Articulo: Representa un artículo con su proveedor
 * 
 * Esta clase demuestra:
 * - Composición de objetos (un Artículo contiene un Proveedor)
 * - Relaciones entre clases
 * - Métodos que retornan objetos
 * - Acceso a propiedades de objetos anidados
 * 
 * Uso práctico: Sistema de inventario con información de proveedores
 */
class Articulo {
  /**
   * Constructor: Crea un nuevo artículo
   * @param {string} nombre - Nombre del artículo
   * @param {number} precio - Precio del artículo
   * @param {Proveedor} proveedor - Objeto Proveedor que suministra este artículo
   * 
   * Nota: El parámetro 'proveedor' es un objeto de la clase Proveedor.
   * Esto demuestra composición: un objeto contiene otro objeto.
   */
  constructor(nombre, precio, proveedor) {
    this.nombre = nombre;          // Nombre del artículo
    this.precio = precio;          // Precio del artículo
    this.proveedor = proveedor;    // Objeto Proveedor completo
  }

  /**
   * Método para obtener información de contacto del proveedor
   * @returns {Object} - Objeto con nombre y teléfono del proveedor
   * 
   * Este método demuestra:
   * - Acceso a propiedades de objetos anidados (this.proveedor.nombre)
   * - Retorno de objetos literales
   * - Encapsulación de lógica de acceso a datos
   */
  telefono() {
    return {
      nombre: this.proveedor.nombre,       // Nombre del proveedor
      telefono: this.proveedor.telefono    // Teléfono del proveedor
    };
  }
}

/**
 * Función de prueba para demostrar el uso de las clases Articulo y Proveedor
 * Se ejecuta cuando el usuario hace clic en "Mostrar Información del Artículo"
 * 
 * Proceso:
 * 1. Crea un proveedor
 * 2. Crea un artículo asociado a ese proveedor
 * 3. Obtiene información de contacto del proveedor
 * 4. Muestra toda la información formateada
 * 
 * Demuestra: Relación entre objetos y acceso a datos anidados
 */
function probarArticulo() {
  // Crear un proveedor con todos sus datos
  const proveedor1 = new Proveedor("Distribuidora Central", "contacto@dc.com", "4444-5555");
  
  // Crear un artículo asociado al proveedor
  // El tercer parámetro es el objeto proveedor completo
  const articulo1 = new Articulo("Monitor LED 24\"", 35000, proveedor1);

  // Obtener información de contacto usando el método telefono()
  const contacto = articulo1.telefono();

  // Generar texto formateado con toda la información
  // Demuestra acceso directo a propiedades anidadas: articulo1.proveedor.nombre
  const resultado = `
Artículo: ${articulo1.nombre}
Precio: $${articulo1.precio}
Proveedor: ${articulo1.proveedor.nombre}
Email: ${articulo1.proveedor.email}
Teléfono del proveedor: ${contacto.telefono}
  `.trim(); // trim() elimina espacios en blanco al inicio y final

  // Mostrar el resultado en la página
  document.getElementById("salida_ej8").textContent = resultado;
}
