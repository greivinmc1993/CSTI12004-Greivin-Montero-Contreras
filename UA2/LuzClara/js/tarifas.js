//! FUNCIONES PARA COTIZAR

function formatoColones(monto) {    //*declaracion
    return `¢ ${monto.toLocaleString("es-CR")}`
}

const precioConIva = (monto) => Math.round(monto * 1.13); //*FUNCION FLECHA

function totalSesiones(monto, cantidad) {
    if (isNaN(cantidad) || cantidad < 1){
        return "CANTIDAD INVALIDAD";
    }    

    const total1 = precioConIva(monto) * cantidad;

    return formatoColones(total1);
}

console.log(formatoColones(45000));
console.log(totalSesiones(45000, 2));
console.log(totalSesiones(75000, 0));

console.log("");


console.log("===========COMIENZO DE SERVICIOS.JS=======================");

