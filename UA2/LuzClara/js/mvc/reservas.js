//! RESERVAS AARANQUE: UNE TODO EL MVC

const modelo = new Reservas();
const vista = new VsitaReservas();
const reservas = new ControladorReservas(modelo, vista);

reservas.reservar("Ana Rodriguez", "Familiar", 75000);
reservas.reservar("Luis Mora", "Perfil profesional", 38000);
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();