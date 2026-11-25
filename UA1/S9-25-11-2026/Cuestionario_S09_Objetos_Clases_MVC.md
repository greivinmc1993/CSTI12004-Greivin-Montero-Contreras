# Cuestionario de repaso · Sesión 09

**Repaso guiado, objetos y clases · UA1 · CSTI12004**  
**Estudiante:** Greivin Montero Contreras  
**Fecha de clase:** 25/11/2026 · Virtual  
**Duración sugerida:** 15–20 minutos · **10 preguntas**  

> **Objetivo:** comprender qué problema resuelve cada herramienta, interpretar código de JavaScript y distinguir las responsabilidades de MVC.
>
> **Instrucciones:** responde primero sin abrir el solucionario. En las preguntas con código, predice el resultado y luego compruébalo en la consola del navegador (F12).

## Parte A · Selección única

**1.** ¿Por qué conviene usar un **vector de objetos** en lugar de dos vectores paralelos para guardar nombre y precio de cada taller?

- [ ] A. Porque evita que se utilice `for`.
- [ ] B. Porque mantiene relacionados los datos de cada taller en un mismo elemento.
- [ ] C. Porque convierte todos los precios en texto.
- [ ] D. Porque impide modificar la información.

**2.** Necesitas recorrer una lista y **detener el recorrido inmediatamente** al encontrar cierto taller. ¿Cuál opción es la más adecuada?

- [ ] A. `for...of` con `break`.
- [ ] B. `forEach()` con `break`.
- [ ] C. `map()` con `break`.
- [ ] D. `filter()` sin condición.

**3.** ¿Cuál es el resultado de este código?

```javascript
const datos = [3, 8, 1];
const resultado = datos.map((n) => n * 2);
console.log(resultado);
```

- [ ] A. `[3, 8, 1]`
- [ ] B. `[6, 16, 2]`
- [ ] C. `[8]`
- [ ] D. `undefined`

**4.** En el patrón **MVC**, ¿quién debe comprobar que una inscripción no supere los ocho cupos disponibles?

- [ ] A. La Vista.
- [ ] B. El Controlador únicamente.
- [ ] C. El Modelo.
- [ ] D. El archivo HTML.

## Parte B · Predice el código

**5.** ¿Qué muestra este código? Escribe el resultado y explica qué hace cada método.

```javascript
const precios = [45000, 75000, 38000];
const salida = precios.filter((p) => p < 50000)
                      .map((p) => p + 10000);
console.log(salida);
```

**Tu respuesta:** ______________________________________________

**6.** ¿Qué muestra este código? Explica qué significan `new` y `this.precio`.

```javascript
class Taller {
  constructor(precio) {
    this.precio = precio;
  }
  doble() {
    return this.precio * 2;
  }
}
const curso = new Taller(40000);
console.log(curso.doble());
```

**Tu respuesta:** ______________________________________________

## Parte C · Verdadero o falso

**7.** `const taller = { precio: 50000 };` impide que después se escriba `taller.precio = 60000;`.

- [ ] Verdadero
- [ ] Falso

**8.** El valor que devuelve `forEach()` es `undefined`, aunque recorra todos los elementos del vector.

- [ ] Verdadero
- [ ] Falso

## Parte D · Respuestas cortas

**9.** Explica con tus palabras la diferencia entre una **propiedad** y un **método**. Escribe un ejemplo corto con `taller.nombre` y `taller.resumen()`.

**Tu respuesta:** ______________________________________________

**10.** La miniaplicación MVC usa estos archivos: `modelo.js`, `vista.js`, `controlador.js` y `grupo.js`. ¿En qué orden deben enlazarse en `contacto.html` y por qué?

**Tu respuesta:** ______________________________________________

---

<details>
<summary><strong>✅ Ver solucionario con explicaciones (abre solo al terminar)</strong></summary>

### Respuestas

**1. B.** Cada objeto guarda los datos juntos. Por ejemplo, `{ nombre: "Panadería", precio: 95000 }`: al mover o eliminar ese objeto, no se separan sus propiedades.

**2. A.** `for...of` permite usar `break` para terminar el recorrido. `forEach()` no se puede interrumpir con `break`.

**3. B: `[6, 16, 2]`.** `map()` aplica la multiplicación a cada elemento y crea un vector nuevo del mismo tamaño.

**4. C: el Modelo.** Las reglas del negocio, como el máximo de ocho cupos, corresponden al modelo. La vista comunica el resultado y el controlador coordina.

**5. `[55000, 48000]`.** `filter()` conserva 45000 y 38000 porque son menores que 50000. Luego `map()` les suma 10000. El arreglo original no se modifica por estas operaciones.

**6. `80000`.** `new Taller(40000)` crea una instancia y ejecuta su constructor. `this.precio` guarda 40000 en ese objeto; `doble()` multiplica esa propiedad por dos.

**7. Falso.** `const` impide reasignar la variable `taller` a otro objeto, pero permite cambiar la propiedad `precio` del objeto existente.

**8. Verdadero.** `forEach()` ejecuta el callback con cada elemento, pero el propio método devuelve `undefined`. Usa `map()` si necesitas otro vector transformado.

**9. Respuesta modelo.** Una propiedad guarda un dato (`taller.nombre`). Un método realiza una acción y se ejecuta con paréntesis (`taller.resumen()`).

**10.** `modelo.js` → `vista.js` → `controlador.js` → `grupo.js`. En los scripts clásicos del ejercicio, el arranque utiliza clases ya declaradas; si se carga antes, puede ocurrir `ReferenceError`.

</details>

## Cinco tips imprescindibles

1. **Vector de objetos:** nombre, precio y nivel del mismo taller permanecen juntos.
2. **Recorrer no es transformar:** `forEach()` recorre, `map()` transforma y `filter()` selecciona.
3. **Propiedad ≠ método:** `taller.nombre` es un dato; `taller.resumen()` llama una acción.
4. **Clase = molde:** `constructor` prepara la instancia, `new` la crea y `this` señala sus datos.
5. **MVC:** el Modelo valida, la Vista muestra y el Controlador coordina. Respeta el orden de scripts del ejercicio.

### ¿Qué aprendí?

> Aprendí a usar objetos, clases, métodos, callbacks y MVC.

---

*CSTI12004 · UA1 · Sesión 09 · 25/11/2026 · Greivin Montero Contreras*
