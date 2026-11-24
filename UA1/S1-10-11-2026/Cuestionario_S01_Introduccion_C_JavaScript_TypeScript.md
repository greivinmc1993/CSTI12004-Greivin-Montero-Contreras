# Cuestionario de repaso · Sesión 01

**Tema:** Introducción al módulo · C, JavaScript y TypeScript · Repaso diagnóstico  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha:** No indicada en los dos documentos S01 consultados  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Responde sin mirar el solucionario. Son **10 preguntas · 10–15 minutos**. Este repaso se basa en el diagnóstico inicial y el cuadro comparativo de la sesión 01.

## Preguntas

**1.** En el ejercicio comparativo, ¿qué lenguaje estudiaste antes y cuáles se introducen en este módulo?

**Respuesta:** ________________________________________________________

**2.** Relaciona el proceso con su explicación:

- A) **Compilar**
- B) **Interpretar**
- C) **Transpilar**

**I.** Traducir código a otro lenguaje de alto nivel.  
**II.** Traducir código a máquina antes de ejecutarlo.  
**III.** Leer y ejecutar código mediante un intérprete.

**Respuesta:** A → ___ · B → ___ · C → ___

**3.** ¿Cuál afirmación corresponde a TypeScript en la comparación de clase?

- A) Se ejecuta directamente como TypeScript en cualquier navegador.
- B) Es una extensión de JavaScript que permite declarar y comprobar tipos.
- C) Solo sirve para crear programas escritos en C.

**4.** ¿Cuál de estas declaraciones corresponde a JavaScript y cuál a TypeScript?

```js
let edad = 20;
let edad: number = 20;
```

**Respuesta:** Primera: __________ · Segunda: __________

**5.** En el diagnóstico de C, ¿cuánto muestra `printf`?

```c
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) total += i;
}
printf("%d", total);
```

**Respuesta:** __________

**6.** Para una página accesible, ¿qué etiquetas/atributos debes usar en estos casos?

- Menú principal: `<________>`
- Texto alternativo de una imagen: atributo `________`
- Contenido principal de la página: `<________>`

**7.** Con el modelo de caja CSS normal (`content-box`), calcula el ancho de borde a borde y el ancho horizontal contando márgenes:

```css
.tarjeta { width: 200px; padding: 10px; border: 2px solid; margin: 5px; }
```

**Respuesta:** Borde a borde: ______ px · Con márgenes: ______ px

**8.** ¿Qué muestran las expresiones de la actividad diagnóstica?

```js
console.log("5" + 3);
console.log("5" - 3);
```

**Respuesta:** Primera: ______ · Segunda: ______

**9.** Ordena estos comandos para registrar y subir un archivo nuevo al repositorio (1 al 4):

- ___ `git push`
- ___ `git add index.html`
- ___ `git status`
- ___ `git commit -m "Agrega index.html"`

**10.** Menciona **dos** prácticas que faciliten el uso de una página web con lector de pantalla.

**Respuesta:** ________________________________________________________

---

## Solucionario (abrir después de responder)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **C** fue el lenguaje anterior; en este módulo se introducen **JavaScript** (UA1 a UA3) y **TypeScript** (UA4).
2. **A → II; B → III; C → I.** Compilar, interpretar y transpilar son procesos diferentes.
3. **B.** TypeScript extiende JavaScript con comprobación de tipos y luego se transforma en JavaScript para ejecutarse en el navegador.
4. **Primera: JavaScript; segunda: TypeScript.** `: number` es una anotación de tipo de TypeScript.
5. **6.** Solo suma los números pares entre 1 y 5: `2 + 4`.
6. **`<nav>` · `alt` · `<main>`.** Son elementos/atributos semánticos y de accesibilidad del diagnóstico.
7. **224 px** de borde a borde: `200 + 10 + 10 + 2 + 2`. **234 px** con márgenes: `224 + 5 + 5`.
8. **`53` y `2`.** El `+` concatena si uno de los valores es texto; `-` convierte el texto numérico antes de restar.
9. **`git status` (1) → `git add index.html` (2) → `git commit ...` (3) → `git push` (4).** Primero revisas, luego preparas, registras y subes.
10. Por ejemplo, **usar etiquetas semánticas y asociar correctamente `label` con los campos de formulario**, o proporcionar **atributos `alt` significativos** en imágenes informativas.

</details>

### Trucos imprescindibles

- **Compilar:** traducir para ejecutar · **interpretar:** ejecutar mediante un intérprete · **transpilar:** traducir a otro lenguaje.
- **C → JavaScript → TypeScript:** observa diferencias de tipado, herramientas y lugar de ejecución.
- **HTML semántico:** `nav` = navegación · `main` = contenido principal · `alt` = descripción de imagen.
- **Caja CSS:** ancho total = contenido + `padding` izquierdo/derecho + `border` izquierdo/derecho; los márgenes se suman aparte.
- **Git:** `status → add → commit → push`. El diagnóstico fue para detectar conocimientos previos, no para asignar una nota.

**¿Qué aprendí?** Aprendí diferencias entre C, JavaScript y TypeScript.

---
*Fuentes de clase: `S01_Cuadro_comparativo_Estudiantes.docx` y `S01_Diagnostico_general_Estudiantes.docx`.*  
*CSTI12004 · UA1 · Sesión 01 · Greivin Montero Contreras*
