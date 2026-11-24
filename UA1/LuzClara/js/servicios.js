//! LAS TARIFAS CON CALLBACK

const tarifas = [
    {tarifas: "Individual", monto: 45000},
    {tarifas: "Familiar", monto: 75000},
    {tarifas: "Perfil Profesional", monto: 38000},
    {tarifas: "Catalogo Basico", monto: 30000},
    {tarifas: "Media Jornada", monto: 120000}
];

tarifas.forEach((t) => { console.log(`${t.tarifas}: ${formatoColones(t.monto)}`)})

const nombres = tarifas.map((t) => t.tarifas);
console.log(`Servicios: ${nombres.join(", ")}`);

const economicos = tarifas.filter((t) => t.monto < 50000);
console.log(`Menos de 50000: ${economicos.length}`);

