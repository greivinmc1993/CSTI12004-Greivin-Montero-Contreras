//! VARIABLE LET CAMBIA PERO CONST NO CAMBIA

const estudio = "Luz Clara";    //* no cambia por ser constante
let citas = 3;                  //* puede cambiar por ser let
console.log(estudio, citas);    //* muestra variables
citas = 4;                      //* cambia el valor de citas
console.log(estudio, citas);
