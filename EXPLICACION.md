# Explicación del Código - Trabajo Práctico Final de Programación 3

## 📋 Descripción General del Proyecto

Este proyecto es un trabajo práctico de JavaScript para la materia Programación 3. El objetivo principal es demostrar el dominio de conceptos fundamentales de JavaScript, incluyendo:

- **Variables y operaciones básicas**
- **Manipulación del DOM (Document Object Model)**
- **Programación Orientada a Objetos (POO)**
- **Interacción con el usuario**
- **Buenas prácticas de separación de código**

---

## 📁 Estructura del Proyecto

```
programacion3-tp-final/
│
├── README.md                    # Descripción breve del proyecto
├── EXPLICACION.md              # Este archivo - Explicación detallada
│
├── basico/                     # Ejercicios básicos fundamentales
│   ├── trabajo_practico1.js    # Ejercicio 1: Cálculo de IVA
│   ├── trabajo_practico2.js    # Ejercicio 2: Área y perímetro
│   ├── trabajo_practico3.html  # Ejercicio 3: Saludo interactivo
│   ├── trabajo_practico4.html  # Ejercicio 4: Promedio de números
│   └── trabajo_practico5.html  # Ejercicio 5: Consumo de combustible
│
├── objeto.js                   # Ejercicios 6-8: Programación orientada a objetos
├── index.html                  # Página HTML para ejercicios con objetos
│
├── doom.js                     # Ejercicios 9-11: Manipulación del DOM
└── index2.html                 # Página HTML para ejercicios de DOM
```

---

## 🔧 Ejercicios Básicos (Carpeta `basico/`)

### **Ejercicio 1: Cálculo de Precio con IVA** (`trabajo_practico1.js`)

**Objetivo:** Calcular el precio total de un producto incluyendo el IVA (Impuesto al Valor Agregado).

**Conceptos aprendidos:**
- Declaración de variables con `let`
- Operaciones aritméticas
- Cálculo de porcentajes
- Uso de `console.log()`

**Funcionamiento:**
1. Define un precio base: $300
2. Define un porcentaje de IVA: 21%
3. Calcula el precio total: precio + (precio × IVA ÷ 100)
4. Muestra el resultado en la consola

**Ejemplo de salida:**
```
Precio total: $363
```

---

### **Ejercicio 2: Área y Perímetro de un Cuadrado** (`trabajo_practico2.js`)

**Objetivo:** Calcular el área y perímetro de un cuadrado dado el valor de su lado.

**Conceptos aprendidos:**
- Operaciones matemáticas básicas
- Fórmulas geométricas
- Concatenación de strings

**Fórmulas utilizadas:**
- **Área:** lado × lado
- **Perímetro:** lado × 4

**Ejemplo de salida:**
```
Lado del cuadrado: 5
Área: 25
Perímetro: 20
```

---

### **Ejercicio 3: Saludo Interactivo** (`trabajo_practico3.html`)

**Objetivo:** Solicitar el nombre del usuario y mostrar un saludo personalizado.

**Conceptos aprendidos:**
- Uso de `prompt()` para entrada de datos
- Uso de `alert()` para mostrar mensajes
- Concatenación de strings
- JavaScript embebido en HTML

**Flujo del programa:**
1. Se abre una ventana emergente solicitando el nombre
2. El usuario ingresa su nombre
3. Se muestra un mensaje de saludo: "Hola [nombre]"

---

### **Ejercicio 4: Calcular Promedio** (`trabajo_practico4.html`)

**Objetivo:** Calcular el promedio de tres números enteros ingresados por el usuario.

**Conceptos aprendidos:**
- Conversión de strings a números con `parseInt()`
- Múltiples entradas del usuario
- Cálculo de promedios
- Operaciones aritméticas

**Funcionamiento:**
1. Solicita tres números enteros al usuario (uno por vez)
2. Convierte los valores ingresados de texto a números
3. Calcula el promedio: (num1 + num2 + num3) ÷ 3
4. Muestra el resultado en un alert

---

### **Ejercicio 5: Consumo de Combustible** (`trabajo_practico5.html`)

**Objetivo:** Calcular el consumo de combustible por kilómetro recorrido.

**Conceptos aprendidos:**
- Funciones en JavaScript
- Validación de datos con `isNaN()`
- Conversión a números decimales con `parseFloat()`
- Manejo de errores básico
- Formato de números con `toFixed()`

**Funcionamiento:**
1. El usuario hace clic en un botón
2. Se solicita: litros de nafta consumidos
3. Se solicita: kilómetros recorridos
4. Se valida que los datos sean válidos
5. Se calcula: litros ÷ kilómetros
6. Se muestra el consumo en litros/km con 2 decimales

**Validaciones:**
- Verifica que los valores sean números
- Verifica que los kilómetros no sean cero (división por cero)

---

