// nombre.js - Controles con el mismo name (final de contacto.html)

//* JALA DATOS POR NAME DE BOTONES EN FORMULARIOS
const lugares = document.getElementsByName("lugar");
console.log(`Opciones de "lugar": ${lugares.length}`);

//* VALUE ES LO QUE EL FORMULARIO ENVIA POR CADA OPCION
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`));

//* LOS TEXTOS QUE SI SE VEN ESTA EN LAS ETIQUETAS
const etiquetas = document.querySelectorAll(".opcion-etiqueta");
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);
