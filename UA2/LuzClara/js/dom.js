// dom.js - Recorre el árbol de nodos de index.html (al final del body)

console.log(`Título de la página: ${document.title}`);                    //* TEXTO QUE ESTA DENTRO DE TITULO

const raiz = document.documentElement;                                    //* JALA TODO LO DE RAIZ QUE ES EL HTML
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);    //* MUESTRA LA TAG DE HTML Y LUEGO LOS HIJOS DIRECTOS DENTRO DE HTML

const cuerpo = document.body;                                             //* JALA EL NODO DE BODY
for (const hijo of cuerpo.children) {                                     //* MUESTRA TODAS LAS ETIQUETAS DEL BODY MENOS LAS SCRIPT
  if (hijo.tagName !== "SCRIPT") {
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

const principal = cuerpo.children[1];                                     //* LLAMA AL SEGUNDO HIJO DIRECTO DEL BODY QUE ES MAIN
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);       //* MUESTRA QUIEN ES EL PADRE DE PRINCIPAL
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);  //* LLAMA EL PRIMER HIJO DE TIPO ID
console.log(`Secciones dentro de <main>: ${principal.children.length}`);  //* MUESTRA CUANTOS HIJOS DIRECTOS TIENE PRINCIPAL QUE SERIA BODY

console.log("");
console.log("FIN DEL DOM.JS");
console.log("");


