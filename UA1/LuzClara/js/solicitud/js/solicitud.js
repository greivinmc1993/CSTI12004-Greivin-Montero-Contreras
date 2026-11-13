//! SOLICITUD PEDIR DATOS CON PROMPS

const nombre = prompt("Cual es su nombre");     //* DEVUELVE TEXTO
const fotos = prompt("Cuantas fotos impresas"); //* DEVUELVE TEXTO

console.log("Hola, " + nombre + ".");           //* UNE CADENAS
console.log("Fotos + 1, ", fotos + 1);          //* UNE NO SUMA
console.log("Fotos + 1, ", Number(fotos) + 1);  //* ASÍ SUMA
console.log("Pidio fotos, ", Number(fotos) > 0);//* 

const numero = parseInt(prompt("ingrese el número elegido"));
console.log(typeof numero);
