//! MODELO: LOS DATOS DE LAS RESERVAS Y SUS REGLAS

class Reserva {
    constructor(cliente, servicio, precio) {
        this.cliente = cliente;
        this.servicio = servicio;
        this.precio = precio;
    }
}

class Reservas {
    constructor() {
        this.lista = [];
    }

    agregar(reserva){
        if (reserva.precio <= 0) {      //* REGLA DE NEGOCIO
            return false;               //* NO SE GUARDA LA RESERVA
        }
        this.lista.push(reserva);
        return true;
    }
    ingresos(){
        let suma = 0;
        this.lista.forEach((r) => {suma += r.precio});
        return suma;
    }
}