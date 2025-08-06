// =============================
// Ejercicio 6: Ficha de Ejercicios
// =============================

class Ficha {
  constructor(nombre) {
    this.nombre = nombre;
    this.sesiones = [];
    this.numsesiones = 0;
  }

  anotar(kilometros) {
    if (typeof kilometros === "number" && kilometros >= 0) {
      this.sesiones.push(kilometros);
      this.numsesiones++;
    } else {
      alert("Kilómetros inválidos.");
    }
  }

  media() {
    if (this.numsesiones === 0) return 0;
    let total = this.sesiones.reduce((suma, kms) => suma + kms, 0);
    return total / this.numsesiones;
  }
}

let ficha;

function crearFicha() {
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre === "") {
    alert("Por favor ingresa un nombre.");
    return;
  }
  ficha = new Ficha(nombre);
  document.getElementById('registro').style.display = "block";
  document.getElementById('info').innerText = `Ficha creada para: ${nombre}`;
}

function anotarKilometros() {
  const kms = parseFloat(document.getElementById('kms').value);
  if (isNaN(kms) || kms < 0) {
    alert("Por favor ingresa un número válido de kilómetros.");
    return;
  }
  ficha.anotar(kms);
  document.getElementById('info').innerText = `${ficha.nombre} ha registrado ${ficha.numsesiones} sesión(es): ${ficha.sesiones.join(", ")} km`;
}

function mostrarMedia() {
  const media = ficha.media();
  document.getElementById('info').innerText += `\nMedia de kilómetros recorridos: ${media.toFixed(2)} km`;
}

// =============================
// Ejercicio 7: Factura para Clientes
// =============================
const clientes = [
  { nombre: "Cristian", email: "cristian_2@mail.com", telefono: "4256304" },
  { nombre: "Carlos", email: "Carlos_ska@mail.com", telefono: "387541235" },
  { nombre: "Martina", email: "marutcha@mail.com", telefono: "3875412687" }
];

class Factura {
  constructor(idCliente, total) {
    this.idCliente = idCliente;
    this.total = total;
    this.estado = "pendiente";
  }

  cobrar() {
    this.estado = "pagada";
  }

  imprimir() {
    const cliente = clientes[this.idCliente];
    return `Factura:
Cliente: ${cliente.nombre}
Email: ${cliente.email}
Teléfono: ${cliente.telefono}
Total: $${this.total}
Estado: ${this.estado}`;
  }
}

function probarFacturas() {
  const factura1 = new Factura(0, 1200); // Cristian
  const factura2 = new Factura(1, 800);  // Carlos
  const factura3 = new Factura(2, 1500); // Martina
  factura1.cobrar();
  factura2.cobrar();
  factura3.cobrar(); 

  const resultado = [
    factura1.imprimir(),
    "",
    factura2.imprimir(),
    "",
    factura3.imprimir() // Descomentar si se crea factura3  
  ].join("\n");

  document.getElementById("salida_ej7").textContent = resultado;
}

// =============================
// Ejercicio 8: Artículo y Proveedor
// =============================

class Proveedor {
  constructor(nombre, email, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }
}

class Articulo {
  constructor(nombre, precio, proveedor) {
    this.nombre = nombre;
    this.precio = precio;
    this.proveedor = proveedor;
  }

  telefono() {
    return {
      nombre: this.proveedor.nombre,
      telefono: this.proveedor.telefono
    };
  }
}

function probarArticulo() {
  const proveedor1 = new Proveedor("Distribuidora Central", "contacto@dc.com", "4444-5555");
  const articulo1 = new Articulo("Monitor LED 24\"", 35000, proveedor1);

  const contacto = articulo1.telefono();

  const resultado = `
Artículo: ${articulo1.nombre}
Precio: $${articulo1.precio}
Proveedor: ${articulo1.proveedor.nombre}
Email: ${articulo1.proveedor.email}
Teléfono del proveedor: ${contacto.telefono}
  `.trim();

  document.getElementById("salida_ej8").textContent = resultado;
}
