function enColones(monto) {
    return `¢ ${monto.toLocaleString("es-CR")}`;
}


const conMatricula = (monto) => monto + 10000;


function costoGrupo(monto, cantidad) {
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) {
        return "NO ES UN DATO VALIDO"
    }

    let desc = 0;

    if (cantidad >= 3) {
        desc = 0.10;
    } else {
        desc = 0;
    }

    return enColones(conMatricula(monto) * cantidad - ((conMatricula(monto) * cantidad) * desc));
}

const talleres = [
    { nombre: "Cocina de la casa · Inicial", precio: 68000 },
    { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
    { nombre: "Panadería · Masa madre", precio: 95000 },
    { nombre: "Panadería · Pan de campo", precio: 70000 },
    { nombre: "Panadería · Bollería", precio: 88000 },
    { nombre: "Repostería · Tartas", precio: 82000 },
    { nombre: "Repostería · Decoración", precio: 58000 }
];

// Filtrar los talleres que cuestan menos de ₡75 000
const economicos = talleres.filter(t => t.precio < 75000);

// Mostrar cada taller económico
economicos.forEach(t => {
    console.log(`${t.nombre}: ${enColones(t.precio)}`);
});

// Mostrar la cantidad de talleres económicos
console.log(`Económicos: ${economicos.length}`);

// Crear un vector con los precios más la matrícula
const preciosConMatricula = talleres.map(t => conMatricula(t.precio));

// Mostrar los precios separados por comas
console.log(`Con matrícula: ${preciosConMatricula.join(", ")}`);