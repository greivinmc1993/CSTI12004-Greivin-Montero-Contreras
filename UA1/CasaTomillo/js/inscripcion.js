//! · Inscripción a un taller → casa tomillo/js/inscripcion.js 



const taller = "Panadería: masa madre"; //* Nombre del taller
const precio = 95000;                   //* Precio del taller
const matricula = 10000;                //* Matrícula por persona
const personas = 2;                     //* Personas a inscribir
let cupos = 8;                          //* Cupos disponibles

//! Cálculos
const precioPorPersona = precio + matricula; //* Suma precio y matrícula
const total = precioPorPersona * personas;  //* Calcula el total
cupos -= personas;                          //* Resta los cupos ocupados
const hayCupos = cupos > 0;                 //* Verifica si quedan cupos

//! Resultados en consola
console.log("Taller:", taller);                         //* Muestra el taller
console.log("Precio por persona:", precioPorPersona);   //* Muestra el precio
console.log(`Total para ${personas} personas:`, total); //* Muestra el total
console.log("Cupos libres:", cupos);                    //* Muestra los cupos restantes
console.log("¿Hay cupos?", hayCupos);                   //* Muestra true o false
console.log("¿Menos de ₡250 000 y con cupos?", total < 250000 && hayCupos); //* Verifica ambas condiciones
