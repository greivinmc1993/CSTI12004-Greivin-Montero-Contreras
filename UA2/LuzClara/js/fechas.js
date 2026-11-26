//! fechas.js - Fechas con Date


const hoy = new Date();             //* fecha y hora de ahora
console.log(hoy.getFullYear());     //* año
console.log(hoy.getMonth() + 1);    //* mes: empieza en 0
console.log(hoy.getDate());         //* día del mes
console.log(hoy.toLocaleDateString("es-CR")); //* formato de Costa Rica

const sesion = new Date(2026, 11, 5);   //* 5 de diciembre (mes 12)

console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" }));