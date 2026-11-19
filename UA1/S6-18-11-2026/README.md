# Sesión 06 · Condicionales, errores y depuración

Greivin Montero Contreras · CSTI12004 · UA1

## Cómo usar los archivos

1. Extraiga el ZIP.
2. Abra los HTML en el navegador y presione F12 para ver la consola.
3. `casa-tomillo/cursos.html` es una página de demostración. Si ya tiene su propia página, copie únicamente `js/cupos.js` y agregue `<script src="js/cupos.js"></script>` debajo del script de `inscripcion.js`. No reemplace su página existente.
4. No se incluye `inscripcion.js` porque pertenece al proyecto previo y no se proporcionó su contenido.

## Ejercicio 1 · Cupos

Cambie las constantes de `casa-tomillo/js/cupos.js`, guarde y recargue.

| Cupos | Nivel | Resultado esperado |
|---|---|---|
| 6 | Inicial | Hay cupos disponibles; Quedan 6 cupos; No necesita experiencia |
| 2 | Inicial | ¡Últimos cupos!; Quedan 2 cupos; No necesita experiencia |
| 0 | Inicial | Taller lleno; Quedan 0 cupos; No necesita experiencia |
| 6 | Intermedio | Hay cupos disponibles; Quedan 6 cupos; Requiere el nivel inicial |

Cada mensaje aparece en una línea distinta. Prueba adicional: con 1 aparece «Queda 1 cupo».

## Ejercicio 2 · Horario

Abra `UA1/S06/horario/index.html` y recargue para repetir el prompt.

| Entrada | Resultado esperado |
|---|---|
| « Sábado » | El sábado abre de 10:00 a. m. a 7:00 p. m. |
| lunes | El lunes está cerrado |
| Cancelar | No se indicó un día. |

Siempre se muestra «Casa Tomillo · Barrio Amón» al final.
Se comprueba Cancelar antes de usar trim. El default sigue el enunciado: no valida palabras que no sean días.

## Ejercicio 3 · Depuración

`index.html` carga la versión corregida. `original.html` carga la versión con error.
Abra `original.html` con Live Server, entre a Fuentes/Sources en DevTools, abra `descuento_con_error.js`, coloque un breakpoint en la línea 4, recargue y avance con F10.

| Pregunta | Respuesta |
|---|---|
| ¿Qué fallaba? | Las condiciones estaban ordenadas del monto menor al mayor. |
| ¿Por qué daba 5 %? | 120000 cumple monto >= 50000 y entra al primer bloque. El else if ya no se evalúa. |
| ¿Cómo se corrigió? | Se comprobó primero monto >= 100000. |
| Resultado esperado tras corregir | Descuento: 10 % |

## Capturas pendientes de realizar

- Cupos = 2: `UA1/S06/capturas/S06_autonoma_casa tomillo.png`.
- Lunes: `UA1/S06/capturas/S06_autonoma_horario.png`.

Las capturas deben hacerse en su navegador; no se incluyen capturas simuladas.

## Resultados observados

Complete después de ejecutar las pruebas en su navegador:

| Prueba | Lo que mostró mi consola |
|---|---|
| Cupos 6 | Pendiente |
| Cupos 2 | Pendiente |
| Cupos 0 | Pendiente |
| Nivel Intermedio y cupos 6 | Pendiente |
| Sábado | Pendiente |
| Lunes | Pendiente |
| Cancelar | Pendiente |
| Descuento corregido | Pendiente |

## ¿Qué aprendí?

Aprendí a usar condicionales, manejar errores y depurar JavaScript.

## Git

Desde la raíz de su repositorio, después de probar:

```bash
git add .
git commit -m "S06: agrega cupos, horario y corrige descuento"
git push
```
