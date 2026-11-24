# Cuestionario de repaso · Sesión 02

**Tema:** JavaScript, MVC, sintaxis, semántica y errores  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 11 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Contesta las **10 preguntas** antes de desplegar las respuestas. **Tiempo estimado: 10–15 minutos.**

## Preguntas

**1.** Relaciona cada capa de una página web con su función:

- A) HTML
- B) CSS
- C) JavaScript

**I.** Comportamiento e interactividad · **II.** Estructura · **III.** Presentación y estilos.

**Respuesta:** A → ___ · B → ___ · C → ___

**2.** Completa el truco de MVC:

- **Modelo:** __________________________________________________
- **Vista:** ____________________________________________________
- **Controlador:** ______________________________________________

**3.** ¿Qué característica describe el **tipado dinámico** de JavaScript?

- A) El tipo de una variable queda fijado por `int` al declararla.
- B) Una variable creada con `let` puede contener distintos tipos a lo largo del programa.
- C) Ninguna variable puede contener texto.

**4.** Predice las salidas de este ejemplo de **conversión implícita**:

```js
console.log("68000" + 10);
console.log("68000" - 10);
```

**Respuesta:** Primera: __________ · Segunda: __________

**5.** Escribe **sintaxis** o **semántica**, según corresponda:

- `console.log("Hola);` tiene un problema de __________.
- `68000 + 72000 / 2` se ejecuta, pero calcula mal el promedio: problema de __________.

**6.** ¿Qué significa el error **404** al enlazar `js/fichas.js` desde HTML?

**Respuesta:** ________________________________________________________

**7.** ¿Para qué sirve `defer` al enlazar un archivo JavaScript con una etiqueta `<script>`?

**Respuesta:** ________________________________________________________

**8.** ¿Dónde revisas los mensajes y errores que produce JavaScript en el navegador?

- A) F12 → pestaña Console
- B) Archivo → Imprimir
- C) Barra de direcciones

**9.** En JavaScript, ¿qué significa que sea **multiparadigma**? Nombra **dos** paradigmas vistos en clase.

**Respuesta:** ________________________________________________________

**10.** Para localizar un error en la consola, identifica sus **tres pistas** principales.

**Respuesta:** __________ · __________ · __________

---

## Solucionario (abrir al terminar)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **A → II; B → III; C → I.** HTML estructura, CSS presenta y JavaScript añade comportamiento.
2. **Modelo:** datos y reglas (talleres, precios, cupos). **Vista:** lo que se muestra (HTML, mensajes). **Controlador:** recibe acciones y coordina decisiones (validar inscripción).
3. **B.** El tipo pertenece al valor; por ejemplo, una variable `let` puede pasar de número a texto.
4. **`6800010` y `67990`.** Con `+` hay concatenación; con `-` los caracteres numéricos se convierten a número.
5. **Sintaxis** y **semántica**. Un error semántico puede pasar inadvertido porque el programa sí se ejecuta.
6. El recurso o archivo **no se encuentra en la ruta solicitada**; el script no se carga.
7. Hace que el archivo se ejecute **después de que el HTML haya sido analizado**, sin bloquear su lectura.
8. **A.** Se utiliza la consola de las herramientas para desarrolladores.
9. Se pueden mezclar formas de organizar programas: **imperativa, orientada a objetos, funcional y orientada a eventos** (cualquier dos).
10. **Tipo de error, mensaje y archivo:línea.** Estas pistas permiten encontrar la causa y el lugar.

</details>

### Trucos imprescindibles

- **MVC:** Modelo = datos · Vista = pantalla · Controlador = decisiones y acciones.
- **HTML / CSS / JS:** estructura / apariencia / comportamiento.
- **Sintaxis:** «¿está bien escrito?» · **Semántica:** «¿hace lo correcto?».
- **`+` con texto** puede unir en vez de sumar: verifica el tipo del dato.
- **Error 404:** revisa la ruta del `src` y el nombre real del archivo; usa F12 para verificar.

**¿Qué aprendí?** Aprendí sobre JavaScript, MVC, sintaxis, semántica y errores de programación.

---
*Fuentes de clase: `S02_Presentacion_Entorno_MVC_y_JavaScript.pdf`, `S02_Resumen_teorico_JavaScript_Estudiantes.pdf` y `S02_Practica_autonoma_Estudiantes.pdf`.*  
*CSTI12004 · UA1 · Sesión 02 · 11/11/2026 · Greivin Montero Contreras*
