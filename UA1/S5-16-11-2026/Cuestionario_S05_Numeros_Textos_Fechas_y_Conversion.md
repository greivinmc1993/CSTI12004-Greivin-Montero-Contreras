# Cuestionario de repaso · Sesión 05

**Tema:** Números, textos, fechas y conversión de datos  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 16 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Resuelve las **10 preguntas** sin mirar las respuestas. **10–15 minutos.**

## Preguntas

**1.** ¿Cuánto devuelve cada operación?

```js
Math.round(4.6)
Math.floor(4.6)
Math.ceil(4.2)
```

**Respuesta:** __________ · __________ · __________

**2.** ¿Qué resultado muestra este código?

```js
Number.isInteger(2.75)
Math.max(3, 9, 5)
```

**Respuesta:** __________ · __________

**3.** ¿Qué texto se obtiene al ejecutar esta expresión?

```js
"  panadería  ".trim().toUpperCase()
```

**Respuesta:** ______________________________

**4.** ¿Qué representan `length`, `includes("familiar")` y `slice(0, 7)` aplicados a un texto?

**Respuesta:** ________________________________________________________

**5.** Completa la salida que genera esta **plantilla literal**:

```js
const cuota = 26250;
console.log(`Cuota: ${cuota}`);
```

**Respuesta:** ______________________________

**6.** En `new Date(2026, 10, 21)`, ¿qué mes representa el número `10`? ¿Cuál número representa diciembre?

**Respuesta:** __________ · __________

**7.** ¿Qué herramienta se emplea para dar formato de **colones costarricenses** a un número?

- A) `Intl.NumberFormat("es-CR", { style: "currency", currency: "CRC" })`
- B) `Math.max("CRC")`
- C) `Number.isInteger("es-CR")`

**8.** ¿Qué produce cada conversión?

```js
Number("3 fotos")
parseInt("3 fotos")
parseFloat("2.5 kg")
```

**Respuesta:** __________ · __________ · __________

**9.** ¿Qué tipo devuelve `toFixed(2)`? Compruébalo mentalmente:

```js
const precio = 10.5;
typeof precio.toFixed(2)
```

**Respuesta:** ______________________________

**10.** ¿Qué riesgo existe al calcular montos directamente con el valor producido por `toFixed(2)`? ¿Qué debes hacer en su lugar?

**Respuesta:** ________________________________________________________

---

## Solucionario (abrir al terminar)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **5 · 4 · 5.** `round` redondea al más cercano; `floor` hacia abajo; `ceil` hacia arriba.
2. **`false` · `9`.** `2.75` no es entero y `Math.max` selecciona el mayor.
3. **`PANADERÍA`.** `trim` elimina los espacios extremos y `toUpperCase` cambia a mayúsculas.
4. **`length`:** número de caracteres (es propiedad, sin `()`). **`includes`:** comprueba si contiene un fragmento. **`slice`:** extrae caracteres desde una posición hasta antes del índice final.
5. **`Cuota: 26250`.** `${ }` inserta el valor de la variable dentro del texto entre acentos graves.
6. **Noviembre · 11.** En la creación de fechas, los meses empiezan en 0.
7. **A.** `Intl.NumberFormat` permite mostrar importes según el formato local de Costa Rica.
8. **`NaN` · `3` · `2.5`.** `Number` exige un texto numérico válido; `parseInt` y `parseFloat` pueden leer la parte numérica inicial.
9. **`string`.** `toFixed(2)` produce una representación de texto con dos decimales.
10. **Puedes concatenar o mezclar tipos accidentalmente.** Calcula con números originales y usa `toFixed` o `Intl` **solo al mostrar**.

</details>

### Trucos imprescindibles

- **`round`** cercano · **`floor`** piso/abajo · **`ceil`** techo/arriba.
- **`texto.length`** sin paréntesis; **`trim()`**, **`slice()`** y **`includes()`** sí llevan `()`.
- **`new Date(año, mes, día)`:** enero = 0; noviembre = 10; diciembre = 11.
- **`Number`** convierte un texto numérico completo; **`parseInt`** lee enteros; **`parseFloat`** permite decimales.
- **`toFixed` devuelve texto.** Mantén los valores numéricos para calcular y formatea al final.

**¿Qué aprendí?** Aprendí a manipular números, textos, fechas y convertir datos.

---
*Fuentes de clase: `S05_Presentacion_Numeros_textos_y_fechas.pdf`, `S05_Conceptos_del_dia_Estudiantes.pdf` y `S05_Practica_autonoma_Estudiantes.pdf`.*  
*CSTI12004 · UA1 · Sesión 05 · 16/11/2026 · Greivin Montero Contreras*
