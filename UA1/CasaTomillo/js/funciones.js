//! EJERCIIO 1 DE PRACTICA AUTONOMA S08

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

console.log();

console.log(enColones(45000));
console.log(conMatricula(45000));
console.log(costoGrupo(45000, 3));
