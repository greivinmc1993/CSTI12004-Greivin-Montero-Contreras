//! PRESUPUESTO PARA U TALLER

const persona = 105000;
const nombre = prompt("Ingrese su nombre: ");
const cantidad = parseInt(prompt("Ingrese cantidad: "));
const grupo = cantidad >= 3;
const total = persona * cantidad;

console.log("Hola, ", nombre);
console.log("Personas, ", cantidad);
console.log("Total, ", total);
console.log("Es Grupo, ", grupo);