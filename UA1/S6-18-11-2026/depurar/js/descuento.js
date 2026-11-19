// Versión original para practicar con DevTools.
const monto = 120000;
let descuento = 0;
if (monto <= 50000) {
  descuento = 5;
} else if (monto >= 100000) {
  descuento = 10;
}
console.log(`Descuento: ${descuento} %`);
