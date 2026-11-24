# Cuestionario de repaso · Sesión 07

**Tema:** Repeticiones, vectores y matrices en JavaScript  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 23 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Responde sin consultar los apuntes. Las respuestas están al final para que puedas comprobar cuánto recuerdas. **10 preguntas · 10–15 minutos.**

## Preguntas

**1.** ¿Qué ciclo suele ser más práctico cuando sabes cuántas veces se repetirá una acción?

- A) `while`
- B) `for`
- C) `do while`

**2.** ¿Cuántas veces se ejecuta `console.log(i)` en este código?

```js
for (let i = 0; i < 4; i++) {
  console.log(i);
}
```

**Respuesta:** ____________________

**3.** Si la condición es falsa desde el principio, ¿cuántas veces se ejecuta el bloque de un `while` y el de un `do while`?

**Respuesta:** `while`: ______ · `do while`: ______

**4.** Explica brevemente la diferencia entre `break` y `continue` dentro de un ciclo.

**Respuesta:** __________________________________________________________

**5.** Observa el vector:

```js
const talleres = ["Cocina", "Panadería", "Repostería"];
```

¿Cuánto vale `talleres.length` y qué muestra `talleres[1]`?

**Respuesta:** `length`: ______ · `[1]`: ____________________

**6.** ¿Qué muestra el último `console.log`?

```js
const nombres = ["Ana", "Luis"];
nombres.push("Mía");
nombres.pop();
console.log(nombres.join(", "));
```

**Respuesta:** ____________________

**7.** ¿Qué valor tendrá `suma` al terminar?

```js
const precios = [10, 20, 30];
let suma = 0;
for (const precio of precios) {
  suma += precio;
}
console.log(suma);
```

**Respuesta:** ____________________

**8.** ¿Qué se obtiene con `agenda[1][0]`?

```js
const agenda = [
  ["Retrato", "Perfil"],
  ["Libre", "Familiar"]
];
```

**Respuesta:** ____________________

**9.** ¿Qué muestra este código? ¿Es obligatorio llamar `t` al objeto en cada vuelta?

```js
const talleres = [
  { nombre: "Panadería", precio: 95000 },
  { nombre: "Cocina", precio: 68000 }
];
for (const t of talleres) {
  console.log(t.nombre);
}
```

**Respuesta:** __________________________________________________________

**10.** Marca las **dos** afirmaciones correctas:

- A) En un vector, el primer elemento está en la posición `1`.
- B) `i < vector.length` ayuda a evitar recorrer una posición inexistente.
- C) Si un `while` nunca cambia los datos de su condición, puede producir un ciclo infinito.
- D) `length()` se escribe con paréntesis para obtener el tamaño del vector.

**Respuesta:** ______ y ______

---

## Solucionario (revísalo al terminar)

<details>
<summary><strong>Mostrar respuestas y explicación breve</strong></summary>

1. **B) `for`.** Útil cuando se conoce la cantidad de vueltas.
2. **4 veces:** muestra `0`, `1`, `2` y `3`.
3. **`while`: 0; `do while`: 1.** El segundo comprueba la condición después.
4. **`break` termina el ciclo; `continue` salta a la siguiente vuelta.**
5. **`length` = 3; `talleres[1]` = `"Panadería"`.** Las posiciones empiezan en 0.
6. **`Ana, Luis`.** `push` agrega al final, `pop` quita el último y `join` une los restantes.
7. **60.** El acumulador suma `10 + 20 + 30`.
8. **`"Libre"`.** Fila 1 (segunda fila), columna 0 (primera columna).
9. **Muestra `Panadería` y `Cocina`.** No: `t` es un nombre elegido; también podría llamarse `taller`.
10. **B y C.** `length` no lleva paréntesis; el primer índice es `0`.

</details>

### Trucos imprescindibles

- **`for`**: inicio → condición → cambio. **`while`**: primero pregunta. **`do while`**: primero ejecuta.
- **Posiciones:** primer elemento `[0]` · último `[vector.length - 1]`.
- **Acumulador:** `suma += valor`; **contador:** `contador++`.
- **Vector:** `[ ]` · **matriz:** `[fila][columna]` · **objeto:** `{ nombre: valor }` y `objeto.nombre`.
- En ciclos `while`, verifica siempre que la condición pueda llegar a ser falsa.

**¿Qué aprendí?** Aprendí ciclos, vectores, matrices y cómo recorrer datos.

---
*CSTI12004 · UA1 · Sesión 07 · 23/11/2026 · Greivin Montero Contreras*
