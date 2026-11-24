# Cuestionario de repaso · Sesión 04

**Tema:** Variables, constantes, tipos y operadores  
**Módulo:** CSTI12004 · Programación web en el entorno cliente  
**Unidad:** UA1 · Elaboración de componentes de software  
**Fecha de la clase:** 13 de noviembre de 2026  
**Estudiante:** Greivin Montero Contreras

> **Instrucciones:** Primero responde. Comprueba después con el solucionario. **10 preguntas · 10–15 minutos.**

## Preguntas

**1.** ¿Cuándo conviene usar `let` y cuándo `const`?

**Respuesta:** ________________________________________________________

**2.** ¿Cuál variable se puede cambiar sin error?

```js
const taller = "Panadería";
let cupos = 8;
```

- A) Solo `taller`
- B) Solo `cupos`
- C) Ninguna

**3.** ¿Qué mostrará `typeof` en cada caso?

```js
typeof "Casa Tomillo"
typeof 95000
typeof true
```

**Respuesta:** __________ · __________ · __________

**4.** Indica si cada dato es **number**, **string**, **boolean** o **null**:

- `1.5`: __________
- `"1.5"`: __________
- `false`: __________
- `null`: __________

**5.** Si `let cupos = 8;` y se inscriben 2 personas, ¿qué instrucción deja `cupos` en 6?

- A) `cupos += 2;`
- B) `cupos -= 2;`
- C) `cupos *= 2;`

**6.** ¿Qué resultado produce `7 % 2` y para qué sirve `%`?

**Respuesta:** ________________________________________________________

**7.** ¿Qué diferencia hay entre `=` y `===`?

**Respuesta:** ________________________________________________________

**8.** ¿Cuál es el valor final de `puedeInscribirse`?

```js
const edad = 19;
const cupos = 2;
const puedeInscribirse = edad >= 18 && cupos > 0;
```

**Respuesta:** __________

**9.** ¿Qué muestra la consola? ¿Por qué?

```js
const personas = prompt("¿Cuántas personas?");
console.log(personas + 1);
```

Si en el cuadro escribes `3`, **¿qué aparece?**

**Respuesta:** ________________________________________________________

**10.** ¿Qué conversión realizarías para sumar **numéricamente** 1 al dato recibido con `prompt`?

**Respuesta (una línea):** ______________________________________________

---

## Solucionario (abrir al terminar)

<details>
<summary><strong>Mostrar respuestas y explicaciones</strong></summary>

1. **`let`** cuando reasignarás su valor; **`const`** cuando no lo reasignarás.
2. **B.** `cupos` se declaró con `let`; reasignar `taller` daría un error.
3. **`string`, `number`, `boolean`.** `typeof` devuelve el tipo del valor.
4. **number · string · boolean · null.** Los números entre comillas son texto.
5. **B.** `-=` resta del valor que ya tiene la variable.
6. **1.** `%` devuelve el residuo (resto) de la división `7 / 2`.
7. **`=` asigna** un valor; **`===` compara** el valor y el tipo.
8. **`true`.** La edad es al menos 18 y aún quedan cupos; ambas comparaciones son verdaderas.
9. **`31`.** `prompt` devuelve texto y `+` concatena `"3"` con `1`.
10. Por ejemplo, **`console.log(Number(personas) + 1);`**. `Number` transforma el texto numérico en número.

</details>

### Trucos imprescindibles

- **`const` por defecto**; usa `let` cuando necesitas reasignar el valor.
- **`=` asigna** · **`===` compara** · **`!==` distinto**.
- **`&&`** exige ambas condiciones · **`||`** al menos una · **`!`** invierte.
- **`prompt` devuelve texto:** convierte con `Number` si necesitas calcular.
- **Números en código:** `95000` y `1.5` (sin separadores de miles y con punto decimal).

**¿Qué aprendí?** Aprendí a usar variables, constantes, tipos, operadores y prompt.

---
*Fuentes de clase: `S04_Conceptos_del_dia_Estudiantes.pdf`, `S04_Presentacion_Variables_tipos_y_operadores.pdf` y `S04_Practica_autonoma_Estudiantes.pdf`.*  
*CSTI12004 · UA1 · Sesión 04 · 13/11/2026 · Greivin Montero Contreras*
