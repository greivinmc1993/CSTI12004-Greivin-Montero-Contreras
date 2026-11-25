# Cuestionario de repaso · Sesión 08: Funciones en JavaScript

> **INA · CSTI12004 · UA1 · Sesión 08**  
> **Estudiante:** Greivin Montero Contreras  
> **Fecha de la clase:** 24 de noviembre de 2026  
> **Duración sugerida:** 10–15 minutos · **10 preguntas**

**Objetivo:** reforzar las funciones, sus parámetros y resultados, validación, ámbito, callbacks y closures.

**Instrucciones:** responde sin abrir el solucionario. Marca tu respuesta o escríbela en tu cuaderno/README. Después abre el bloque de respuestas del final para comprobar y entender cada resultado. Un archivo `.md` en GitHub permite leer las preguntas y desplegar el solucionario, pero **no califica ni guarda automáticamente las respuestas**.

---

## Cuestionario

### 1. Selección única · Declarar y llamar

¿Cuál instrucción **ejecuta** una función previamente declarada llamada `saludar`?

- [ ] A. `function saludar`
- [ ] B. `saludar()`
- [ ] C. `const saludar`
- [ ] D. `return saludar`

### 2. Lectura de código · Parámetros y return

¿Qué muestra la consola?

```javascript
function doble(n) {
  return n * 2;
}
console.log(doble(7));
```

- [ ] A. `7`
- [ ] B. `2`
- [ ] C. `14`
- [ ] D. `undefined`

### 3. Respuesta corta · Parámetro y argumento

En este código, ¿cuál es el **parámetro** y cuál es el **argumento**?

```javascript
function agregarIva(precio) {
  return precio * 1.13;
}
agregarIva(90000);
```

**Mi respuesta:** __________________________________________

### 4. Verdadero o falso · return

Una función que solo ejecuta `console.log("Hola")`, sin usar `return`, devuelve automáticamente el texto `"Hola"`.

- [ ] Verdadero
- [ ] Falso

### 5. Selección única · Función flecha

¿Cuál de las siguientes flechas devuelve el doble de `n`?

- [ ] A. `const doble = (n) => { n * 2; };`
- [ ] B. `const doble = (n) => n * 2;`
- [ ] C. `const doble = (n) => console.log(n);`
- [ ] D. `const doble = n => { return n; };`

### 6. Lectura de código · Validación

¿Qué mostrará este código?

```javascript
function costo(precio, cantidad) {
  if (isNaN(cantidad) || cantidad < 1) {
    return "Cantidad inválida";
  }
  return precio * cantidad;
}
console.log(costo(5000, 0));
```

- [ ] A. `Cantidad inválida`
- [ ] B. `0`
- [ ] C. `5000`
- [ ] D. `NaN`

### 7. Verdadero o falso · Variables locales

La siguiente instrucción puede utilizar `hora` fuera de la función sin producir error:

```javascript
function cita() {
  const hora = "10:00";
}
cita();
console.log(hora);
```

- [ ] Verdadero
- [ ] Falso

### 8. Relacionar · Callbacks de vectores

Relaciona cada método con su propósito escribiendo `forEach`, `map` o `filter`.

| Propósito | Método |
|---|---|
| A. Recorrer y mostrar cada elemento | __________ |
| B. Crear un vector con los precios duplicados | __________ |
| C. Crear un vector solo con los precios menores de ₡50 000 | __________ |

### 9. Lectura de código · filter

¿Qué mostrará la consola?

```javascript
const numeros = [2, 4, 6];
const mayores = numeros.filter(n => n > 3);
console.log(mayores.length);
```

- [ ] A. `1`
- [ ] B. `3`
- [ ] C. `2`
- [ ] D. `6`

### 10. Lectura de código · Closure

¿Qué dos números imprime la consola?

```javascript
function crearContador() {
  let n = 0;
  return () => ++n;
}
const contar = crearContador();
console.log(contar());
console.log(contar());
```

- [ ] A. `1` y `1`
- [ ] B. `1` y `2`
- [ ] C. `0` y `0`
- [ ] D. `2` y `4`

---

<details>
<summary><strong>✅ Mostrar solucionario y explicaciones (abrir solo después de responder)</strong></summary>

### Respuestas explicadas

1. **B — `saludar()`**. Los paréntesis realizan la llamada. Declararla no ejecuta su cuerpo.
2. **C — `14`**. `n` recibe el argumento 7 y `return n * 2` devuelve 14.
3. **Parámetro: `precio`; argumento: `90000`**. El parámetro es la variable de la función y el argumento es el valor enviado.
4. **Falso**. `console.log` muestra «Hola», pero la función sin `return` devuelve `undefined`.
5. **B — `const doble = (n) => n * 2;`**. Una flecha de una sola expresión devuelve ese resultado implícitamente. Si agregas llaves, necesitas `return` para devolverlo.
6. **A — `Cantidad inválida`**. La condición `cantidad < 1` se cumple con 0; el primer `return` detiene la función.
7. **Falso**. `hora` es local a `cita()`. Usarla afuera provoca un `ReferenceError`.
8. **A = `forEach`; B = `map`; C = `filter`**. Hacer algo con cada dato, transformar todos y seleccionar algunos, respectivamente.
9. **C — `2`**. La lista resultante es `[4, 6]`, que tiene dos elementos. `filter()` crea un vector nuevo.
10. **B — `1` y `2`**. El closure recuerda el mismo valor `n` entre las dos llamadas de `contar()`.

**Autoevaluación:** suma 1 punto por pregunta correcta (en la 8, los tres métodos deben estar bien). **Meta sugerida: 8/10 o más.**

</details>

## 5 tips imprescindibles

1. **Paréntesis para llamar:** `saludar()` ejecuta; `saludar` solo se refiere a la función.
2. **Parámetro ≠ argumento:** el primero recibe; el segundo se envía al llamar.
3. **`return` ≠ `console.log`:** uno devuelve un dato; el otro lo muestra en la consola.
4. **Tres verbos:** `forEach` hace, `map` transforma y `filter` selecciona.
5. **Closure = recuerda:** un contador interno conserva su valor entre llamadas.

## ¿Qué aprendí?

> Aprendí funciones, parámetros, retornos, validaciones, callbacks y closures.

---

**Basado en:** `S08_Presentacion_Funciones.pdf`, `S08_Conceptos_del_dia_Estudiantes.pdf` y `S08_Practica_autonoma_Estudiantes.pdf`.
