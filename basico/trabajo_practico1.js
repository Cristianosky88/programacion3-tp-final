// =============================
// Ejercicio 1: Cálculo de Precio con IVA
// =============================
/**
 * Este ejercicio demuestra:
 * - Declaración de variables con let
 * - Operaciones aritméticas básicas
 * - Cálculo de porcentajes
 * - Uso de console.log() para mostrar resultados
 * 
 * Objetivo: Calcular el precio total de un producto incluyendo el IVA
 */

// Precio base del producto (sin impuestos)
let precio = 300;

// Porcentaje de IVA (Impuesto al Valor Agregado)
// En Argentina, el IVA general es del 21%
let iva = 21;

// Calcular el precio total incluyendo IVA
// Fórmula: precioTotal = precio + (precio × IVA ÷ 100)
// Ejemplo: 300 + (300 × 21 ÷ 100) = 300 + 63 = 363
let precioTotal = precio + (precio * iva / 100);

// Mostrar el resultado en la consola del navegador
// Para ver esto: Abrir DevTools (F12) y ir a la pestaña Console
console.log("Precio total: $" + precioTotal);