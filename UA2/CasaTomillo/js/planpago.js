//! PLAN DE PAGO DEL TALLER 


//!VARIABLES
const hoy = new Date(2026, 10, 21);             //* LA FECHA PRIMERO SE GUARDA EN UNA VARIABLE
const nombre = "    panaderia: masa madre ";    //* NOMBRE
const nombreLimpio = nombre.trim();             //* PARA QUITAR EMPACIOS DEL COMIENZO Y EL FINAL
const sub_total = 105000;                       //* TOTAL DEL TALLER
const cuotas = 4;                               //* NUMERO DE CUOTAS
let cuota;
const opciones = { style: "currency", currency: "CRC" };    //* FORMATO DE CRC Y REGION CR
const colones = new Intl.NumberFormat("es-CR", opciones);   //* FORMATO DE CRC Y REGION CR



//! IMPRESION DE DATOS
console.log("Taller: " + nombreLimpio.toUpperCase());        //* NOMBRE A MAYUSCULA
console.log("Empieza el: " + hoy.toLocaleDateString("es-CR", { dateStyle: "full" }));    //* FECHA DE HOY YA FORMATEADA
console.log("Total de: " + sub_total);       //* Log para n¿mostar el total del curso

cuota = sub_total / cuotas;

console.log(Number.isInteger(cuota));
console.log(`${cuotas} cuotas de ${colones.format(Math.ceil(cuota))}`); 

cuota = sub_total / 3;

console.log(`Si fueran 3 cuotas de ${Math.ceil(cuota)} cada una`); 