## 🎯 Ejercicios con Objetos (archivo `objeto.js`)

### **Ejercicio 6: Ficha de Ejercicios**

**Objetivo:** Crear un sistema para registrar sesiones de ejercicio y calcular promedios de kilómetros recorridos.

**Conceptos aprendidos:**
- Clases en JavaScript (ES6)
- Constructor de clases
- Métodos de instancia
- Arrays y manipulación de datos
- Método `reduce()` para sumar elementos
- Validación de tipos de datos

**Clase `Ficha`:**

```javascript
class Ficha {
  constructor(nombre)  // Crea una ficha con nombre
  anotar(kilometros)   // Registra kilómetros de una sesión
  media()              // Calcula el promedio de todas las sesiones
}
```

**Propiedades:**
- `nombre`: Nombre de la persona
- `sesiones`: Array con los kilómetros de cada sesión
- `numsesiones`: Contador de sesiones registradas

**Funciones auxiliares:**
- `crearFicha()`: Crea una nueva ficha con el nombre ingresado
- `anotarKilometros()`: Añade kilómetros a la ficha actual
- `mostrarMedia()`: Calcula y muestra el promedio

**Flujo de uso:**
1. Usuario ingresa su nombre y crea una ficha
2. Registra kilómetros de varias sesiones
3. Puede ver el promedio de kilómetros recorridos

---

### **Ejercicio 7: Factura para Clientes**

**Objetivo:** Sistema de facturación que gestiona clientes y sus facturas.

**Conceptos aprendidos:**
- Clases y objetos
- Arrays de objetos
- Estados de objetos
- Métodos que modifican el estado
- Template literals para formateo

**Array de Clientes:**
Contiene información de 3 clientes:
- Cristian, Carlos y Martina
- Cada uno con email y teléfono

**Clase `Factura`:**

```javascript
class Factura {
  constructor(idCliente, total)  // Crea factura para un cliente
  cobrar()                       // Cambia estado a "pagada"
  imprimir()                     // Genera texto con datos de la factura
}
```

**Propiedades:**
- `idCliente`: Índice del cliente en el array
- `total`: Monto de la factura
- `estado`: "pendiente" o "pagada"

**Función `probarFacturas()`:**
- Crea 3 facturas para diferentes clientes
- Las marca como pagadas
- Imprime la información completa

---

### **Ejercicio 8: Artículo y Proveedor**

**Objetivo:** Modelar la relación entre artículos y sus proveedores.

**Conceptos aprendidos:**
- Composición de objetos (un objeto dentro de otro)
- Relaciones entre clases
- Métodos que retornan objetos
- Acceso a propiedades anidadas

**Clase `Proveedor`:**
```javascript
class Proveedor {
  constructor(nombre, email, telefono)
}
```

Representa un proveedor con sus datos de contacto.

**Clase `Articulo`:**
```javascript
class Articulo {
  constructor(nombre, precio, proveedor)  // El proveedor es un objeto
  telefono()  // Retorna nombre y teléfono del proveedor
}
```

**Relación:**
- Un `Articulo` contiene un objeto `Proveedor`
- Se puede acceder a los datos del proveedor a través del artículo

**Función `probarArticulo()`:**
1. Crea un proveedor
2. Crea un artículo asociado a ese proveedor
3. Muestra toda la información del artículo y su proveedor

---

## 🎨 Ejercicios de Manipulación del DOM (archivo `doom.js`)

**Nota:** El archivo se llama "doom.js" pero debería ser "dom.js" (Document Object Model).

### **Ejercicio 9: Cambiar Título**

**Objetivo:** Modificar el texto de un elemento HTML dinámicamente.

**Conceptos aprendidos:**
- `document.getElementById()`: Seleccionar elementos
- `.innerHTML`: Modificar contenido HTML
- Event handling con `onclick`

**Funcionamiento:**
1. Busca el elemento con ID "miTitulo"
2. Cambia su contenido a "¡Hola Mundo con Javascript!"

---

### **Ejercicio 10: Cambiar Estilo**

**Objetivo:** Modificar los estilos CSS de un elemento desde JavaScript.

**Conceptos aprendidos:**
- Propiedad `.style` para modificar CSS
- Cambio dinámico de color y alineación
- CamelCase en propiedades CSS (textAlign en lugar de text-align)

**Funcionamiento:**
1. Selecciona el elemento con ID "tituloEstilo"
2. Cambia su color a verde
3. Centra el texto

---

### **Ejercicio 11: Crear Div**

**Objetivo:** Crear elementos HTML dinámicamente con JavaScript.

**Conceptos aprendidos:**
- `document.createElement()`: Crear nuevos elementos
- `.classList.add()`: Añadir clases CSS
- `.appendChild()`: Insertar elementos en el DOM

