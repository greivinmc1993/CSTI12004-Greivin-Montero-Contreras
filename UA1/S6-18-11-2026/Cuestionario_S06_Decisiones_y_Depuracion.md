# Cuestionario de repaso · Sesión 06

**Tema:** Decisiones y depuración en el navegador  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 18 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Responde primero y consulta el solucionario después. **10 preguntas · 10–15 minutos.**

## Preguntas

**1.** ¿Cuántos bloques de `if / else if / else` se ejecutan cuando varias condiciones podrían ser verdaderas?

**Respuesta:** ______________________________

**2.** ¿Qué mostrará este código?

```js
const horas = 2;
if (horas <= 1) {
  console.log("Corta");
} else if (horas <= 3) {
  console.log("Media");
} else {
  console.log("Larga");
}
```

**Respuesta:** ______________________________

**3.** En un sistema de descuentos, ¿qué condición debería comprobarse **primero**?

- A) `monto >= 50000`
- B) `monto >= 100000`
- C) Son intercambiables si se usa `else if`

**4.** ¿Qué texto almacena `estado`?

```js
const cupos = 0;
const estado = cupos > 0 ? "Disponible" : "Lleno";
```

**Respuesta:** ______________________________

**5.** ¿Cuál es el objetivo de `break` dentro de un `switch`? ¿Qué papel tiene `default`?

**Respuesta:** ________________________________________________________

**6.** ¿Por qué `case "sábado":` no coincide con un valor `"Sábado"`?

**Respuesta:** ________________________________________________________

**7.** Ordena los pasos básicos para poner un punto de interrupción en Chrome:

- ___ Abrir Sources y el archivo `.js`.
- ___ Recargar la página (F5) para que el programa llegue al punto.
- ___ Abrir las herramientas del desarrollador (F12).
- ___ Hacer clic en el número de la línea.

**8.** Con el programa en pausa, ¿qué hacen **F10** y **F8** según la guía?

**Respuesta:** F10: ____________________ · F8: ____________________

**9.** Explica qué hace cada bloque: `try`, `catch`, `finally`.

**Respuesta:** ________________________________________________________

**10.** ¿Qué riesgo hay al ejecutar `nombre.trim()` después de `prompt` si el usuario hace clic en **Cancelar**? ¿Cómo podrías controlarlo?

**Respuesta:** ________________________________________________________

---

## Solucionario (abrir al terminar)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **Uno:** el primer bloque cuya condición sea verdadera. Los siguientes ya no se evalúan.
2. **`Media`.** `2 <= 1` es falso, pero `2 <= 3` es verdadero.
3. **B.** La condición más exigente va antes; la más amplia (`>= 50000`) abarcaría también montos altos.
4. **`Lleno`.** La condición `cupos > 0` es falsa y se usa la opción después de `:`.
5. **`break` sale del `switch`; `default` cubre los valores que no coinciden con ningún `case`.** Sin `break` puede continuar el caso siguiente.
6. **Distingue mayúsculas/minúsculas:** son textos diferentes; el `switch` realiza comparación estricta. Se puede normalizar el texto con `trim().toLowerCase()`.
7. **F12 (1) → Sources/archivo (2) → clic número de línea (3) → F5 (4).** Entonces inspecciona el valor de las variables.
8. **F10:** avanza una línea. **F8:** continúa la ejecución.
9. **`try`:** intenta; **`catch`:** atrapa un error que se produce; **`finally`:** ejecuta el bloque final haya o no error.
10. **`prompt` puede devolver `null`; `null.trim()` produce un `TypeError`.** Revisar si la respuesta es `null` antes de llamar al método o usar manejo apropiado de errores.

</details>

### Trucos imprescindibles

- **`if / else if`:** de lo más exigente a lo más amplio; solo ejecuta el primer bloque verdadero.
- **Ternario:** `condición ? valorTrue : valorFalse` para elegir entre **dos** resultados.
- **`switch`:** `case` compara valores · `break` sale · `default` es el caso restante.
- **Depurar:** F12 → Sources → punto de interrupción → F5; luego **F10** avanza y **F8** continúa.
- **`prompt` + Cancelar = `null`:** compruébalo antes de usar `.trim()` u otros métodos.

**¿Qué aprendí?** Aprendí condicionales, ternarios, switch, depuración y manejo de errores.

---
*Fuentes de clase: `S06_1.Presentacion_Decisiones_y_depuracion.pdf`, `S06_2.Conceptos_del_dia_Estudiantes.pdf`, `S06_3.Guia_de_estudio_asincronica_Estudiantes.pdf` y `S06_4.Practica_autonoma_Estudiantes.pdf`.*  
*CSTI12004 · UA1 · Sesión 06 · 18/11/2026 · Greivin Montero Contreras*
