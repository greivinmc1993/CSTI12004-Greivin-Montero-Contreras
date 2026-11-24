//! Creamos una matriz llamada semana.
//! Una matriz es, en este ejercicio, un vector de vectores.

//* Cada fila contiene:
//* Posición 0: nombre del día.
//* Posiciones siguientes: nombres de los talleres.

const semana = [["Martes", "Cocina inicial", "Tartas"],["Miércoles", "Masa madre"],["Jueves", "Cocina intermedia"],["Viernes", "Pan de campo"],["Sábado", "Bollería", "Decoración"]];

//* Recorremos cada fila de la matriz utilizando for...of.
//* En cada vuelta, dia representa un vector completo.

//* Primera vuelta:
//* dia = ["Martes", "Cocina inicial", "Tartas"];

for (const dia of semana) {

    //* length devuelve la cantidad total de elementos de la fila.

    //* Por ejemplo, el martes tiene 3 elementos:
    //* "Martes", "Cocina inicial" y "Tartas".

    //* Restamos 1 porque el nombre del día no es un taller.
    //* Entonces: 3 - 1 = 2 talleres.

    const cantidad = dia.length - 1;

    //* slice(1) crea una copia del vector desde el índice 1
    //* hasta el último elemento.

    //* Esto permite excluir el nombre del día.

    //* Resultado de slice(1):
    //* ["Cocina inicial", "Tartas"]

    //* join(", ") une los elementos en un solo texto,
    //* colocando una coma y un espacio entre ellos.

    //* Resultado final:
    //*"Cocina inicial, Tartas"

    const nombres = dia.slice(1).join(", ");

    //* dia[0] obtiene el nombre del día.
    //* cantidad contiene el número de talleres.
    //* nombres contiene los nombres separados por comas.

    //*Resultado de la primera vuelta:
    //* Martes (2): Cocina inicial, Tartas

    console.log(`${dia[0]} (${cantidad}): ${nombres}`);
}

//* El ciclo termina después de recorrer los cinco días.