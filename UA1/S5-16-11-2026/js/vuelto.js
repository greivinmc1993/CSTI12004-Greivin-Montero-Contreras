//! SE HACE EJERCICIO DE VUELTO.JS

const total = 105000;

let personas = parseInt(prompt("Ingrese la cantidad de personas: "));

totalPagar = personas * total;

let monto = parseFloat(prompt("Ingrese con cuanto paga: "));

let vuelto = (monto - totalPagar).toFixed(2);

console.log(`Personas: ${personas}`);
console.log(`A pagar: ${totalPagar.toLocaleString("es-CR")}`);
console.log(`Pagó: ${monto.toFixed(2)}`);
console.log(`Personas: ${vuelto.toFixed(2)}`);

console.log(`A pagar es: ${typeof(totalPagar.toLocaleString("es-CR"))}`);
console.log(`Pagó es: ${typeof(monto)}`);
console.log(`Vuelto es: ${typeof(vuelto)}`);
