// textos.js - Métodos de las cadenas y plantillas

const escrito = "  retrato familiar  "; //* con espacios de más
const servicio = escrito.trim();        //* quita los espacios


console.log(servicio.toUpperCase());    //* todo en mayúscula
console.log(escrito.length, servicio.length); //* cantidad de letras
console.log(servicio.includes("familiar")); //* ¿contiene?
console.log(servicio.slice(0, 7));      //* de la letra 0 a la 6
console.log(`Servicio: ${servicio}`);   //* plantilla con ${ }

