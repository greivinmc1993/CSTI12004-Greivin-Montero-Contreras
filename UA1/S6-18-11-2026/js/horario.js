try {
  const respuesta = prompt("¿Qué día desea visitar Casa Tomillo?");

  const dia = respuesta.trim().toLowerCase();
  switch (dia) {
    case "domingo":
    case "lunes":
      console.log(`El ${dia} está cerrado`);
      break;
    default:
      console.log(`El ${dia} abre de 10:00 a. m. a 7:00 p. m.`);
  }
} catch (error) {
  console.warn("No se indicó un día.");
} finally {
  console.log("Casa Tomillo · Barrio Amón");
}
