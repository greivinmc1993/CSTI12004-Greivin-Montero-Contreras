//! Creamos una variable con los 8 cupos iniciales.
//! Utilizamos let porque los cupos disminuirán
//! conforme se inscriban las personas.

let cupos = 8;

//* Creamos un contador para saber en qué ronda estamos.
//* Inicia en 0 porque todavía no hemos realizado inscripciones.

let ronda = 0;

//* El ciclo while se ejecuta mientras queden cupos disponibles.
//
//* Antes de cada vuelta, comprueba si cupos es mayor que 0.
//* Si la condición es verdadera, ejecuta el bloque.
//* Si es falsa, termina el ciclo.

while (cupos > 0) {

    //* Aumentamos el número de ronda en 1.
    //* Es equivalente a: ronda = ronda + 1;

    ronda++;

    //* Math.min() devuelve el menor de los valores recibidos.
    //
    //* Comparamos 3 personas con los cupos disponibles.
    //* Esto evita inscribir más personas de las permitidas.
    //
    //* Primera ronda: Math.min(3, 8) = 3
    //* Segunda ronda: Math.min(3, 5) = 3
    //* Tercera ronda: Math.min(3, 2) = 2

    const personas = Math.min(3, cupos);

    //* Restamos las personas inscritas a los cupos disponibles.
    //* Es equivalente a: cupos = cupos - personas;

    cupos -= personas;

    //* Mostramos el número de ronda, las personas inscritas
    //* y la cantidad de cupos que todavía quedan.

    console.log(`Ronda ${ronda}: ${personas} personas · quedan ${cupos}`);

    //* Al finalizar esta vuelta, el while vuelve a comprobar
    //* si todavía quedan cupos disponibles.
}

//* Cuando cupos llega a 0, la condición del while es falsa.
//* El programa sale del ciclo y muestra el mensaje final.

console.log("Taller lleno");