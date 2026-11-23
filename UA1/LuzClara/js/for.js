//* EJERCICIOS DE FOR CONDICION Y CAMBIO DEL FOL
//* EJERCICIOS CON WHILE
//* EJERCICIOS CON DO WHILE

//! FOR----------------------------------------------------
console.log("FOR----------------------------------------------------\n");
for (let i = 1; i <= 3; i++) {
    console.log(`Sesion numero ${i}`);   
}

console.log("SE TERMINÓ EL CICLO  " );
console.log("");





//! WHILE----------------------------------------------------
console.log("WHILE----------------------------------------------------");
let fotos = 3;

while (fotos > 0) {
    console.log(`ENTREGANDO LA FOTO ${fotos}`);
    fotos--;
}

console.log("TODAS LAS FOTOS ENTREGADAS Y FUERA YA DEL WHILE");
console.log("");


//! DO WHILE----------------------------------------------------
console.log("DO WHILE----------------------------------------------------");
let foto = 0;

do {
    console.log("REVISANDO LA BANDEJA CON DO WHILE");
    
} while (foto > 0);
console.log("FIN sale del do while");
console.log("");


//! VECTORES CON VARIO ORDENES vectores.js - Un vector (array) guarda varios valores en orden 
console.log("VECTORES----------------------------------------------------");
const servicios = ["Retrato", "Familiar", "Eventos"]; // corchetes 
console.log(servicios[0]);               // posición 0: el primero 
console.log(servicios.length);           // cantidad de elementos 
servicios.push("Perfil");                // agrega al final 
console.log(servicios.join(", "));       // une todo en un texto 
const ultimo = servicios.pop();          // quita el último 
console.log(ultimo, servicios.length);   // el quitado y cuántos quedan 
console.log("");



//! RECORRER VECTORES CON UN FOR Y FOR OF recorrer.js - Recorrer un vector con for y con for...of 
console.log("RECORRER VECTORES----------------------------------------------------");
const precios = [45000, 75000, 38000];   // tarifas de Luz Clara 
let total = 0;                           // acumulador 
for (let i = 0; i < precios.length; i++) { // índices 0, 1 y 2 
    total += precios[i];                   // suma cada precio 
} 
console.log("Total:", total); 
for (const precio of precios) {          // cada elemento, sin índice 
    console.log("Precio:", precio); 
} 
console.log("");



//! saltar.js - continue salta una vuelta; break termina el ciclo 
console.log("CONTINUE SALTA Y BREAK TERMINA-----------------------------------------");
const servicios2 = ["Retrato", "Familiar", "Eventos", "Perfil"]; 
for (const s of servicios2) { 
if (s === "Familiar") continue;   // salta a la siguiente vuelta 
if (s === "Perfil") break;        // termina el ciclo 
console.log(s); 
} 
console.log("Fuera del ciclo"); 
console.log("");


//! matriz.js - Una matriz es un vector de vectores (filas y columnas) 
console.log("MATRICES-----------------------------------------");
const dias = ["Lunes", "Martes"];           // el nombre de cada fila 
const agenda = [                            // filas: días · columnas: horas 
  ["Retrato", "Libre", "Perfil"],           // fila 0: lunes 
  ["Libre", "Familiar", "Libre"],           // fila 1: martes 
]; 
console.log(agenda[1][1]);                  // fila 1, columna 1 
for (let f = 0; f < agenda.length; f++) {   // recorre las filas 
  console.log(`${dias[f]}: ${agenda[f].join(" | ")}`); // misma posición f 
} 
console.log("");


//! objetos.js - Primer contacto: un vector de objetos 
console.log("VECTOR DE OBJETOS-----------------------------------------");
const tarifas = [                                  // cada { } es un objeto 
{ servicio: "Individual", precio: 45000 }, 
{ servicio: "Familiar", precio: 75000 },    
]; 
for (const t of tarifas) {                         // recorre los objetos 
    console.log(`${t.servicio}: ${t.precio}`);       // punto: su dato 8  
} 
console.log("");

for (let i = 1; i <= 3; i) {
    console.log(`------------------------NO COPIEN---------------------- ${i}`);   
}