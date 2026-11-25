//! VISTA: MUESTRA LOS DATOS 

class VistaReservas {
    mostrar(lista) {
        lista.forEach((r, i) => {
            console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`);
        });
    }

    mostrarIngresos(monto){
        console.log(`Ingresos: ¢ ${monto.toLocaleString("es-CR")}`);
        
    }
    error(texto){
        console.error(texto);        
    }
}

