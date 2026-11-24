# Cuestionario de repaso · Sesión 03

**Tema:** Entorno de trabajo y mi primer script en JavaScript  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 12 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Responde sin consultar los apuntes. **10 preguntas · 10–15 minutos.**

## Preguntas

**1.** ¿Qué etiqueta HTML enlaza correctamente el archivo `js/app.js` desde la carpeta actual?

- A) `<link href="js/app.js">`
- B) `<script src="js/app.js"></script>`
- C) `<script href="js/app.js"></script>`

**2.** ¿Qué atributo permite colocar el script en el `<head>` sin ejecutarlo antes de que se haya analizado el HTML?

**Respuesta:** __________

**3.** Escribe el comentario de **una línea** y el de **bloque** en JavaScript.

**Respuesta:** Una línea: __________ · Bloque: __________

**4.** ¿Cuál es la salida de la siguiente instrucción?

```js
console.log("Casa\nTomillo");
```

**Respuesta:** ________________________________________________________

**5.** Relaciona las secuencias de escape con su función:

- `\t` → ____________________
- `\"` → ____________________
- `\\` → ____________________
- `\u20A1` → ____________________

**6.** ¿Cuál instrucción produce un mensaje de advertencia (normalmente amarillo) en la consola?

- A) `console.error("Atención")`
- B) `console.warn("Atención")`
- C) `console.log("Atención")`

**7.** ¿Qué problema tiene esta línea?

```js
console.Log("Hola");
```

**Respuesta:** ________________________________________________________

**8.** ¿Qué diferencia hay entre **un identificador** y **una palabra reservada**? Da un ejemplo de cada uno.

**Respuesta:** ________________________________________________________

**9.** Clasifica estas situaciones como **SyntaxError**, **ReferenceError**, **TypeError** o **404**:

- Falta una comilla de cierre en el código: __________
- Se utiliza una variable que no existe: __________
- Se intenta llamar a algo que no es una función: __________
- No se encuentra el archivo `horarios.js` indicado por HTML: __________

**10.** Cuando aparece un error en la consola, ¿qué dos datos te ayudan a localizar la instrucción que falló?

**Respuesta:** ____________________ y ____________________

---

## Solucionario (abrir al terminar)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **B.** `script` usa `src` para localizar un archivo JavaScript.
2. **`defer`.** El script externo se ejecuta cuando el HTML ya se ha analizado.
3. **`// comentario`** y **`/* comentario de bloque */`**. Ambos son ignorados al ejecutar.
4. Escribe **Casa** en una línea y **Tomillo** en la siguiente: `\n` produce un salto de línea.
5. **`\t`:** tabulación; **`\"`:** comilla doble; **`\\`:** barra invertida; **`\u20A1`:** símbolo **₡**.
6. **B.** `warn` advierte; `error` muestra error; `log` muestra información normal.
7. El método correcto es **`console.log`**, con `l` minúscula. JavaScript distingue mayúsculas.
8. **Identificador:** nombre elegido por quien programa (ej. `precio`). **Palabra reservada:** término propio del lenguaje (ej. `const`).
9. **SyntaxError · ReferenceError · TypeError · 404.** Son problemas distintos de escritura, ejecución y carga.
10. **Archivo y número de línea** (también conviene leer el tipo y el mensaje de error).

</details>

### Trucos imprescindibles

- **Etiqueta:** `<script src="js/archivo.js"></script>`; revisa rutas antes de depurar el código.
- **`defer`:** útil en scripts externos enlazados desde el `<head>`.
- **`\n`** nueva línea · **`\t`** tabulación · **`\u20A1`** colón costarricense.
- **`console.log`** información · **`console.warn`** advertencia · **`console.error`** error.
- **JavaScript distingue mayúsculas:** `console.log` funciona, `console.Log` no.

**¿Qué aprendí?** Aprendí a escribir scripts, mostrar mensajes y reconocer errores.

---
*Fuentes de clase: `S03_Conceptos_del_dia_Estudiantes.pdf`, `S03_Presentacion_Mi_primer_script.pdf`, `S03_Practica_guiada_Estudiantes.pdf` y `S03_Practica_autonoma_Estudiantes.pdf`.*  
*CSTI12004 · UA1 · Sesión 03 · 12/11/2026 · Greivin Montero Contreras*
