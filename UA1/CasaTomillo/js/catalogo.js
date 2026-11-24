//! Creamos un vector de objetos llamado talleres.
//! Cada objeto representa un taller y contiene dos propiedades:
//! nombre: nombre del taller.
//! precio: costo del taller en colones.

//! Utilizamos const porque no vamos a reasignar el vector.

const talleres = [
    { nombre: "Cocina de la casa · Inicial", precio: 68000 },
    { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
    { nombre: "Panadería · Masa madre", precio: 95000 },
    { nombre: "Panadería · Pan de campo", precio: 70000 },
    { nombre: "Panadería · Bollería", precio: 88000 },
    { nombre: "Repostería · Tartas", precio: 82000 },
    { nombre: "Repostería · Decoración", precio: 58000 }
];

//* ACUMULADOR:
//* Guarda la suma de los precios de todos los talleres.
//* Inicia en 0 porque todavía no hemos sumado ningún precio.
//* Usamos let porque su valor va a cambiar.

let suma = 0;

//* CONTADOR:
//* Guarda la cantidad de talleres que cuestan más de 80000.
//* Inicia en 0 porque todavía no hemos revisado los precios.

let caros = 0;

//* VARIABLE PARA BUSCAR EL MAYOR:
//* Guardamos el primer objeto del vector como punto de partida.
//* Suponemos inicialmente que el primer taller es el más caro.
//* Recuerde que los índices de un vector comienzan en 0.

let masCaro = talleres[0];

//* El ciclo for...of recorre todos los objetos del vector.
//* En cada vuelta, la variable t representa un taller completo.
//* Podemos acceder a sus propiedades con t.nombre y t.precio.

for (const t of talleres) {

    //* Mostramos el nombre y el precio del taller actual.
    //* toLocaleString("fr-FR") separa los miles con espacios.
    //* ${} permite insertar variables dentro de un texto.

    console.log(`${t.nombre}: ₡${t.precio.toLocaleString("es-CR")}`);

    //* Sumamos el precio actual al acumulador.
    //* Es equivalente a: suma = suma + t.precio;

    suma += t.precio;

    //* Comprobamos si el precio supera los 80000 colones.
    //* Si la condición es verdadera, aumentamos el contador.

    if (t.precio > 80000) {

        //* Es equivalente a: caros = caros + 1;

        caros++;
    }

    //* Comparamos el precio del taller actual con el precio
    //* del taller más caro encontrado hasta el momento.

    if (t.precio > masCaro.precio) {

        //* Si encontramos un taller más caro, guardamos
        //* el objeto completo, incluyendo nombre y precio.

        masCaro = t;
    }
}

//* Una vez terminado el ciclo, calculamos el promedio.
//* Dividimos la suma de los precios entre la cantidad de talleres.
//* Math.round() redondea el resultado al entero más cercano.

const promedio = Math.round(suma / talleres.length);

//* length devuelve la cantidad de elementos del vector.

console.log(`Talleres: ${talleres.length}`);

//* Mostramos el promedio con separación de miles.

console.log(`Promedio: ₡${promedio.toLocaleString("fr-FR")}`);

//* Mostramos la cantidad de talleres que superan los 80000.

console.log(`Más de ₡80 000: ${caros}`);

//* Accedemos a la propiedad nombre del objeto masCaro.

console.log(`El más caro: ${masCaro.nombre}`);