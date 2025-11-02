// =============================
// Ejercicio 2: Área y Perímetro de un Cuadrado
// =============================
/**
 * Este ejercicio demuestra:
 * - Uso de variables para almacenar valores
 * - Operaciones matemáticas básicas
 * - Aplicación de fórmulas geométricas
 * - Concatenación de strings
 * - Múltiples salidas a consola
 * 
 * Objetivo: Calcular el área y perímetro de un cuadrado
 * 
 * Conceptos matemáticos:
 * - Área de un cuadrado = lado × lado = lado²
 * - Perímetro de un cuadrado = 4 × lado (suma de los 4 lados)
 */

// Longitud del lado del cuadrado en unidades
let lado = 5;

// Calcular el área del cuadrado
// Fórmula: lado × lado
// Ejemplo: 5 × 5 = 25 unidades cuadradas
let area = lado * lado;

// Calcular el perímetro del cuadrado
// Fórmula: lado × 4 (suma de los 4 lados iguales)
// Ejemplo: 5 × 4 = 20 unidades lineales
let perimetro = lado * 4;

// Mostrar los resultados en la consola
// Concatenación de strings usando el operador +
console.log("Lado del cuadrado: " + lado);
console.log("Área: " + area);
console.log("Perímetro: " + perimetro);

// Línea separadora para organizar la salida en consola
console.log("-------------------");