**Funcionamiento:**
1. Crea un nuevo elemento `<div>`
2. Le asigna contenido: "¡Hola desde JavaScript!"
3. Le añade la clase CSS "nuevo-cuadro"
4. Lo inserta en el contenedor especificado

**Uso práctico:** Crear elementos dinámicamente es fundamental para aplicaciones interactivas.

---

## 🌐 Páginas HTML

### **index.html** - Ejercicios con Objetos

Contiene la interfaz para los ejercicios 6, 7 y 8:

- **Ejercicio 6:** Formulario para crear ficha y registrar kilómetros
- **Ejercicio 7:** Botón para generar facturas de ejemplo
- **Ejercicio 8:** Botón para mostrar información de artículo y proveedor

**Características:**
- Usa elementos `<input>` para entrada de datos
- Usa `<button>` con `onclick` para ejecutar funciones
- Usa `<pre>` para mostrar texto formateado
- Carga el archivo `objeto.js` con todos los ejercicios

---

### **index2.html** - Ejercicios de DOM

Contiene la interfaz para los ejercicios 9, 10 y 11:

- **Ejercicio 9:** Título que cambia al pulsar un botón
- **Ejercicio 10:** Título cuyo estilo cambia dinámicamente
- **Ejercicio 11:** Botón que crea nuevos divs en la página

**Características:**
- Estructura simple con títulos y botones
- Carga el archivo `doom.js` (debería ser `dom.js`)
- Referencia a un archivo CSS externo `estilos.css` (no incluido en el proyecto)

---

## 🎓 Conceptos Clave de JavaScript Demostrados

### 1. **Variables y Tipos de Datos**
- `let` para variables que pueden cambiar
- Números (enteros y decimales)
- Strings (cadenas de texto)
- Arrays (listas de valores)

### 2. **Operadores**
- Aritméticos: `+`, `-`, `*`, `/`
- Asignación: `=`
- Comparación: `===`, `!==`

### 3. **Funciones**
- Declaración de funciones
- Parámetros y argumentos
- Valores de retorno
- Funciones flecha (arrow functions)

### 4. **Programación Orientada a Objetos**
- Clases con `class`
- Constructor con `constructor()`
- Métodos de instancia
- Propiedades de instancia con `this`

### 5. **Manipulación del DOM**
- Selección de elementos: `getElementById()`
- Modificación de contenido: `innerHTML`
- Modificación de estilos: `.style`
- Creación de elementos: `createElement()`
- Inserción de elementos: `appendChild()`

### 6. **Interacción con el Usuario**
- `prompt()`: Solicitar entrada
- `alert()`: Mostrar mensajes
- Eventos `onclick`
- Formularios HTML

### 7. **Validación de Datos**
- `isNaN()`: Verificar si no es un número
- `typeof`: Verificar tipo de dato
- Validaciones condicionales con `if`

### 8. **Métodos de Arrays**
- `.push()`: Añadir elemento al final
- `.join()`: Unir elementos en string
- `.reduce()`: Reducir array a un solo valor

### 9. **Conversión de Tipos**
- `parseInt()`: String a entero
- `parseFloat()`: String a decimal
- `toFixed()`: Número a string con decimales fijos

---

## 🚀 Cómo Ejecutar el Proyecto

### **Ejercicios Básicos:**
1. Abrir `trabajo_practico1.js` o `trabajo_practico2.js` en la consola del navegador, o
2. Abrir los archivos HTML (`trabajo_practico3.html`, `trabajo_practico4.html`, `trabajo_practico5.html`) directamente en el navegador

### **Ejercicios con Objetos:**
1. Abrir `index.html` en un navegador web
2. Interactuar con los formularios y botones

### **Ejercicios de DOM:**
1. Abrir `index2.html` en un navegador web
2. Hacer clic en los botones para ver los cambios

---

## 💡 Mejoras Sugeridas para el Proyecto

1. **Renombrar `doom.js` a `dom.js`** para mayor claridad
2. **Añadir el archivo `estilos.css`** referenciado en `index2.html`
3. **Mejorar la validación de errores** en todos los ejercicios
4. **Añadir comentarios en español** dentro del código
5. **Crear un archivo `index.html` principal** que enlace a todos los ejercicios
6. **Añadir tests unitarios** para las clases

---

## 📚 Recursos de Aprendizaje

- **MDN Web Docs**: Documentación completa de JavaScript
- **JavaScript.info**: Tutorial interactivo de JavaScript moderno
- **W3Schools**: Ejemplos prácticos y referencias

---

## ✅ Conclusión

Este proyecto demuestra un entendimiento sólido de los fundamentos de JavaScript, incluyendo:

✓ Sintaxis básica y operaciones  
✓ Programación orientada a objetos  
✓ Manipulación del DOM  
✓ Interacción con el usuario  
✓ Organización y separación del código  

Es un excelente trabajo práctico que cubre los conceptos esenciales necesarios para el desarrollo web con JavaScript.
