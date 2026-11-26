function crearTurnos(taller) {
  // Cada llamada a crearTurnos empieza su propio contador en 0.
    let numero = 0;

  // Devuelve una función que recuerda el taller y su contador.
    return () => {
        numero += 1;
        return `${taller} · turno ${numero}`;
    };
}

// Cada taller obtiene una función con su propio contador.
const turnoPan = crearTurnos("Panadería");
const turnoTarta = crearTurnos("Tartas");

// Los paréntesis ejecutan la función y generan el siguiente turno.
console.log(turnoPan());
console.log(turnoPan());
console.log(turnoTarta());
console.log(turnoPan());